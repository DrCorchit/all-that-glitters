import {range} from "../utils/utils";

export enum Die {
	d4 = 4,
	d6 = 6,
	d8 = 8,
	d10 = 10,
	d12 = 12,
	d20 = 20,
	d100 = 100,
}

export function parseDie(str: string): Die {
	const num = Number(str);
	return num as Die;
}

export function roll(die: Die): number {
	return 1 + Math.floor(Math.random() * die.valueOf());
}

export default class Dice {
	num: number;
	die: Die;

	constructor(num: number, die: Die) {
		this.num = num;
		this.die = die;
	}

	roll(): number {
		let total = 0;
		range(1, this.num).forEach(() => (total += roll(this.die)));
		return total;
	}

	toString() {
		return this.num === 0 ? "0" : `${this.num}d${this.die}`;
	}
}
