import fs from "fs";
import {FileBuilder} from "../utils/tsxBuilder";
import {createDirectory} from "../utils/tsxDirectory";
import {WeaponKeyword, weaponKeywords as keyword} from "../concepts/weapon";

export function assembleWeapons() {
	const file = new FileBuilder();
	file.withImport(`import Tooltip from "../components/Tooltip"`);

	const keywords = createDirectory<WeaponKeyword>(
		file,
		keyword.array,
		keyword => keyword.name,
		keyword => keyword.description
	);

	fs.writeFileSync("src/generated/weaponKeywords.tsx", keywords.build());
}
