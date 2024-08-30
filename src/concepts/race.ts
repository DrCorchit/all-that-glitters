import racesJson from "../resources/sheet/races.json";
import Source from "../utils/source";

export interface Race {
	name: string;
	description: string;
	bonuses: string;
}

const processedRaces: Race[] = racesJson.map(json => ({
	name: json.name,
	description: json.description.join("\n"),
	bonuses: json.bonuses,
}));

export const races = new Source<Race>(
	"Races",
	processedRaces,
	race => race.name,
	race => race.name,
	(item, text) => `<ChapterLink chapter={2} target=${item.name}>${text ?? item.name}</InternalLink>`
);
