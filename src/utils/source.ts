import {Replacer, replacers} from "./replacer";
import {normalize} from "./utils";

export const sources: Source<any>[] = [];

export default class Source<T> implements Replacer {
	name: string;
	array: T[];
	map: Map<string, T>;
	values: (value: string, name?: string, tsx?: boolean) => string;
	delegates: Replacer[];

	constructor(
		name: string,
		array: T[],
		namingFunction: (item: T) => string,
		renderToString: (item: T) => string,
		renderToTSX: (item: T, text?: string) => string
	) {
		try {
			this.name = name;
			this.array = array;
			this.map = new Map(array.map(item => [normalize(namingFunction(item)), item]));
			this.values = (value, text, tsx) => {
				const item = this.lookup(value);
				if (tsx) return renderToTSX(item, text);
				else return text ?? renderToString(item);
			};

			this.delegates = [];
			sources.push(this);
			console.log(`Loaded ${name} (${array.length} entries)`);
		} catch (e) {
			console.error(`Could not load ${name}`);
			throw e;
		}
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
