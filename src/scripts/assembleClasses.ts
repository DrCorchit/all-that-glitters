import fs from "fs";
import {Builder} from "../utils/tsxBuilder";

export interface ClassJson {
	name: string;
	altName?: string;
	description: string;
	backstoryPrompts: string[];
	alignment?: string;
	coreAbilityName: string;
	coreAbilityDescription: string;
	limitations?: string;
	levelingBonuses: Record<string, string>;
	startingEquipment: Record<string, string[]>;
}

export default function process(source: string): [string, string] {
	const json = JSON.parse(source) as ClassJson;
	const levelingBonuses = Object.entries(json.levelingBonuses)
		.map(entry => `\n    <div>At level ${entry[0]}, ${entry[1]}</div>`)
		.join("");

	const startingEquipment = Object.entries(json.startingEquipment)
		.map(entry => {
			const container = entry[0] !== "_" ? `\n  <b>${entry[0]}</b>:\n` : "\n";
			const items = entry[1].map(item => `    <li>${item}</li>`).join("\n");
			return `${container}  <ul>\n${items}\n  </ul>`;
		})
		.join("");

	const builder = new Builder();
	builder.withImport('import Sub from "../components/Sub";');
	builder.withImport('import Tooltip from "../components/Tooltip";');
	builder.withString("name", json.name);
	builder.withString("altName", json.altName);
	builder.withString("description", json.description);
	builder.withStringArray("backstoryPrompts", json.backstoryPrompts);
	builder.withString("alignment", json.alignment);
	builder.withString("coreAbilityName", json.coreAbilityName);
	builder.withTemplatizedString("coreAbilityDescription", json.coreAbilityDescription);
	builder.withTemplatizedString("limitations", json.limitations);
	builder.withTemplatizedString("levelingBonuses", levelingBonuses);
	builder.withTemplatizedString("startingEquipment", startingEquipment);

	const value = builder.build();
	//console.log(`Transformed class json for ${json.name}:\n${value}`);
	return [json.name, value];
}

export function assembleClasses() {
	const root = "src/resources/sheet/classes";
	const classes = fs.readdirSync(root);

	classes.forEach(filename => {
		const path = `${root}\\${filename}`;
		const str = fs.readFileSync(path, "utf8");
		const tsx = process(str);
		const output = `src/generated/${tsx[0]}.tsx`;
		fs.writeFileSync(output, tsx[1]);
		//console.log(`wrote class ${tsx[0]} to ${output}`);
	});
}
