import statusJson from "../resources/combat/status_effects.json";
import Source from "../utils/source";

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
	(status, text) => `<Tooltip tip={"${text ?? status.name}"}>${status.effect}</Tooltip>`
);
