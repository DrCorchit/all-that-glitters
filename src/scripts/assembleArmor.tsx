import fs from "fs";
import {Armor, armor} from "../concepts/armor";
import {FileBuilder} from "../utils/tsxBuilder";
import {createDirectory} from "../utils/tsxDirectory";

export function assembleArmor() {
	const file = new FileBuilder();
	file.withImport(`import Sub from "../components/Sub"`);

	const armorEffects = createDirectory(
		file,
		armor.array,
		armor => armor.name,
		armor => armor.effects.join(", ")
	);

	fs.writeFileSync("src/generated/armorEffects.tsx", armorEffects.build());
}
