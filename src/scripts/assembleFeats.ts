import fs, {createReadStream} from "fs";
import rd from "readline";
import {once} from "node:events";
import {FileBuilder} from "../utils/tsxBuilder";
import {classFeat, Feat, featLevelReqFormula, FeatType, featTypes} from "../concepts/feat";
import {createDirectory} from "../utils/tsxDirectory";

const typeRegex = /^\s*(?<study>\w+)\s*$/;
const featsRegex = /^\s*(?<level>\d+)\|(?<name>.*?)\|(?<slots>\d+)\|(?<reqs>[^|]*)\|(?<description>[^|]*)$/;

const attrReqRegex = /^(?<attr>\w+) (?<level>\d+)/;

async function parseFeatsFile(): Promise<Feat[]> {
	const reader = rd.createInterface(createReadStream("src/resources/sheet/feats.txt"));
	let featType: FeatType | undefined = undefined;
	let clazz: string | undefined = undefined;
	const feats: Feat[] = [];

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
					clazz = temp[0];
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

function parseFeat(line: string, featType: FeatType, clazz?: string): Feat {
	const match = line.match(featsRegex);

	if (!match || !match.groups) {
		throw new Error(`Could not parse feat <${match}>`);
	}

	const level = Number(match.groups["level"]);
	const name = match.groups["name"];
	const slots = Number(match.groups["slots"]);
	const reqs = match.groups["reqs"];
	const description = match.groups["description"];

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

function parseReq(feat: Feat, req: string) {
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

const featReplacer: (this: any, key: string, value: any) => any = (key, value) => {
	if (key === "featType") {
		return value.name;
	} else {
		return value;
	}
};

export async function assembleFeats() {
	const feats = await parseFeatsFile();

	fs.writeFileSync("src/generated/feats.json", JSON.stringify(feats, featReplacer, 2));

	createDirectory(
		"featDescriptions",
		feats,
		feat => feat.name,
		feat => feat.description
	)
		.withImport(`import { AppendixLink } from "../components/InternalLink"`)
		.withImport(`import Sub from "../components/Sub";`)
		.withImport(`import Tooltip from "../components/Tooltip"`)
		.save("src/generated/featDescriptions.tsx");
}
