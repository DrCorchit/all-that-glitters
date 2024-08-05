import athleticsJson from "../resources/feats/athletics.json";
import combatJson from "../resources/feats/combat.json";
import proficiencyJson from "../resources/feats/proficiency.json";
import {Keyword} from "../utils/keyword";
import {replacers} from "../utils/replacer";
import Source from "../utils/source";

export interface Feat extends Keyword {
	slots: number;
	reqs: string[];
}

export const athleticsFeats = new Source<Feat>(
	"Athletic",
	athleticsJson.map(json => ({
		name: json.name,
		description: json.effect,
		slots: json.cost.slots,
		reqs: json.reqs,
	})),
	feat => feat.name,
	(feat, text) => `<Tooltip tip={"${text ?? feat.name}"}>${feat.description}</Tooltip>`
);

replacers.push(athleticsFeats);

export const combatFeats = new Source<Feat>(
	"Combat",
	combatJson.map(json => ({
		name: json.name,
		description: json.effect,
		slots: json.cost.slots,
		reqs: json.reqs ?? [],
	})),
	feat => feat.name,
	(feat, text) => `<Tooltip tip={"${text ?? feat.name}"}>${feat.description}</Tooltip>`
);

replacers.push(combatFeats);

export const proficiencyFeats = new Source<Feat>(
	"Proficiency",
	proficiencyJson.map(json => ({
		name: json.name,
		description: json.effect,
		slots: json.cost.slots,
		reqs: json.reqs,
	})),
	feat => feat.name,
	(feat, text) => `<Tooltip tip={"${text ?? feat.name}"}>${feat.description}</Tooltip>`
);

export const feats = [athleticsFeats, combatFeats, proficiencyFeats];
