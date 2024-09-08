import proficiencyJson from "../resources/sheet/proficiency.json";
import featJson from "../generated/feats.json";
import Source from "../utils/source";
import {StatBlock} from "./attribute";
import {normalize} from "../utils/utils";

export interface FeatType {
	name: string;
	description: string;
}

export const common: FeatType = {
	name: "Common",
	description: "These feats are available to all characters, with no general restrictions.",
};

export const arcane: FeatType = {
	name: "Arcane",
	description:
		"These feats affect the use of magical spells. Learning any of these prevents one from taking mundane feats.",
};

export const mundane: FeatType = {
	name: "Mundane",
	description:
		"These feats are only available to mundane characters with no magical abilities. Learning any spells or arcane feats prevents one from learning these feats.",
};

export const maneuver: FeatType = {
	name: "Maneuver",
	description: "These feats are active combat abilities available to any character with proper training.",
};

export const classFeat = {
	name: "Class",
	description: "These feats are restricted to specific character classes.",
};

export const featTypes = new Source<FeatType>(
	"Feat Types",
	[common, arcane, mundane, maneuver, classFeat],
	type => type.name,
	type => type.name,
	(type, text) => `<Tooltip> tip={"${text ?? type.name}"}>${type.description}</Tooltip>`
);

export const proficiencies = new Source<Feat>(
	"Proficiencies",
	proficiencyJson.map(json => ({
		name: json.name,
		level: json.level,
		featType: common,
		description: json.effect,
		trainingReqs: {
			level: featLevelReqFormula(json.level),
			slots: json.cost.slots,
			other: [],
			stats: {},
		},
	})),
	feat => feat.name,
	feat => feat.name,
	(feat, text) => `<Tooltip tip={"${text ?? feat.name}"}>${feat.description}</Tooltip>`
);

export interface Feat {
	name: string;
	description: string;
	level: number;
	featType: FeatType;
	trainingReqs: {
		level: number;
		slots: number;
		other: string[];
		stats: Partial<StatBlock>;
		clazz?: string;
	};
}

export const feats = new Source<Feat>(
	"Feats",
	featJson.map(json => ({
		...json,
		featType: featTypes.lookup(json.featType),
	})),
	feat => feat.name,
	feat => feat.name,
	(feat, text) => `<AppendixLink appendix={2} target="${normalize(feat.name)}">${text ?? feat.name}</AppendixLink>`
);

export function featLevelReqFormula(level: number) {
	return 2 * level - 1;
}

export const maxFeatSlots = 15;
