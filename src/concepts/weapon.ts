import weaponKeywordsJson from "../resources/combat/weapon_keywords.json";
import weaponsJson from "../resources/combat/weapons.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";
import {normalize} from "../utils/utils";
import {Damage} from "./damage";
import {Item} from "./item";

export interface WeaponKeyword extends Keyword {}

export const weaponKeywords = new Source<WeaponKeyword>(
	"Weapon Keywords",
	weaponKeywordsJson,
	keyword => keyword.name,
	(keyword, text) => `<Tooltip tip={"${text ?? keyword.name}"}>${keyword.description}</Tooltip>`
);

interface WeaponJson {
	name: string;
	description: string;
	damage: string;
	cost: number;
	modifiers: string[];
	requirements?: string[];
}

export class Weapon implements Item {
	name: string;
	description: string;
	damage: Damage;
	cost: number;
	weight: number;
	modifiers: string[];
	requirements: string[];

	constructor(json: WeaponJson) {
		this.name = json.name;
		this.description = json.description;
		this.damage = new Damage(json.damage, json.modifiers);
		this.cost = json.cost;
		this.weight = 1;
		this.modifiers = json.modifiers;
		this.requirements = json.requirements ?? [];
	}
}

export class WeaponType {
	name: string;
	description: string;
	weaponsArray: Weapon[];
	weaponsMap: Map<string, Weapon>;

	constructor(json: {name: string; description: string; weapons: WeaponJson[]}) {
		this.name = json.name;
		this.description = json.description;
		this.weaponsArray = json.weapons.map(weapon => new Weapon(weapon));
		this.weaponsMap = new Map(this.weaponsArray.map(weapon => [normalize(weapon.name), weapon]));
	}
}

export const weaponTypes = new Source<WeaponType>(
	"Weapon Types",
	weaponsJson.map(json => new WeaponType(json)),
	type => type.name,
	(type, text) => `<Tooltip tip={"${text ?? type.name}"}>${type.description}</Tooltip>`
);

export const weapons = new Source<Weapon>(
	"Weapons",
	weaponTypes.array.flatMap(type => type.weaponsArray),
	weapon => weapon.name,
	(weapon, text) => `<Tooltip tip={"${text ?? weapon.name}"}>${weapon.description}</Tooltip>`
);
