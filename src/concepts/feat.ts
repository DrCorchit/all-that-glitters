import proficiencyJson from "../resources/sheet/proficiency.json";
import {replacers} from "../utils/replacer";
import Source from "../utils/source";
import {StatBlock} from "./attribute";

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

export const classFeat = {
	name: "Class",
	description: "These feats are restricted to specific character classes.",
};

export const featTypes = new Source<FeatType>(
	"Feat Types",
	[common, arcane, mundane, classFeat],
	type => type.name,
	(item, text) => `<Tooltip> tip={"${text ?? item.name}"}>${item.description}</Tooltip>`
);

replacers.push(featTypes);

export interface FeatInfo {
	name: string;
	level: number;
	featType: FeatType;
	trainingReqs: {
		level: number;
		slots: number;
		feats: string[];
		stats: Partial<StatBlock>;
		clazz?: string;
	};
}

export interface FeatJson extends FeatInfo {
	description: string;
}

export interface FeatTSX extends FeatInfo {
	description: JSX.Element;
}

export function featLevelReqFormula(level: number) {
	return 2 * level - 1;
}

export const proficiencies = new Source<FeatJson>(
	"Proficiencies",
	proficiencyJson.map(json => ({
		name: json.name,
		level: json.level,
		featType: common,
		description: json.effect,
		trainingReqs: {
			level: featLevelReqFormula(json.level),
			slots: json.cost.slots,
			feats: [],
			stats: {},
		},
	})),
	feat => feat.name,
	(feat, text) => `<Tooltip tip={"${text ?? feat.name}"}>${feat.description}</Tooltip>`
);

replacers.push(proficiencies);
