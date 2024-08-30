import armorJson from "../resources/items/armor.json";
import Source from "../utils/source";
import {Item} from "./item";

export interface Armor extends Item {
	bc: number;
	reqs: string[];
	effects: string[];
}

export const armor = new Source<Armor>(
	"Armor",
	armorJson,
	armor => armor.name,
	armor => armor.name,
	(armor, text) => `<Tooltip tip={"${text ?? armor.name}"}>${armor.description}</Tooltip>`
);
