import fs from "fs";
import {FileBuilder, ObjectBuilder} from "../utils/tsxBuilder";
import {normalize} from "path";

export interface RaceJson {
	name: string;
	description: string[];
	bonuses: string;
}

function buildRaceObject(json: RaceJson): string {
	const description = json.description.map(parag => `<p>\n${parag}\n</p>`).join("\n");

	const builder = new ObjectBuilder();
	builder.withString("name", json.name);
	builder.withTSX("description", description);
	builder.withTSX("bonuses", json.bonuses);
	return builder.build();
}

function buildRacesFile() {
	const fileContents = fs.readFileSync("src/resources/sheet/races.json", "utf8");
	const json = JSON.parse(fileContents) as RaceJson[];

	const raceObjects = json.map(obj => {
		const name = normalize(obj.name);
		const tsx = buildRaceObject(obj);
		return [name, tsx];
	});

	const builder = new FileBuilder();

	builder.withImport('import React from "react";');
	builder.withImport('import Sub from "../components/Sub";');
	//builder.withImport('import Tooltip from "../components/Tooltip";');
	builder.withImport('import Source from "../utils/source";');

	builder.withMember(`export interface Race {
	name: string;
	description: JSX.Element;
  bonuses: JSX.Element;
}`);

	raceObjects.forEach(info => {
		const [name, tsx] = info;
		builder.withMember(`export const ${name} = ${tsx};`);
	});
	const array = raceObjects.map(info => info[0]).join(", ");

	builder.withMember(`const allRaces: Race[] = [${array}]`);

	builder.withMember(`export const races = new Source<Race>(
	"Races",
	allRaces,
	race => race.name,
	(item, text) => \`<ChapterLink chapter={2} target={item.name}>\${text ?? item.name}</InternalLink>\`
);`);

	return builder.build();
}

export function assembleRaces() {
	fs.writeFileSync("src/generated/race.tsx", buildRacesFile());
}
