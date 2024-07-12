import statusJson from "../resources/combat/status_effects.json";
import Source from "../utils/source";

export interface StatusEffect {
	name: string;
	effect: string;
	causes: string;
	recovery: string;
	notes: string;
}

export const statuses = new Source<StatusEffect>("Statuses", statusJson, status => status.name);
