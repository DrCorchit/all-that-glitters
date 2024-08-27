import fs, {createReadStream} from "fs";
import rd from "readline";
import {once} from "node:events";
import {FileBuilder, ObjectBuilder} from "../utils/tsxBuilder";
import {normalize} from "../utils/utils";
import {classFeat, FeatJson, featLevelReqFormula, FeatType, featTypes} from "../concepts/feat";
import {classes, CombatClass} from "../generated/combatClass";

const typeRegex = /^\s*(?<study>\w+)\s*$/;
const featsRegex = /^\s*(?<level>\d+)\|(?<name>.*?)\|(?<slots>\d+)\|(?<reqs>[^|]*)\|(?<description>[^|]*)$/;

const attrReqRegex = /^(?<attr>\w+) (?<level>\d+)/;

async function parseFeatsFile(): Promise<FeatJson[]> {
	const reader = rd.createInterface(createReadStream("src/resources/feats/feats.txt"));
	let featType: FeatType | undefined = undefined;
	let clazz: CombatClass | undefined = undefined;
	const feats: FeatJson[] = [];

	reader.on("line", line => {
		line = line.trim();
		const temp = line.match(typeRegex);

		if (!line) {
			return;
		} else if (temp) {
			switch (temp[0].toLowerCase()) {
				case "arcane":
				case "common":
				case "mundane":
					featType = featTypes.lookup(temp[0]);
					clazz = undefined;
					break;
				default:
					featType = classFeat;
					clazz = classes.lookup(temp[0]);
					break;
			}
		} else if (featType) {
			feats.push(parseFeat(line, featType, clazz));
		} else {
			throw new Error(`Could not parse feat line: ${line} type: ${featType}`);
		}
	});

	reader.on("close", () => {
		console.log(`Parsed ${feats.length} feats.`);
	});

	await once(reader, "close");

	return feats;
}

function parseFeat(line: string, featType: FeatType, clazz?: CombatClass): FeatJson {
	const match = line.match(featsRegex);

	if (!match || !match.groups) {
		throw new Error(`Could not parse feat <${match}>`);
	}

	const level = Number(match.groups["level"]);
	const name = match.groups["name"];
	const slots = Number(match.groups["slots"]);
	const reqs = match.groups["reqs"];
	const description = match.groups["description"];

	console.log(`${name} ---> ${featType}`);

	if (!reqs) {
		throw new Error(`Could not parse feat reqs <${line}>`);
	}

	const output = {
		name: name,
		description: description,
		level: level,
		featType: featType,
		trainingReqs: {
			level: featLevelReqFormula(level),
			slots: slots,
			stats: {},
			feats: [],
			clazz: clazz,
		},
	};

	reqs.split(",").forEach(req => parseReq(output, req));

	return output;
}

function parseReq(feat: FeatJson, req: string) {
	const match = req.match(attrReqRegex);
	if (match?.groups) {
		const attr = match.groups["attr"];
		const level = Number(match.groups["level"]);

		switch (attr.toLowerCase()) {
			case "str":
				feat.trainingReqs.stats.str = level;
				break;
			case "dex":
				feat.trainingReqs.stats.dex = level;
				break;
			case "spd":
				feat.trainingReqs.stats.spd = level;
				break;
			case "int":
				feat.trainingReqs.stats.int = level;
				break;
			case "nst":
				feat.trainingReqs.stats.nst = level;
				break;
			case "cha":
				feat.trainingReqs.stats.cha = level;
				break;
			default:
				throw new Error("Unknown attribute: " + attr);
		}
	} else {
		feat.trainingReqs.feats.push(req);
	}
}

function buildFeatObject(json: FeatJson): string {
	const builder = new ObjectBuilder();
	builder.withString("name", json.name);
	builder.withTSX("description", json.description);
	builder.withValue("level", json.level);
	builder.withValue("featType", `featTypes.lookup("${json.featType.name}")`);

	const trainReqs = new ObjectBuilder();
	trainReqs.withValue("level", json.trainingReqs.level);
	trainReqs.withValue("slots", json.trainingReqs.slots);
	trainReqs.withStringArray("feats", json.trainingReqs.feats);
	const stats = new ObjectBuilder();
	Object.entries(json.trainingReqs.stats).forEach(entry => {
		stats.withValue(entry[0], entry[1]);
	});
	trainReqs.withValue("stats", stats.build());
	if (json.trainingReqs.clazz) {
		trainReqs.withValue("clazz", `classes.lookup("${json.trainingReqs.clazz.name}")`);
	}

	builder.withValue("trainingReqs", trainReqs.build());

	return builder.build();
}

async function buildFeatsFile() {
	const json = await parseFeatsFile();

	const featObjects = json.map(obj => {
		const name = normalize(obj.name);
		const tsx = buildFeatObject(obj);
		return [name, tsx];
	});

	const builder = new FileBuilder();
	builder.withImport('import Sub from "../components/Sub";');
	builder.withImport('import Tooltip from "../components/Tooltip";');
	builder.withImport('import Source from "../utils/source";');
	//builder.withImport('import {AppendixLink, ChapterLink} from "../components/InternalLink";');
	builder.withImport('import {featTypes, FeatTSX} from "../concepts/feat";');
	//builder.withImport("import {classes} from ../generated/classes");

	featObjects.forEach(info => {
		const [name, tsx] = info;
		builder.withMember(`export const ${name}: FeatTSX = ${tsx};`);
	});
	const array = featObjects.map(info => info[0]).join(", ");

	builder.withMember(`const allFeats: FeatTSX[] = [${array}]`);

	builder.withMember(`export const feats = new Source<FeatTSX>(
	"Feats",
	allFeats,
	feat => feat.name,
	(item, text) => \`<AppendixLink appendix={2} target={item.name}>\${text ?? item.name}</InternalLink>\`
);`);

	return builder.build();
}

export async function assembleFeats() {
	fs.writeFileSync("src/generated/feats.tsx", await buildFeatsFile());
}
