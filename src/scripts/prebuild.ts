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
import {assembleFeats} from "./assembleFeats";
import {attributes} from "../concepts/attribute";
import {skills} from "../concepts/skill";

function preload() {
	const assets: Source<any>[] = [chapters, appendices, keywords, attributes, skills, items, statuses, creatures, sizes];

	assets.forEach(asset => {
		console.log(`Loaded ${asset.name} (${asset.array.length} entries)`);
	});
}

export function prebuild(): Plugin {
	return {
		name: "prebuild",
		async configResolved() {
			preload();

			console.log("Assembling spells.json...");
			await assembleSpells();
			console.log("Assembling feats.json...");
			await assembleFeats();
			console.log("Assembling races.json...");
			assembleRaces();
			console.log("Assembling classes.json...");
			assembleClasses();

			console.log("Finished Prebuild.");
		},
	};
}
