import classesJson from "../resources/sheet/classes.json";
import Source from "../utils/source";
import {Keyword} from "../utils/keyword";

export interface CombatClass extends Keyword {
	altName?: string;
	backstoryPrompts: string[];
	alignment?: string;
	coreAbilityName: string;
	coreAbilityDescription: string;
	limitations: string;
	levelingBonuses: Map<number, string>;
	startingEquipment: Map<string, Array<string>>;
}

function handleLevelingBonuses(json: Record<string, string>): Map<number, string> {
	const array = Object.entries(json);
	return new Map(array.map(entry => [Number(entry[0]), entry[1]]));
}

function handleStartingEquipment(json: Record<string, Array<string>>): Map<string, Array<string>> {
	const array = Object.entries(json);
	return new Map(array.map(entry => [entry[0], entry[1]]));
}

export const classes = new Source<CombatClass>(
	"Classes",
	[],
	clazz => clazz.name,
	clazz => clazz.name
);

/*
export const classes = new Source<CombatClass>(
	"Classes",
	classesJson.map(json => ({
		name: json.name,
		altName: json.altName,
		description: json.description,
		prompts: json.prompts,
		alignment: alignments.lookup(json.alignment),
	})),
	clazz => clazz.name,
	(clazz, text) => `<InternalLink chapter={2} tip={${text ?? clazz.name}}>${clazz.description}</Tooltip>`
);
*/
