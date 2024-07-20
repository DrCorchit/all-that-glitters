import {writeFileSync} from "fs";
import {templatize} from "./prebuild";
import assassinJson from "../resources/sheet/classes/assassin.json";
import barbarianJson from "../resources/sheet/classes/barbarian.json";
import crusaderJson from "../resources/sheet/classes/crusader.json";
import druidJson from "../resources/sheet/classes/druid.json";
import hermitJson from "../resources/sheet/classes/hermit.json";
import inquisitorJson from "../resources/sheet/classes/inquisitor.json";
import knightJson from "../resources/sheet/classes/knight.json";
import marksmanJson from "../resources/sheet/classes/marksman.json";
import mercenaryJson from "../resources/sheet/classes/mercenary.json";
import minstrelJson from "../resources/sheet/classes/minstrel.json";
import monkJson from "../resources/sheet/classes/monk.json";
import prophetJson from "../resources/sheet/classes/prophet.json";
import psychicJson from "../resources/sheet/classes/psychic.json";
import rangerJson from "../resources/sheet/classes/ranger.json";
import scholarJson from "../resources/sheet/classes/scholar.json";
import thiefJson from "../resources/sheet/classes/thief.json";
import tinkerJson from "../resources/sheet/classes/tinker.json";
import veteranJson from "../resources/sheet/classes/veteran.json";
import witchJson from "../resources/sheet/classes/witch.json";
import wizardJson from "../resources/sheet/classes/wizard.json";
import {Json} from "../utils/utils";

interface ClassJson {
	name: string;
	altName?: string;
	description: string;
	backstoryPrompts: string[];
	alignment?: string;
	coreAbilityName: string;
	coreAbilityDescription: Json;
	limitations?: Json;
	levelingBonuses: Json;
	startingEquipment: Json;
}

const classesJson: ClassJson[] = [
	assassinJson,
	barbarianJson,
	crusaderJson,
	druidJson,
	hermitJson,
	inquisitorJson,
	knightJson,
	marksmanJson,
	mercenaryJson,
	minstrelJson,
	monkJson,
	prophetJson,
	psychicJson,
	rangerJson,
	scholarJson,
	thiefJson,
	tinkerJson,
	veteranJson,
	witchJson,
	wizardJson,
];

export default function assembleClasses(): void {
	let output = JSON.stringify(classesJson);
	output = templatize(output);
	writeFileSync("src/resources/sheet/classes.json", output);
}
