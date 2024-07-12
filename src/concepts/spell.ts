import rarityJson from "../resources/magic/rarity.json";
import spellsJson from "../resources/magic/spells.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";
import {normalize, toOrdinal} from "../utils/utils";
import {School, studies, Study} from "./school";

export interface Rarity extends Keyword {}
export const rarities = new Source<Rarity>("Rarities", rarityJson, rarity => rarity.name);

export type Type = "Evocation" | "Concentration" | "Ritual" | "Ceremony";

export interface TrainingReqs {
	level: number;
	slots: number;
	int: number;
	nst: number;
	cha: number;
}

export interface CastingReqs {
	time: string;
	evocation: number;
	concentration: number;
}

export class Spell {
	name: string;
	description: string;
	level: number;
	rarity: Rarity;
	type: Type;
	study: Study;
	trainingReqs: TrainingReqs;
	castingReqs: CastingReqs;
	//Derived Properties
	id: string;
	blurb: string;

	constructor(json: {
		name: string;
		description: string;
		level: number;
		rarity: string;
		type: string;
		study: string;
		trainingReqs: {
			level: number;
			slots: number;
			INT?: number;
			NST?: number;
			CHA?: number;
		};
		castingReqs: {
			time: string;
			evocation: number;
			concentration?: number;
		};
	}) {
		this.name = json.name;
		this.description = json.description;
		this.level = json.level;
		this.rarity = rarities.lookup(json.rarity);
		this.type = json.type as Type;
		this.study = studies.lookup(json.study);
		this.trainingReqs = {
			level: json.trainingReqs.level,
			slots: json.trainingReqs.slots,
			int: json.trainingReqs.INT ?? 0,
			nst: json.trainingReqs.NST ?? 0,
			cha: json.trainingReqs.CHA ?? 0,
		};
		this.castingReqs = {
			time: json.castingReqs.time,
			evocation: json.castingReqs.evocation,
			concentration: json.castingReqs.concentration ?? 0,
		};
		this.id = normalize(this.name);
		this.blurb = makeBlurb(this);
	}
}

export const spells = new Source<Spell>(
	"Spells",
	spellsJson.map(json => new Spell(json)),
	spell => spell.name
);

function makeBlurb(spell: Spell): string {
	const prefix = getPrefix(spell);
	const base = getBase(spell);
	const suffix = getSuffix(spell);

	return `${prefix} ${base} ${suffix}`.trim();
}

function getPrefix(spell: Spell): string {
	//const defaultRarity: Rarity =	spell.study.school == "Shamanism" ? "Esoteric" : "Common";
	const level = toOrdinal(spell.level);
	const rarity = spell.rarity.name === "Common" ? "" : spell.rarity.name;
	return `${level} level ${rarity}`;
}

function getBase(spell: Spell): String {
	const study = normalize(spell.study.name);
	switch (study) {
		case "pharmacology":
			return `Alchemical Potion`;
		case "toxicology":
			return `Alchemical Toxin`;
		default:
			return `${spell.study.adjective} ${spell.type}`;
	}
}

function getSuffix(spell: Spell): string {
	return spell.type === "Evocation" || spell.type === "Concentration" ? "spell" : "";
}

export function lookupSpellsByStudy(study: Study): Spell[] {
	return spells.array.filter(spell => {
		return spell.study === study;
	});
}

export function lookupSpellsBySchool(school: School): Spell[] {
	return spells.array.filter(spell => {
		return school.studies.includes(spell.study);
	});
}
