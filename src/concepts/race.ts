import racesJson from "../resources/sheet/races.json";
import Source from "../utils/source";

export interface Race {
	name: string;
	description: string[];
	bonuses: string;
}

export const races = new Source<Race>(
	"Races",
	racesJson,
	race => race.name,
	(race, text) => `<Tooltip tip={${text ?? race.name}}>${race.description}</Tooltip>`
);
