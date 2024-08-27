export interface Replacer {
	name: string;
	values: (value: string, name?: string) => string;
	delegates: Replacer[];
}

export const replacers: Replacer[] = [];

export const root: Replacer = {
	name: "root",
	values: arg => {
		throw new Error(`No value '${arg}' in root replacer`);
	},
	delegates: replacers,
};
