import Assassin from "../generated/Assassin";
import Barbarian from "../generated/Barbarian";
import Crusader from "../generated/Crusader";
import Druid from "../generated/Druid";
import Hermit from "../generated/Hermit";
import Inquisitor from "../generated/Inquisitor";
import Knight from "../generated/Knight";
import Marksman from "../generated/Marksman";
import Mercenary from "../generated/Mercenary";
import Minstrel from "../generated/Minstrel";
import Monk from "../generated/Monk";
import Prophet from "../generated/Prophet";
import Psychic from "../generated/Psychic";
import Ranger from "../generated/Ranger";
import Scholar from "../generated/Scholar";
import Thief from "../generated/Thief";
import Tinker from "../generated/Tinker";
import Veteran from "../generated/Veteran";
import Witch from "../generated/Witch";
import Wizard from "../generated/Wizard";
import Source from "../utils/source";

export interface CombatClass {
	name: string;
	description: JSX.Element;
	altName?: string;
	backstoryPrompts: string[];
	alignment?: string;
	coreAbilityName: string;
	coreAbilityDescription: JSX.Element;
	limitations?: JSX.Element;
	levelingBonuses: Record<number, JSX.Element>;
	startingEquipment: {name?: JSX.Element; contents: JSX.Element[]}[];
}

//const classesJson: CombatClass[] = [];
//*
const classesJson: CombatClass[] = [
	Assassin,
	Barbarian,
	Crusader,
	Druid,
	Hermit,
	Inquisitor,
	Knight,
	Marksman,
	Mercenary,
	Minstrel,
	Monk,
	Prophet,
	Psychic,
	Ranger,
	Scholar,
	Thief,
	Tinker,
	Veteran,
	Witch,
	Wizard,
];
//*/
export const classes = new Source<CombatClass>(
	"Classes",
	classesJson,
	clazz => clazz.name,
	(item, text) => `<InternalLink chapter={2}>${text ?? item.name}</InternalLink>`
);
