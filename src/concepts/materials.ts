import materialsJson from "../resources/items/materials.json";
import Source from "../utils/source";
import {Item} from "./items";

export interface Material extends Item {
	bc: number;
	effects: string[];
}

export const materials = new Source<Material>(
	"materials",
	materialsJson.map(json => ({...json, effects: json.effects ?? []})),
	material => material.name
);
