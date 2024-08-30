import fs from "fs";
import {FileBuilder} from "../utils/tsxBuilder";
import races from "../resources/sheet/races.json";
import {createDirectory} from "../utils/tsxDirectory";

export function assembleRaces() {
	const raceDescriptions = createDirectory(
		new FileBuilder(),
		races,
		race => race.name,
		race => race.description.map(parag => `<p>\n${parag}\n</p>`).join("\n")
	);

	fs.writeFileSync("src/generated/raceDescriptions.tsx", raceDescriptions.build());

	const file = new FileBuilder();
	file.withImport(`import Sub from "../components/Sub"`);

	const raceBonuses = createDirectory(
		file,
		races,
		race => race.name,
		race => race.bonuses
	);

	fs.writeFileSync("src/generated/raceBonuses.tsx", raceBonuses.build());
}
