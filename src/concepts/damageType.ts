import damageTypesJson from "../resources/combat/damage_types.json";
import Source from "../utils/source";
import {WeaponKeyword} from "./weapon";

export interface DamageType extends WeaponKeyword {
	color: string;
	effect: string;
	sources: string;
}

export const damageTypes = new Source<DamageType>(
	"Damage",
	damageTypesJson.map(json => ({...json, description: `Indicates that the weapon deals ${json.name} damage.`})),
	type => type.name,
	(damage, text) => `<span style={{color: "${damage.color}"}}>${text ?? damage.name}</span>`
);
