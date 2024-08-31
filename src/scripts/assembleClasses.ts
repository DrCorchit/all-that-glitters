import fs from "fs";
import {ArrayBuilder, ObjectBuilder} from "../utils/tsxBuilder";
import {createDirectory, createTypedDirectory} from "../utils/tsxDirectory";
import {CombatClass} from "../concepts/combatClass";
import {templatizeToString, templatizeToTsx} from "../utils/templatizer";

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

	createDirectory(
		"classDescriptions",
		classes,
		clazz => clazz.name,
		clazz => clazz.description
	).save("src/generated/classDescriptions.tsx");

	createDirectory(
		"coreAbilityDescriptions",
		classes,
		clazz => clazz.name,
		clazz => clazz.coreAbilityDescription
	)
		.withImport(`import { AppendixLink } from "../components/InternalLink"`)
		.withImport(`import Sub from "../components/Sub"`)
		.withImport(`import Tooltip from "../components/Tooltip"`)
		.save("src/generated/coreAbilityDescriptions.tsx");

	createTypedDirectory(
		"levelingBonuses",
		classes,
		clazz => clazz.name,
		clazz => {
			const builder = new ObjectBuilder();
			Object.entries(clazz.levelingBonuses).forEach(entry => {
				const level = Number.parseInt(entry[0]).toString();
				const bonus = templatizeToTsx(entry[1]!!);
				builder.withTSX(level, bonus);
			});
			return builder;
		},
		"Record<string, React.JSX.Element>"
	)
		.withImport(`import Sub from "../components/Sub";`)
		.withImport(`import Tooltip from "../components/Tooltip";`)
		.withImport(`import {AppendixLink} from "../components/InternalLink";`)
		.save("src/generated/levelingBonuses.tsx");

	createTypedDirectory(
		"startingEquipment",
		classes,
		clazz => clazz.name,
		clazz => {
			const inventory = new ObjectBuilder();
			const loose = new ArrayBuilder();
			const containers = new ArrayBuilder();

			Object.entries(clazz.startingEquipment).forEach(entry => {
				const containerStr = entry[0];
				const contentsStr = entry[1]!!.map(item => `<>${templatizeToTsx(item)}</>`);

				if (containerStr === "_") {
					loose.withValues(contentsStr);
				} else {
					const container = new ObjectBuilder();
					container.withValue("label", `<>${containerStr}</>`);
					container.withValue("contents", new ArrayBuilder().withValues(contentsStr).build());
					containers.withValue(container.build());
				}
			});

			inventory.withValue("loose", loose.build());
			inventory.withValue("containers", containers.build());
			return inventory;
		},
		"Inventory"
	)
		.withImport(`import { AppendixLink } from "../components/InternalLink"`)
		.withImport(`import Sub from "../components/Sub"`)
		.withImport(`import Tooltip from "../components/Tooltip"`)
		.withImport(`import { Inventory } from "../concepts/combatClass"`)
		.withImport(`import { items } from "../concepts/item"`)
		.save("src/generated/startingEquipment.tsx");
}
