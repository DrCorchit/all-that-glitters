import rarityJson from "../resources/magic/rarity.json";
import spellTypeJson from "../resources/magic/spellTypes.json";
import schoolsJson from "../resources/magic/schools.json";
import spellsJson from "../generated/spells.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";
import {normalize, toOrdinal} from "../utils/utils";
import {Attribute, attributes, StatBlock} from "./attribute";
import {Skill, skills} from "./skill";

export interface SpellJson {
	name: string;
	description: string;
	level: number;
	duration: string;
	rarity: string;
	type: string;
	study: string;
	trainingReqs: {
		level: number;
		slots: number;
		gold?: number;
		stats: Partial<StatBlock>;
	};
	castingReqs: {
		time: string;
		evocation: number;
		concentration?: number;
	};
}

export interface SpellRarity extends Keyword {
	slots: number;
	gold: number;
}

export const spellRarities = new Source<SpellRarity>(
	"Rarities",
	rarityJson,
	rarity => rarity.name,
	rarity => rarity.name,
	(feat, text) => `<Tooltip tip={"${text ?? feat.name}"}>${feat.description}</Tooltip>`
);

export interface SpellType extends Keyword {}

export const spellTypes = new Source<SpellType>(
	"Spell Types",
	spellTypeJson,
	type => type.name,
	type => type.name,
	(type, text) => `<Tooltip tip={"${text ?? type.name}>${type.description}</Tooltip>}`
);

export interface TrainingReqs {
	level: number;
	gold: number;
	slots: number;
	spells: Spell[];
	stats: Partial<StatBlock>;
}

export interface CastingReqs {
	time: string;
	evocation: number;
	concentration: number;
}

export interface SpellSchool extends Keyword {
	attr: Attribute;
	skill: Skill;
	studies: SpellStudy[];
}

export class SpellStudy implements Keyword {
	name: string;
	description: string;
	schoolName: string;
	adjective: string;

	constructor(name: string, description: string, schoolName: string, adjective: string) {
		this.name = name;
		this.description = description;
		(this.schoolName = schoolName), (this.adjective = adjective);
	}

	school(): SpellSchool {
		return spellSchools.lookup(this.schoolName);
	}
}

export const spellSchools = new Source<SpellSchool>(
	"Schools",
	schoolsJson.map(json => ({
		name: json.name,
		description: json.description,
		attr: attributes.lookup(json.attr),
		skill: skills.lookup(json.skill),
		studies: json.studies.map(study => new SpellStudy(study.name, study.description, json.name, study.adjective)),
	})),
	school => school.name,
	school => school.name,
	(school, text) => `<Tooltip tip={"${text ?? school.name}"}>${school.description}</Tooltip>`
);

export const spellStudies = new Source<SpellStudy>(
	"Studies",
	spellSchools.array.flatMap(school => school.studies),
	study => study.name,
	study => study.name,
	(study, text) => `<Tooltip tip={"${text ?? study.name}"}>${study.description}</Tooltip>`
);

export class Spell {
	name: string;
	description: string;
	level: number;
	duration: string;
	rarity: SpellRarity;
	type: SpellType;
	study: SpellStudy;
	trainingReqs: TrainingReqs;
	castingReqs: CastingReqs;
	//Derived Properties
	id: string;
	blurb: string;

	constructor(json: SpellJson) {
		this.name = json.name;
		this.description = json.description;
		this.level = json.level;
		this.duration = json.duration;
		this.rarity = spellRarities.lookup(json.rarity);
		this.type = spellTypes.lookup(json.type);
		this.study = spellStudies.lookup(json.study);

		this.trainingReqs = {
			level: json.trainingReqs.level,
			slots: json.trainingReqs.slots,
			gold: json.trainingReqs.gold ?? 0,
			spells: [],
			stats: json.trainingReqs.stats,
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

function getBase(spell: Spell): string {
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
	return spell.type.name === "Evocation" || spell.type.name === "Concentration" ? "spell" : "";
}

export const spells = new Source<Spell>(
	"Spells",
	spellsJson.map(json => new Spell(json)),
	spell => spell.name,
	spell => spell.name,
	(spell, text) => `<AppendixLink appendix={1} target="${spell.id}">${text ?? spell.name}</AppendixLink>`
);

export function lookupSpellsByStudy(study: SpellStudy): Spell[] {
	return spells.array.filter(spell => {
		return spell.study === study;
	});
}

export function lookupSpellsBySchool(school: SpellSchool): Spell[] {
	return spells.array.filter(spell => {
		return school.studies.includes(spell.study);
	});
}
