import {Plugin} from "vite";
import {assembleSpells} from "./assembleSpells";
import {assembleClasses} from "./assembleClasses";
import {assembleRaces} from "./assembleRaces";
import {items} from "../concepts/item";
import Source from "../utils/source";
import {statuses} from "../concepts/statusEffect";
import {creatures} from "../concepts/creatures";
import {sizes} from "../concepts/size";
import {chapters} from "../components/ChapterInfo";
import {appendices} from "../components/AppendixInfo";
import {keywords} from "../utils/keyword";

function load() {
	const assets: Source<any>[] = [chapters, appendices, keywords, items, statuses, creatures, sizes];

	assets.forEach(asset => {
		console.log(`Loaded ${asset.name} (${asset.array.length} entries)`);
	});
}

export function prebuild(): Plugin {
	return {
		name: "prebuild",
		async configResolved() {
			load();
			console.log("Assembling spells.json...");
			await assembleSpells();
			console.log("Assembling races.json");
			assembleRaces();
			console.log("Assembling classes.json");
			assembleClasses();

			console.log("Finished Prebuild.");
		},
	};
}
