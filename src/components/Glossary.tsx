import {Keyword, GM, NPC, PC, DT, CT, HP, WP, BC, DC, MIT} from "../utils/keyword";
import {attributes} from "../concepts/attribute";
import {ReactElement} from "react";

const glossary: Map<string, Keyword[]> = new Map([
	["General", [GM, NPC, PC, DT, CT]],
	["Combat", [HP, WP, BC, DC, MIT]],
	["Attributes", attributes.array],
]);

export function GlossaryElement({term}: {term: Keyword}): ReactElement {
	return term.abbr ? (
		<li>
			<b>{term.abbr}</b>: {term.name} ({term.description})
		</li>
	) : (
		<li>
			<b>{term.name}</b>: {term.description}
		</li>
	);
}

export function Glossary(): ReactElement {
	return (
		<>
			{Array.from(glossary.entries()).map((entry, index) => {
				return (
					<div key={index}>
						<p>{entry[0]}</p>
						<ul>
							{entry[1].map((term, index2) => {
								return <GlossaryElement term={term} key={index2} />;
							})}
						</ul>
					</div>
				);
			})}
		</>
	);
}
