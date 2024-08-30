import fs from "fs";
import {FileBuilder} from "../utils/tsxBuilder";
import {createDirectory} from "../utils/tsxDirectory";
import {CombatClass} from "../concepts/combatClass";
import {templatizeToString} from "../utils/templatizer";

export function assembleClasses() {
	const root = "src/resources/sheet/classes";
	const classFiles = fs.readdirSync(root);
	const classes = classFiles.map(filename => {
		const path = `${root}/${filename}`;
		const str = fs.readFileSync(path, "utf8");
		return JSON.parse(str) as CombatClass;
	});

	const classesJson = classes.map(clazz => {
		const levelingBonusesStr = Object.entries(clazz.levelingBonuses).map(entry => {
			const key = entry[0];
			const values = templatizeToString(entry[1]!!);
			return [key, values];
		});

		const startingEquipmentStr = Object.entries(clazz.startingEquipment).map(entry => {
			const key = templatizeToString(entry[0]);
			const values = entry[1]!!.map(value => templatizeToString(value));
			return [key, values];
		});

		return {
			...clazz,
			description: templatizeToString(clazz.description),
			limitations: clazz.limitations && templatizeToString(clazz.limitations),
			levelingBonuses: Object.fromEntries(levelingBonusesStr),
			startingEquipment: Object.fromEntries(startingEquipmentStr),
		};
	});

	fs.writeFileSync("src/generated/classes.json", JSON.stringify(classesJson, undefined, 2));

	const classDescriptions = createDirectory(
		new FileBuilder(),
		classes,
		clazz => clazz.name,
		clazz => clazz.description
	);

	fs.writeFileSync("src/generated/classDescriptions.tsx", classDescriptions.build());
}
