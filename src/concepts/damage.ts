import {Attribute, DEX, SPD, STR} from "./attribute";
import {DamageType, damageTypes} from "./damageType";
import Dice, {Die, parseDie} from "./dice";
import {weaponKeywords} from "./weapon";

//const damageRegex = /\s*((?<base>\d+)\s*\+\s*)?(?<num>\d+)d(?<die>\d+)\s+(?<attrs>\w+(\/\w+)?)\s+(?<types>\w+(,\w+))\s*/;
const damageRegex = /((?<base>\d+)\+)?(?<num>\d+)d(?<die>\d+)/;

export class Damage {
	base: number;
	dice: Dice;
	attrs: Set<Attribute>;
	types: Set<DamageType>;

	constructor(str: string, keywords: string[]) {
		this.attrs = new Set();
		this.types = new Set();

		if (str === "0") {
			this.base = 0;
			this.dice = new Dice(0, Die.d6);
		} else {
			const match = damageRegex.exec(str);
			if (!match || !match.groups) {
				throw new Error("Could not parse damage string: " + str);
			}

			const baseStr = match.groups["base"];
			const numStr = match.groups["num"];
			const dieStr = match.groups["die"];

			const base = baseStr ? Number(baseStr) : 0;
			const num = Number(numStr);
			const die = parseDie(dieStr);

			this.base = base;
			this.dice = new Dice(num, die);

			this.attrs.add(STR);

			//Kinda jank but oof
			keywords.forEach(keyword => {
				const dmg = damageTypes.lookupUnchecked(keyword);
				const key = weaponKeywords.lookupUnchecked(keyword);
				if (dmg) this.types.add(dmg);
				else if (key) {
					switch (key.name) {
						case "Cut-and-Thrust":
							this.types.add(damageTypes.lookup("slashing"));
							this.types.add(damageTypes.lookup("piercing"));
							break;
						case "Firearm":
							this.types.add(damageTypes.lookup("Force"));
							this.attrs.delete(STR);
							break;
						case "Nimble":
							this.attrs.add(DEX);
							break;
						case "Polearm":
							this.attrs.add(SPD);
							break;
						case "Crossbow":
							this.attrs.delete(STR);
							break;
					}
				}
			});
		}
	}

	toString(): string {
		if (this.base === 0 && this.dice.num === 0) {
			return "0";
		}

		var output = "";
		if (this.base > 0) {
			output += this.base.toString();
		}
		if (this.dice.num > 0) {
			if (output) output += " + ";
			output += this.dice.toString();
		}
		if (this.attrs.size > 0) {
			const attrsStr = Array.from(this.attrs)
				.map(attr => attr.abbr)
				.join("/");
			output += ` + ${attrsStr}`;
		}
		const typesStr = Array.from(this.types)
			.map(type => type.name)
			.join("/");
		output += ` ${typesStr}`;

		return output;
	}
}
