import fs from "fs";
import {FileBuilder, ObjectBuilder} from "../utils/tsxBuilder";
import {normalize} from "path";

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

function buildClassObject(json: ClassJson): string {
	const levelingBonuses = Object.entries(json.levelingBonuses)
		.map(entry => `\n    ${entry[0]}: <span className="default">${entry[1]}</span>,`)
		.join("");

	const startingEquipment = Object.entries(json.startingEquipment)
		.map(entry => {
			const name = entry[0] === "_" ? "" : `name: <b>${entry[0]}</b>, `;
			const contents = entry[1].map(item => `<>${item}</>`).join(", ");
			return `\n    { ${name}contents: [${contents}] },`;
		})
		.join("");

	const builder = new ObjectBuilder();
	builder.withString("name", json.name);
	builder.withString("altName", json.altName);
	builder.withTSX("description", json.description);
	builder.withStringArray("backstoryPrompts", json.backstoryPrompts);
	builder.withString("alignment", json.alignment);
	builder.withString("coreAbilityName", json.coreAbilityName);
	builder.withTSX("coreAbilityDescription", json.coreAbilityDescription);
	builder.withTSX("limitations", json.limitations);
	builder.withValue("levelingBonuses", `{${levelingBonuses}}`);
	builder.withValue("startingEquipment", `[${startingEquipment}]`);
	return builder.build();
}

function buildClassesFile() {
	const root = "src/resources/sheet/classes";
	const classFiles = fs.readdirSync(root);

	const classObjects = classFiles.map(filename => {
		const path = `${root}\\${filename}`;
		const str = fs.readFileSync(path, "utf8");
		const json = JSON.parse(str) as ClassJson;
		const name = normalize(json.name);
		return [name, buildClassObject(json)];
	});

	const builder = new FileBuilder();

	builder.withImport('import Sub from "../components/Sub";');
	builder.withImport('import Tooltip from "../components/Tooltip";');
	builder.withImport('import Source from "../utils/source";');

	builder.withMember(`export interface CombatClass {
	name: string;
	description: JSX.Element;
	altName?: string;
	backstoryPrompts: string[];
	alignment?: string;
	coreAbilityName: string;
	coreAbilityDescription: JSX.Element;
	limitations?: JSX.Element;
	levelingBonuses: Record<number, JSX.Element>;
	startingEquipment: {name?: JSX.Element; contents: JSX.Element[]}[];
}`);

	classObjects.forEach(info => {
		const [name, tsx] = info;
		builder.withMember(`export const ${name} = ${tsx};`);
	});
	const array = classObjects.map(info => info[0]).join(", ");

	builder.withMember(`const allClasses = [${array}]`);

	builder.withMember(`export const classes = new Source<CombatClass>(
	"Classes",
	allClasses,
	clazz => clazz.name,
	(item, text) => \`<ChapterLink chapter={2} target={item.name}>\${text ?? item.name}</InternalLink>\`
);`);

	return builder.build();
}

export function assembleClasses() {
	fs.writeFileSync("src/generated/combatClass.tsx", buildClassesFile());
}
