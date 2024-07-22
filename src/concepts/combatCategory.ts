import categoriesJson from "../resources/sheet/combat_categories.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";

export interface CombatCategory extends Keyword {
	classes: string[];
	bonuses: string[];
}

export const combatCategories = new Source<CombatCategory>(
	"Categories",
	categoriesJson,
	category => category.name,
	(category, text) => `<Tooltip tip={"${text ?? category.name}"}>A category of character classes. ${category.description}</Tooltip>`
);
