import Source from "./source";

export interface Keyword {
	abbr?: string;
	name: string;
	description: string;
}

export const GM: Keyword = {
	name: "Storyteller",
	description: "The person who controls the characters, setting, and story.",
};

export const P: Keyword = {
	name: "Player",
	description: "A person participating in the game.",
};

export const NPC: Keyword = {
	abbr: "NPC",
	name: "Non-Player Character",
	description: "A character controlled by the storyteller.",
};

export const PC: Keyword = {
	abbr: "PC",
	name: "Player Character",
	description: "A character controlled by the player.",
};

export const HP: Keyword = {
	abbr: "HP",
	name: "Hitpoints",
	description: "Used to determine when characters fall unconscious from their wounds.",
};

export const MAX_HP: Keyword = {
	abbr: "Max HP",
	name: "Maximum Hitpoints",
	description: "The maximum number of hitpoints a character may possess, excluding temporary hitpoints.",
};

export const TEMP_HP: Keyword = {
	name: "Temporary Hitpoints",
	description:
		"Additional HP that allow a character to temporarily exceed their maximum HP. Temporary HP is lost before regular HP, and cannot be restored by healing.",
};

export const WP: Keyword = {
	abbr: "Will",
	name: "Willpower",
	description: "Expended when using powerful abilities.",
};

export const MAX_WP: Keyword = {
	name: "Maximum Willpower",
	description: "The maximum amount of willpower a character may possess",
};

export const BC: Keyword = {
	abbr: "BC",
	name: "Block Chance",
	description: "The chance that an attack is mitigated by armor or shields.",
};

export const DC: Keyword = {
	abbr: "DC",
	name: "Dodge Chance",
	description: "The chance that an attack misses a character entirely.",
};

export const MIT: Keyword = {
	abbr: "MIT",
	name: "Mitigation",
	description: "The chance to avoid damage from an attack. Obtained from the sum of BC and DC.",
};

export const DT: Keyword = {
	abbr: "DT",
	name: "Decision Threshold",
	description: "A threshold value for an event roll. Meeting this value usually corresponds to success.",
};

export const CT: Keyword = {
	abbr: "CT",
	name: "Critical Threshold",
	description: "The value on the d20 required for a critical success. Normally equal to 20.",
};

export const keywords = new Source<Keyword>(
	"Keywords",
	[GM, P, NPC, PC, HP, MAX_HP, TEMP_HP, WP, MAX_WP, MIT, BC, DC, DT, CT],
	keyword => keyword.abbr ?? keyword.name,
	keyword => keyword.name,
	keyword => keyword.name
);
