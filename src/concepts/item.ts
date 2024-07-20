import clothingJson from "../resources/items/clothing.json";
import consumablesjson from "../resources/items/consumables.json";
import containersJson from "../resources/items/containers.json";
import miscJson from "../resources/items/miscellaneous.json";
import toolsJson from "../resources/items/tools.json";

import {Keyword} from "../utils/keyword";
import Source from "../utils/source";
import {armor} from "./armor";
import {weaponTypes} from "./weapon";
import {materials} from "./material";
import {normalize} from "../utils/utils";

export interface ItemCategory {
	name: string;
	items: Item[];
}

export const itemCategories = new Source<ItemCategory>(
	"Item Categories",
	[
		{name: "Tools", items: toolsJson},
		{name: "Clothing", items: clothingJson},
		{name: "Consumables", items: consumablesjson},
		{name: "Armor", items: armor.array},
		{name: "Weapons", items: weaponTypes.lookup("small weapons").weaponsArray},
		{name: "Materials", items: materials.array},
		//{name:"Animals", items: animalsJson}
		{name: "Containers", items: containersJson},
		{name: "Miscellaneous", items: miscJson},
	],
	cat => cat.name,
	(items, text) => `<Tooltip tip={${text ?? items.name}}>A category of items</Tooltip>`
);

export interface Item extends Keyword {
	key?: string;
	cost: number;
	weight: number;
}

export const items = new Source<Item>(
	"Items",
	itemCategories.array.flatMap(items => items.items),
	item => normalize(item.key ?? item.name),
	(item, text) => `<Tooltip tip={${text ?? item.name}}>${item.description}</Tooltip>`
);
