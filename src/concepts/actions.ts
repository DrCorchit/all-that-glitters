import actionsJson from "../resources/combat/actions.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";

export interface Action extends Keyword {
	cost: string;
}

export const actions = new Source<Action>(
	"Actions",
	actionsJson,
	action => action.name,
	action => action.name,
	(action, text) => `<Tooltip tip="${text ?? action.name}">${action.description}</Tooltip>`
);
