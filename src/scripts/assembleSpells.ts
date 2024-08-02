import {createReadStream, writeFileSync} from "fs";
import {rarities, SpellJson} from "../concepts/spell";
import rd from "readline";
import {templatize} from "../utils/templatizer";
import {studies} from "../concepts/school";
import {once} from "node:events";

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
			console.log("Study --> " + study);
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
	slotCost += Math.floor(json.level / 2);
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

export async function assembleSpells(): Promise<void> {
	const spellsJson = await parseSpellsFile();
	spellsJson.map(spell => initSpell(spell));
	let output = JSON.stringify(spellsJson);
	output = templatize(output);
	//writeFileSync("src/generated/spells.json", output);
}
