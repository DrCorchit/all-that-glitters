import {appendices} from "../components/AppendixInfo";
import {chapters} from "../components/ChapterInfo";
import {alignments} from "../concepts/alignment";
import {armor} from "../concepts/armor";
import {attributes} from "../concepts/attribute";
import {creatures, genera, phyla, planes, spirits} from "../concepts/bestiary";
import {combatCategories} from "../concepts/combatCategory";
import {combatClasses} from "../concepts/combatClass";
import {damageTypes} from "../concepts/damageType";
import {featTypes, feats, proficiencies} from "../concepts/feat";
import {itemCategories, items} from "../concepts/item";
import {spellRarities, spellSchools, spellStudies, spells} from "../concepts/magic";
import {materials} from "../concepts/material";
import {races} from "../concepts/race";
import {sizes} from "../concepts/size";
import {skills} from "../concepts/skill";
import {statuses} from "../concepts/statusEffect";
import {weaponKeywords, weaponTypes, weapons} from "../concepts/weapon";
import {keywords} from "./keyword";

//This is here to make sure things get loaded when they should
const replacers: Replacer[] = [
	chapters,
	appendices,
	keywords,
	alignments,
	armor,
	attributes,
	combatCategories,
	combatClasses,
	creatures,
	damageTypes,
	featTypes,
	feats,
	genera,
	itemCategories,
	items,
	materials,
	phyla,
	planes,
	proficiencies,
	races,
	skills,
	spellRarities,
	spellSchools,
	spellStudies,
	spells,
	spirits,
	sizes,
	statuses,
	weaponKeywords,
	weaponTypes,
	weapons,
];

export interface Replacer {
	name: string;
	values: (value: string, name?: string, tsx?: boolean) => string;
	delegates: Replacer[];
}

export const root: Replacer = {
	name: "root",
	values: arg => {
		throw new Error(`No value '${arg}' in root replacer`);
	},
	delegates: replacers,
};
