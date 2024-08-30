import {Replacer, root} from "./replacer";
import {normalize} from "./utils";

const regex = /\{\{(?<path>\w+(\.\w+)*)(#(?<text>.*))?}}/g;

export function templatizeToTsx(input: string): string {
	return templatizeHelper(input, true);
}

export function templatizeToString(input: string) {
	return templatizeHelper(input, false);
}

function templatizeHelper(input: string, tsx: boolean) {
	const matches = Array.from(input.matchAll(regex));

	//This means the input didn't have any {{ }}
	if (matches.length == 0) {
		//console.log(`Nothing to replace in input: [${input}]`);
		return input;
	}

	const output = Array<string>();
	let last = 0;
	matches.forEach(match => {
		if (!match.groups) {
			throw new Error("Oof");
		}

		const path = match.groups["path"].split(".");
		const text = match.groups["text"];
		const start = match.index;

		const end = match.index + match[0].length;

		if (start > last) {
			output.push(input.substring(last, start));
		}

		let replacement = replace(tsx, root, 0, path, text);
		if (tsx) {
			//It has to go back through one time.
			replacement = templatizeToString(replacement);
		}
		output.push(replacement);
		last = end;
	});
	output.push(input.substring(last, input.length));

	return output.join("");
}

function replace(tsx: boolean, replacer: Replacer, index: number, path: string[], text?: string): string {
	const key = normalize(path[index]);
	if (index == path.length - 1) {
		//console.log(path);
		return replacer.values(key, text, tsx);
	} else {
		const next = replacer.delegates.find(item => normalize(item.name) === key);
		if (!next) {
			const message = `No field '${key}' in ${replacer.name} (evaluating ${path.join(".")})`;
			console.log(message);
			//throw new Error(message);
			return path.join(".");
		}
		return replace(tsx, next, index + 1, path, text);
	}
}
