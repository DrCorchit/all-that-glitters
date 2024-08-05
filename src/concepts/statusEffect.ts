import statusJson from "../resources/combat/status_effects.json";
import {replacers} from "../utils/replacer";
import Source from "../utils/source";
import {templatize} from "../utils/templatizer";

export interface StatusEffect {
	name: string;
	effect: string;
	causes: string;
	recovery: string;
	notes: string;
}

export const statuses = new Source<StatusEffect>(
	"Status",
	statusJson,
	status => status.name,
	(status, text) => `<Tooltip tip={"${text ?? status.name}"}>${templatize(status.effect)}</Tooltip>`
);

replacers.push(statuses);
