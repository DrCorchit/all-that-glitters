import armorJson from "../resources/items/armor.json";
import Source from "../utils/source";
import {Item} from "./items";

export interface Armor extends Item {
	bc: number;
	reqs: string[];
	effects: string[];
}

export const armor = new Source<Armor>("armor", armorJson, (armor: Armor) => armor.name);
