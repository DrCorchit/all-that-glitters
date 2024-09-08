import {createDirectory} from "../utils/tsxDirectory";
import {WeaponKeyword, weaponKeywords as keyword} from "../concepts/weapon";

export function assembleWeapons() {
	createDirectory<WeaponKeyword>(
		"weaponKeywordDescriptions",
		keyword.array,
		keyword => keyword.name,
		keyword => keyword.description
	)
		.withImport(`import Tooltip from "../components/Tooltip";`)
		.save("src/generated/weaponKeywordDescriptions.tsx");
}
