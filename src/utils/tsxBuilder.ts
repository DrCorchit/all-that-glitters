import {templatize} from "./templatizer";

export class FileBuilder {
	imports: string[] = [];
	members: string[] = [];

	withImport(it: string): FileBuilder {
		this.imports.push(it);
		return this;
	}

	withMember(it: string): FileBuilder {
		this.members.push(it);
		return this;
	}

	build(): string {
		return `//Auto-generated file (do not modify)\n${this.imports.join("\n")}\n\n${this.members.join("\n\n")}`;
	}
}

export class ArrayBuilder {
	members: string[] = [];
	constructor() {}

	withString(value?: string): ArrayBuilder {
		if (value !== undefined) {
			return this.withValue(`"${value}"`);
		}
		return this;
	}

	withValue(value?: string | number): ArrayBuilder {
		if (value !== undefined) {
			this.members.push(value.toString());
		}
		return this;
	}

	build(): string {
		return `[${this.members.join(", ")}]`;
	}
}

export class ObjectBuilder {
	properties = new Map<string, string>();
	constructor() {}

	withString(key: string, value?: string): ObjectBuilder {
		if (value !== undefined) {
			return this.withValue(key, `"${value}"`);
		}
		return this;
	}

	withTSX(key: string, value?: string): ObjectBuilder {
		if (value !== undefined) {
			return this.withValue(key, `<div className='default'>${value}</div>`);
		}
		return this;
	}

	withStringArray(key: string, value?: string[]): ObjectBuilder {
		const valueStr = value?.map(val => `"${val}"`)?.join(", ");
		return this.withValue(key, `[${valueStr}]`);
	}

	withValue(key: string, value?: string | number): ObjectBuilder {
		if (value !== undefined) {
			this.properties.set(key, value.toString());
		}
		return this;
	}

	build(): string {
		const propsArray = Array.from(this.properties).map(entry => `  ${entry[0]}: ${entry[1]},`);
		const props = templatize(propsArray.join("\n"));
		return `{\n${props}\n}`;
	}
}
