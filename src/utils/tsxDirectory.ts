import {templatizeToTsx} from "./templatizer";
import {FileBuilder, ObjectBuilder} from "./tsxBuilder";
import {normalize} from "./utils";

export class TSXDirectory<T> {
	elements: Map<string, T> = new Map();

	constructor() {}

	register(key: string, value: T) {
		key = normalize(key);
		this.elements.set(key, value);
	}

	lookup(key: string): T {
		key = normalize(key);
		const temp = this.elements.get(key);
		if (temp === undefined) {
			throw new Error(`No TSX stored at ${key}`);
		}
		return temp;
	}
}

export function createDirectory<T>(
	directoryName: string,
	elements: T[],
	getName: (ele: T) => string,
	getField: (ele: T) => string
): FileBuilder {
	const file = new FileBuilder();
	file.withImport(`import React from 'react'`);
	file.withImport(`import {TSXDirectory} from "../utils/tsxDirectory"`);

	elements.forEach(ele => {
		const name = normalize(getName(ele));
		const field = templatizeToTsx(getField(ele));
		file.withMember(`export const ${name} = <div className="default">${field}</div>`);
	});

	file.withMember(`export const ${directoryName} = new TSXDirectory<React.JSX.Element>();`);
	elements.forEach(ele => {
		const name = normalize(getName(ele));
		file.withMember(`${directoryName}.register("${name}", ${name})`);
	});
	return file;
}

export function createTypedDirectory<T>(
	directoryName: string,
	elements: T[],
	getName: (ele: T) => string,
	getField: (ele: T) => ObjectBuilder,
	type: string
): FileBuilder {
	const file = new FileBuilder();
	file.withImport(`import {TSXDirectory} from "../utils/tsxDirectory"`);

	elements.forEach(ele => {
		const name = normalize(getName(ele));
		const field = getField(ele);
		file.withMember(`export const ${name} = ${field.build()}`);
	});

	file.withMember(`export const ${directoryName} = new TSXDirectory<${type}>();`);
	elements.forEach(ele => {
		const name = normalize(getName(ele));
		file.withMember(`${directoryName}.register("${name}", ${name})`);
	});
	return file;
}
