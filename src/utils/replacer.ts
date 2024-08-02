import {appendices} from "../components/AppendixInfo";
import {chapters} from "../components/ChapterInfo";
import {keywords} from "./keyword";
import {alignments} from "../concepts/alignment";
import {armor} from "../concepts/armor";
import {attributes} from "../concepts/attribute";
import {planes, spirits, phyla, genera} from "../concepts/bestiary";
import {combatCategories} from "../concepts/combatCategory";
//import {damageTypes} from "../concepts/damageType";
import {athleticsFeats, combatFeats} from "../concepts/feat";
import {items} from "../concepts/item";
import {materials} from "../concepts/material";
import {schools} from "../concepts/school";
import {sizes} from "../concepts/size";
import {skills} from "../concepts/skill";
// import {spells} from "../concepts/spell";
// import {statuses} from "../concepts/statusEffect";
// import {weaponKeywords, weaponTypes, weapons} from "../concepts/weapon";
// import {classes} from "../generated/combatClass";

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
	// classes,
	// damageTypes,
	athleticsFeats,
	combatFeats,
	items,
	materials,
	schools,
	sizes,
	skills,
	// spells,
	// statuses,
	// weaponKeywords,
	// weaponTypes,
	// weapons,
];

export const root: Replacer = {
	name: "root",
	values: arg => {
		throw new Error(`No value '${arg}' in root replacer`);
	},
	delegates: replacers,
};
