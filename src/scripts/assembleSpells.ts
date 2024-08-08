import fs, {createReadStream} from "fs";
import rd from "readline";
import {once} from "node:events";
import {FileBuilder, ObjectBuilder} from "../utils/tsxBuilder";
import {rarities, SpellJson, studies} from "../concepts/magic";
import {normalize} from "../utils/utils";

const studyRegex = /^\s*(?<study>\w+)\s*$/;
const spellsRegex = /^\s*(?<level>\d+)\|(?<name>.*?)\|(?<info>.*?)\|(?<description>.*?)$/;
const infoRegex = /(?<rarity>[a-zA-Z]+) (?<type>[a-zA-Z]+) (?<evocation>\d+),?(?<concentration>\d+)?/;

async function parseSpellsFile(): Promise<SpellJson[]> {
	const reader = rd.createInterface(createReadStream("src/resources/magic/spells.txt"));
	let study: string | undefined = undefined;
	const spells: SpellJson[] = [];

	reader.on("line", line => {
		const temp = line.match(studyRegex);
		if (temp) {
			study = temp[0];
			//console.log("Study --> " + study);
		} else if (study) {
			spells.push(parseSpell(line, study));
		} else {
			throw new Error(`Could not parse spell line: ${line} study: ${study}`);
		}
	});

	reader.on("close", () => {
		console.log(`Parsed ${spells.length} spells.`);
	});

	await once(reader, "close");

	return spells;
}

function parseSpell(line: string, study: string): SpellJson {
	const match = line.match(spellsRegex);

	if (!match || !match.groups) {
		throw new Error(`Could not parse spell <${match}>`);
	}

	const level = Number(match.groups["level"]);
	const name = match.groups["name"];
	const info = match.groups["info"].match(infoRegex);
	const description = match.groups["description"];

	if (!info || !info.groups) {
		throw new Error(`Could not parse spell info <${match.groups["info"]}>`);
	}

	const rarity = info.groups["rarity"];
	const type = info.groups["type"];
	const evocation = Number(info.groups["evocation"]);
	const concentration = Number(info.groups["concentration"]) ?? 0;

	return {
		name: name,
		description: description,
		level: level,
		rarity: rarity,
		type: type,
		study: study,
		trainingReqs: {
			level: 1,
			slots: 1,
		},
		castingReqs: {
			evocation: evocation,
			concentration: concentration,
			time: "1 Action",
		},
	};
}

function initSpell(json: SpellJson): SpellJson {
	try {
		return {
			...json,
			trainingReqs: {
				level: spellMinLevelFormula(json),
				slots: spellSlotCostFormula(json),
				gold: spellGoldCostFormula(json),
				INT: spellINTFormula(json),
				NST: spellNSTFormula(json),
				CHA: spellCHAFormula(json),
			},
		};
	} catch (e) {
		throw new Error(`Error while initializing spell: ${json.name}`, {cause: e});
	}
}

function spellMinLevelFormula(json: SpellJson) {
	return 2 * json.level - 1;
}

function spellSlotCostFormula(json: SpellJson) {
	let slotCost = rarities.lookup(json.rarity).slots;
	slotCost += Math.floor(json.level / 3);
	return slotCost;
}

function spellGoldCostFormula(json: SpellJson): number | undefined {
	const rarity = rarities.lookup(json.rarity);
	if (rarity.gold > 0) return rarity.gold * json.level;
}

function spellINTFormula(json: SpellJson): number | undefined {
	const study = studies.lookup(json.study);
	if (study.school().attr.abbr == "INT") {
		return 10 + json.level;
	}
}

function spellNSTFormula(json: SpellJson): number | undefined {
	const study = studies.lookup(json.study);
	if (study.school().attr.abbr == "NST") {
		return 10 + json.level;
	}
}

function spellCHAFormula(json: SpellJson): number | undefined {
	const study = studies.lookup(json.study);
	if (study.school().attr.abbr == "CHA") {
		return 10 + json.level;
	}
}

function buildSpellObject(json: SpellJson): string {
	const builder = new ObjectBuilder();
	builder.withString("name", json.name);
	builder.withTSX("description", json.description);
	builder.withValue("level", json.level);
	builder.withString("rarity", json.rarity);
	builder.withString("type", json.type);
	builder.withString("study", json.study);

	const trainReqs = new ObjectBuilder();
	trainReqs.withValue("level", json.trainingReqs.level);
	trainReqs.withValue("slots", json.trainingReqs.slots);
	trainReqs.withValue("gold", json.trainingReqs.gold);
	trainReqs.withValue("INT", json.trainingReqs.INT);
	trainReqs.withValue("NST", json.trainingReqs.NST);
	trainReqs.withValue("CHA", json.trainingReqs.CHA);
	builder.withValue("trainingReqs", trainReqs.build());

	const castReqs = new ObjectBuilder();
	castReqs.withString("time", json.castingReqs.time);
	castReqs.withValue("evocation", json.castingReqs.evocation);
	castReqs.withValue("concentration", json.castingReqs.concentration);
	builder.withValue("castingReqs", castReqs.build());

	return builder.build();
}

async function buildSpellsFile() {
	const json = await parseSpellsFile();

	const spellObjects = json.map(obj => {
		const name = normalize(obj.name);
		const tsx = buildSpellObject(initSpell(obj));
		return [name, tsx];
	});

	const builder = new FileBuilder();
	builder.withImport('import Sub from "../components/Sub";');
	builder.withImport('import Tooltip from "../components/Tooltip";');
	builder.withImport('import Source from "../utils/source";');
	builder.withImport('import {AppendixLink, ChapterLink} from "../components/InternalLink";');
	builder.withImport('import {School, Spell, Study} from "../concepts/magic";');

	spellObjects.forEach(info => {
		const [name, tsx] = info;
		builder.withMember(`export const ${name} = new Spell(${tsx});`);
	});
	const array = spellObjects.map(info => info[0]).join(", ");

	builder.withMember(`const allSpells: Spell[] = [${array}]`);

	builder.withMember(`export const spells = new Source<Spell>(
	"Spells",
	allSpells,
	spell => spell.name,
	(item, text) => \`<AppendixLink appendix={1} target={item.name}>\${text ?? item.name}</InternalLink>\`
);`);

	builder.withMember(`export function lookupSpellsByStudy(study: Study): Spell[] {
	return spells.array.filter(spell => {
		return spell.study === study;
	});
}`);

	builder.withMember(`export function lookupSpellsBySchool(school: School): Spell[] {
	return spells.array.filter(spell => {
		return school.studies.includes(spell.study);
	});
}
`);

	return builder.build();
}

export async function assembleSpells() {
	fs.writeFileSync("src/generated/spell.tsx", await buildSpellsFile());
}
