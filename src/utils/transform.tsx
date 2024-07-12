import React, {ReactNode} from "react";

const matchRegex = /\{\{(.*?)}}/;
const contentRegex = /(?<parts>\w+(\.\w+)*)(#(?<name>.*))?/;

function replace(input: string): ReactNode {
	const result = matchRegex.exec(input);

	//This means the input didn't have any {{ }}
	if (result == null || !result.indices) return input;

	const output = Array<ReactNode>();
	var last = 0;
	result.indices?.forEach(value => {
		const [start, end] = value;
		if (start > last) {
			output.push(input.substring(last, start));
		}

		output.push(parse(input.substring(start, end)));
	});

	return <>{...output}</>;
}

function parse(input: string): ReactNode {
	const result = contentRegex.exec(input);

	if (!result || !result.groups) {
		throw new Error("Could not parse: " + input);
	}

	const parts = result.groups["parts"];
	const name = result.groups["name"];

	//TODO
	return <>{`${parts} (${name})`}</>;
}

type Replacer = (index: number, args: string[], name?: string) => Replacer | ReactNode;

//const root: Replacer = (index: number, args: string[], name?: string) => {}
