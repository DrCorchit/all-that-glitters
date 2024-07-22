import {alignments} from "../concepts/alignment";
import {armor} from "../concepts/armor";
import {attributes} from "../concepts/attribute";
import {genera, phyla, planes, spirits} from "../concepts/bestiary";
import {combatCategories} from "../concepts/combatCategory";
import {classes} from "../concepts/combatClass";
import {damageTypes} from "../concepts/damageType";
import {athleticsFeats, combatFeats} from "../concepts/feat";
import {items} from "../concepts/item";
import {materials} from "../concepts/material";
import {races} from "../concepts/race";
import {schools} from "../concepts/school";
import {sizes} from "../concepts/size";
import {skills} from "../concepts/skill";
import {spells} from "../concepts/spell";
import {statuses} from "../concepts/statusEffect";
import {weaponKeywords, weapons, weaponTypes} from "../concepts/weapon";
import {Plugin} from "vite";
import assembleSpells from "./assembleSpells";
import {chapters} from "../components/ChapterInfo";
import {appendices} from "../components/AppendixInfo";
import {normalize} from "../utils/utils";
import {keywords} from "../utils/keyword";
import {assembleClasses} from "./assembleClasses";

const matchRegex = /\{\{(.*?)}}/g;
const contentRegex = /(?<path>\w+(\.\w+)*)(#(?<text>.*))?/;

export function templatize(input: string): string {
	//const result = matchRegex.exec(input);
	const matches = Array.from(input.matchAll(matchRegex));

	//This means the input didn't have any {{ }}
	if (matches.length == 0) {
		console.log(`Nothing to replace in input: [${matches}]`);
		return input;
	}

	const output = Array<string>();
	let last = 0;
	matches.forEach(match => {
		const start = match.index;
		const end = match.index + match[0].length;
		if (start > last) {
			output.push(input.substring(last, start));
		}

		output.push(replace(input.substring(start, end)));
		last = end;
	});
	output.push(input.substring(last, input.length));

	return output.join(" ");
}

export interface Replacer {
	name: string;
	values: (value: string, name?: string) => string;
	delegates: Replacer[];
}

const replacers: Replacer[] = [
	chapters,
	appendices,
	keywords,
	alignments,
	armor,
	attributes,
	planes,
	spirits,
	phyla,
	genera,
	combatCategories,
	classes,
	damageTypes,
	athleticsFeats,
	combatFeats,
	items,
	materials,
	races,
	schools,
	sizes,
	skills,
	spells,
	statuses,
	weaponKeywords,
	weaponTypes,
	weapons,
];

const root: Replacer = {
	name: "root",
	values: arg => {
		throw new Error(`No value '${arg}' in root replacer`);
	},
	delegates: replacers,
};

function replace(input: string): string {
	const result = contentRegex.exec(input);

	if (!result || !result.groups) {
		throw new Error("Could not parse: " + input);
	}

	const path = result.groups["path"].split(".");
	const text = result.groups["name"];

	const output = replaceHelper(root, 0, path, text);
	console.log(`Replaced ${input} with ${output}`);
	return output;
}

function replaceHelper(replacer: Replacer, index: number, path: string[], text?: string): string {
	const key = normalize(path[index]);
	if (index == path.length - 1) {
		return replacer.values(key, text);
	} else {
		const next = replacer.delegates.find(item => normalize(item.name) === key);
		if (!next) {
			const message = `No field '${key}' in ${replacer.name} (evaluating ${path.join(".")})`;
			console.log(message);
			//throw new Error(message);
			return path.join(".");
		}
		return replaceHelper(next, index + 1, path, text);
	}
}

export default function prebuild(): Plugin {
	return {
		name: "prebuild",
		async configResolved() {
			console.log("Assembling spells.json...");
			await assembleSpells();
			//console.log("Assembling classes.json");
			assembleClasses();
			console.log("Finished Prebuild.");
		},
	};
}
