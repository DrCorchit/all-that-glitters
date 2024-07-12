import {normalize} from "./utils";

export default class Source<T> {
	name: string;
	array: T[];
	map: Map<string, T>;

	constructor(name: string, array: T[], namingFunction: (item: T) => string) {
		this.name = name;
		this.array = array;
		this.map = new Map(array.map(item => [normalize(namingFunction(item)), item]));
	}

	lookup(name: string): T {
		if (!this) {
			throw new Error(`Something is very wrong (looking up ${name})`);
		}
		if (!this.map) {
			throw new Error(`Map missing in source ${this.name}`);
		}

		const temp = this.map.get(normalize(name));
		if (temp === undefined) {
			throw new Error(`No key ${name} in ${this.name}`);
		}
		return temp;
	}

	lookupUnchecked(name: string): T | undefined {
		return this.map.get(normalize(name));
	}
}
