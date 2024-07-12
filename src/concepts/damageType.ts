import damageTypesJson from "../resources/combat/damage_types.json";
import Source from "../utils/source";
import {WeaponKeyword} from "./weapon";

export interface DamageType extends WeaponKeyword {
	color: string;
	effect: string;
	sources: string;
}

export const damageTypes = new Source<DamageType>(
	"Damage Types",
	damageTypesJson.map(json => ({...json, description: `Indicates that the weapon deals ${json.name} damage.`})),
	type => type.name
);
