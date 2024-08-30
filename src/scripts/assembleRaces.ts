import fs from "fs";
import {FileBuilder} from "../utils/tsxBuilder";
import {createDirectory} from "../utils/tsxDirectory";
import {races} from "../concepts/race";

export function assembleRaces() {
	const raceDescriptions = createDirectory(
		new FileBuilder(),
		races.array,
		race => race.name,
		race =>
			race.description
				.split("\n")
				.map(parag => `<p>\n${parag}\n</p>`)
				.join("\n")
	);

	fs.writeFileSync("src/generated/raceDescriptions.tsx", raceDescriptions.build());

	const file = new FileBuilder();
	file.withImport(`import Sub from "../components/Sub"`);

	const raceBonuses = createDirectory(
		file,
		races.array,
		race => race.name,
		race => race.bonuses
	);

	fs.writeFileSync("src/generated/raceBonuses.tsx", raceBonuses.build());
}
