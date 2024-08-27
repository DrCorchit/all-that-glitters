import rarityJson from "../resources/magic/rarity.json";
import schoolsJson from "../resources/magic/schools.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";
import {normalize, toOrdinal} from "../utils/utils";
import {Attribute, attributes, StatBlock} from "./attribute";
import {Skill, skills} from "./skill";

interface SpellInfo {
	name: string;
	level: number;
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

export interface SpellJson extends SpellInfo {
	description: string;
}

export interface SpellTSX extends SpellInfo {
	description: JSX.Element;
}

export interface Rarity extends Keyword {
	slots: number;
	gold: number;
}

export const rarities = new Source<Rarity>(
	"Rarities",
	rarityJson,
	rarity => rarity.name,
	(feat, text) => `<Tooltip tip={"${text ?? feat.name}"}>${feat.description}</Tooltip>`
);

export type Type = "Evocation" | "Concentration" | "Ritual" | "Ceremony";

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

export class Study implements Keyword {
	name: string;
	description: string;
	schoolName: string;
	adjective: string;

	constructor(name: string, description: string, schoolName: string, adjective: string) {
		this.name = name;
		this.description = description;
		(this.schoolName = schoolName), (this.adjective = adjective);
	}

	school(): School {
		return schools.lookup(this.schoolName);
	}
}

export interface School extends Keyword {
	attr: Attribute;
	skill: Skill;
	studies: Study[];
}

export const schools = new Source<School>(
	"Schools",
	schoolsJson.map(json => ({
		name: json.name,
		description: json.description,
		attr: attributes.lookup(json.attr),
		skill: skills.lookup(json.skill),
		studies: json.studies.map(study => new Study(study.name, study.description, json.name, study.adjective)),
	})),
	school => school.name,
	(school, text) => `<Tooltip tip={"${text ?? school.name}"}>${school.description}</Tooltip>`
);

export const studies = new Source<Study>(
	"Studies",
	schools.array.flatMap(school => school.studies),
	study => study.name,
	(study, text) => `<Tooltip tip={"${text ?? study.name}"}>${study.description}</Tooltip>`
);

export class Spell {
	name: string;
	description: JSX.Element;
	level: number;
	rarity: Rarity;
	type: Type;
	study: Study;
	trainingReqs: TrainingReqs;
	castingReqs: CastingReqs;
	//Derived Properties
	id: string;
	blurb: string;

	constructor(json: SpellTSX) {
		this.name = json.name;
		this.description = json.description;
		this.level = json.level;
		this.rarity = rarities.lookup(json.rarity);
		this.type = json.type as Type;
		this.study = studies.lookup(json.study);

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
	return spell.type === "Evocation" || spell.type === "Concentration" ? "spell" : "";
}
