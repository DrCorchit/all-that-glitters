import classJson from "../generated/classes.json";
import Source from "../utils/source";

export interface CombatClass {
	name: string;
	altName?: string;
	description: string;
	backstoryPrompts: string[];
	alignment?: string;
	coreAbilityName: string;
	coreAbilityDescription: string;
	limitations?: string;
	levelingBonuses: Partial<Record<string, string>>;
	startingEquipment: Partial<Record<string, string[]>>;
}

export const combatClasses = new Source<CombatClass>(
	"Classes",
	classJson,
	clazz => clazz.name,
	clazz => clazz.name,
	(clazz, text) => `<ChapterLink chapter={2} target=${clazz.name}>${text ?? clazz.name}</InternalLink>`
);
