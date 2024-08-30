import {Plugin} from "vite";
import {assembleSpells} from "./assembleSpells";
import {assembleClasses} from "./assembleClasses";
import {assembleRaces} from "./assembleRaces";
import {assembleFeats} from "./assembleFeats";
import {assembleArmor} from "./assembleArmor";
import {assembleWeapons} from "./assembleWeapons";
import {assembleStatuses} from "./assembleStatuses";

export function prebuild(): Plugin {
	return {
		name: "prebuild",
		async configResolved() {
			console.log("Assembling spells.json...");
			await assembleSpells();
			console.log("Assembling feats.json...");
			await assembleFeats();

			//Assemble TSX files
			assembleArmor();
			assembleWeapons();
			assembleStatuses();
			assembleRaces();
			assembleClasses();
			console.log("Finished Prebuild.");
		},
	};
}
