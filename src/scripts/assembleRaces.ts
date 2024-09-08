import {createDirectory} from "../utils/tsxDirectory";
import {races} from "../concepts/race";

export function assembleRaces() {
	createDirectory(
		"raceDescriptions",
		races.array,
		race => race.name,
		race =>
			race.description
				.split("\n")
				.map(parag => `<p>\n${parag}\n</p>`)
				.join("\n")
	).save("src/generated/raceDescriptions.tsx");

	createDirectory(
		"raceBonuses",
		races.array,
		race => race.name,
		race => race.bonuses
	)
		.withImport(`import Sub from "../components/Sub";`)
		.save("src/generated/raceBonuses.tsx");
}
