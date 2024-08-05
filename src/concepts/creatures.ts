import creaturesJson from "../resources/bestiary/creatures.json";
import Source from "../utils/source";
import {StatBlock} from "./attribute";
import {genera, Genus} from "./bestiary";
import {replacers} from "../utils/replacer";

export interface Creature {
	name: string;
	description: string;
	genus: Genus;
	cost: number;
	upkeep: number;
	stats: StatBlock;
}

const temp: Creature[] = creaturesJson.map(json => ({
	name: json.name,
	description: json.description,
	genus: genera.lookup(json.genus),
	cost: json.cost ?? 0,
	upkeep: json.upkeep ?? 0,
	stats: json.stats,
}));

export const creatures = new Source<Creature>(
	"Creatures",
	temp,
	creature => creature.name,
	//creature => `<AppendixLink appendix={6} target="${normalize(creature.name)}" />`
	(creature, text) => `<Tooltip tip='${text || creature.name}'>${creature.description}</Tooltip>`
);

replacers.push(creatures);
