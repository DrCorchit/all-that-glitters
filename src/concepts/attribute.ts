import attributesJson from "../resources/sheet/attrs.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";

export interface Attribute extends Keyword {
	abbr: string;
	effects: string[];
	interpretation?: string;
}

export const attributes = new Source<Attribute>(
	"Attr",
	attributesJson,
	attr => attr.abbr,
	attr => `<Sub attr="${attr.abbr}"/>`
);

export const STR: Attribute = attributes.array[0];
export const DEX: Attribute = attributes.array[1];
export const SPD: Attribute = attributes.array[2];
export const INT: Attribute = attributes.array[3];
export const NST: Attribute = attributes.array[4];
export const CHA: Attribute = attributes.array[5];
