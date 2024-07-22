/*
import barbarianJson from "../resources/sheet/classes/barbarian.class.json";
import crusaderJson from "../resources/sheet/classes/crusader.class.json";
import druidJson from "../resources/sheet/classes/druid.class.json";
import hermitJson from "../resources/sheet/classes/hermit.class.json";
import inquisitorJson from "../resources/sheet/classes/inquisitor.class.json";
import knightJson from "../resources/sheet/classes/knight.class.json";
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
*/
import Assassin from "../generated/Assassin";
import Source from "../utils/source";

export interface CombatClass {
	name: string;
	description: string;
	altName?: string;
	backstoryPrompts: string[];
	alignment?: string;
	coreAbilityName: string;
	coreAbilityDescription: JSX.Element;
	limitations: JSX.Element;
	levelingBonuses: JSX.Element;
	startingEquipment: JSX.Element;
}

const classesJson: CombatClass[] = [Assassin];

export const classes = new Source<CombatClass>(
	"Classes",
	classesJson,
	clazz => clazz.name,
	(item, text) => `<InternalLink chapter={2}>${text ?? item.name}</InternalLink>`
);
