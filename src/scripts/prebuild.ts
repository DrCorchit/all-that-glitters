import {Plugin} from "vite";
import assembleSpells from "../scripts/assembleSpells";
import {assembleClasses} from "../scripts/assembleClasses";

export function prebuild(): Plugin {
	return {
		name: "prebuild",
		async configResolved() {
			console.log("Assembling spells.json...");
			await assembleSpells();
			console.log("Assembling classes.json");
			assembleClasses();
			console.log("Finished Prebuild.");
		},
	};
}
