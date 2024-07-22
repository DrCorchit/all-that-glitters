import {templatize} from "../scripts/prebuild";

export class Builder {
	imports: string[] = [];
	properties = new Map<string, string>();
	constructor() {}

	withImport(it: string): Builder {
		this.imports.push(it);
		return this;
	}

	withString(key: string, value?: string): Builder {
		if (value !== undefined) {
			return this.withValue(key, `"${value}"`);
		}
		return this;
	}

	withTemplatizedString(key: string, value?: string): Builder {
		if (value !== undefined) {
			const templatizedValue = templatize(value);
			//console.log(`${value} --> ${templatizedValue}`);
			return this.withValue(key, `<>${templatizedValue}</>`);
		}
		return this;
	}

	withStringArray(key: string, value?: string[]): Builder {
		const valueStr = value?.map(val => `"${val}"`)?.join(", ");
		return this.withValue(key, `[${valueStr}]`);
	}

	withValue(key: string, value?: string): Builder {
		if (value !== undefined) {
			this.properties.set(key, value);
		}
		return this;
	}

	build(): string {
		const propsArray = Array.from(this.properties).map(entry => `  ${entry[0]}: ${entry[1]},`);
		const propsStr = propsArray.join("\n");
		return `//Auto-generated file (do not modify)
${this.imports.join("\n")}
export default {
${propsStr}
}`;
	}
}
