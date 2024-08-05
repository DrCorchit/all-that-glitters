import {Replacer, root} from "./replacer";
import {normalize} from "./utils";

const matchRegex = /\{\{(.*?)}}/g;
const contentRegex = /(?<path>\w+(\.\w+)*)(#(?<text>.*))?/;

export function templatize(input: string, replacer: Replacer = root): string {
	//const result = matchRegex.exec(input);
	const matches = Array.from(input.matchAll(matchRegex));

	//This means the input didn't have any {{ }}
	if (matches.length == 0) {
		//console.log(`Nothing to replace in input: [${input}]`);
		return input;
	}

	const output = Array<string>();
	let last = 0;
	matches.forEach(match => {
		const start = match.index;
		const end = match.index + match[0].length;
		if (start > last) {
			output.push(input.substring(last, start));
		}

		output.push(replace(input.substring(start, end), replacer));
		last = end;
	});
	output.push(input.substring(last, input.length));

	return output.join("");
}

function replace(input: string, replacer: Replacer): string {
	const result = contentRegex.exec(input);

	if (!result || !result.groups) {
		throw new Error("Could not parse: " + input);
	}

	const path = result.groups["path"].split(".");
	const text = result.groups["name"];

	const output = replaceHelper(replacer, 0, path, text);
	//console.log(`Replaced ${input} with ${output}`);
	return output;
}

function replaceHelper(replacer: Replacer, index: number, path: string[], text?: string): string {
	const key = normalize(path[index]);
	if (index == path.length - 1) {
		return replacer.values(key, text);
	} else {
		const next = replacer.delegates.find(item => normalize(item.name) === key);
		if (!next) {
			const message = `No field '${key}' in ${replacer.name} (evaluating ${path.join(".")})`;
			console.log(message);
			//throw new Error(message);
			return path.join(".");
		}
		return replaceHelper(next, index + 1, path, text);
	}
}
