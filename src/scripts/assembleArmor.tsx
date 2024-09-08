import {armor} from "../concepts/armor";
import {createDirectory} from "../utils/tsxDirectory";

export function assembleArmor() {
	createDirectory(
		"armorEffects",
		armor.array,
		armor => armor.name,
		armor => armor.effects.join(", ")
	)
		.withImport(`import Sub from "../components/Sub";`)
		.save("src/generated/armorEffects.tsx");
}
