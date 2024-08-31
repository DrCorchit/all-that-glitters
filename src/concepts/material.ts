import materialsJson from "../resources/items/materials.json";
import Source from "../utils/source";
import {Item} from "./item";

export interface Material extends Item {
	bc: number;
	effects: string[];
}

export const materials = new Source<Material>(
	"Materials",
	materialsJson.map(json => ({...json, effects: json.effects ?? []})),
	material => material.name,
	material => material.name,
	(material, text) => `<Tooltip tip={"${text ?? material.name}"}>${material.description}</Tooltip>`
);
