import {templatizeToTsx} from "./templatizer";
import {FileBuilder} from "./tsxBuilder";
import {normalize} from "./utils";

export class TSXDirectory<T> {
	elements: Map<string, JSX.Element> = new Map();

	constructor() {}

	register(key: string, value: JSX.Element) {
		key = normalize(key);
		this.elements.set(key, value);
	}

	lookup(key: string): JSX.Element {
		key = normalize(key);
		const temp = this.elements.get(key);
		if (temp === undefined) {
			throw new Error(`No TSX stored at ${key}`);
		}
		return temp;
	}
}

export function createDirectory<T>(
	file: FileBuilder,
	elements: T[],
	getName: (ele: T) => string,
	getField: (ele: T) => string
): FileBuilder {
	file.withImport(`import {TSXDirectory} from \"../utils/tsxDirectory\"`);

	elements.forEach(ele => {
		const name = normalize(getName(ele));
		const field = templatizeToTsx(getField(ele));
		file.withMember(`export const ${name} = <>${field}</>`);
	});

	file.withMember("const directory = new TSXDirectory<string>();");
	elements.forEach(ele => {
		const name = normalize(getName(ele));
		file.withMember(`directory.register("${name}", ${name})`);
	});
	file.withMember("export default directory;");

	return file;
}
