//Auto-generated file (do not modify)
import React from "react";
import {TSXDirectory} from "../utils/tsxDirectory";
import { AppendixLink } from "../components/InternalLink";
import Sub from "../components/Sub";
import Tooltip from "../components/Tooltip";

export const assassin = <span className="default">You may expend 2 willpower to mark a target for assassination. The next time you score a critical hit on that target, deal an additional 2d6 damage.</span>

export const barbarian = <span className="default">You may spend 3 willpower to enter a rage for 5 combat turns. During a rage, your strength is increased by 3. If you are not wearing armor, you also take 3 less damage from bludgeoning, slashing, piercing, and fire damage. You may not cast spells, read scrolls, or use consumables without ending your rage. Note: when an ability increases your rage level, it increases your strength and resistance by the indicated amount and also resets the rage duration to 5 turns.</span>

export const crusader = <span className="default">Having taken a solemn oath of service before your God, you may call upon divine providence to bolster you and your allies. Once per short rest, you may take an action and expend 3 willpower to beseech your deity, gaining 1d8 temporary hitpoints and 1d8 bonus holy damage on your next successful weapon attack.</span>

export const druid = <span className="default">You have the ability to transform into a variety of animals. The willpower required to do so is dependent on the animal chosen.</span>

export const hermit = <span className="default">You expend 3 willpower to transform into your chosen animal for up to one hour. Your clothing and worn items merge with your beast form, and return upon detransformation. While transformed, your physical attributes (<Sub attr="STR"/>, <Sub attr="DEX"/>, <Sub attr="SPD"/>) change to that of your chosen form.</span>

export const inquisitor = <span className="default">In addition to your regular equipment, you have a special branding iron obtained from your chosen deity that can be imbued with divine magic by whispering a short prayer or sacred word. This brand is a standard melee weapon that deals 1d6 <span style={{color: "#FFF"}}>Piercing</span> damage, but you can expend 2 willpower  causing the end of the brand to glow blazing hot for 1 minute. Your brand is a standard melee weapon that deals 1d6 piercing damage plus your <Sub attr="CHA"/> modifier in fire damage. Enemies struck by this weapon also receive the heretic’s brand, marking them for divine retribution.</span>

export const knight = <span className="default">You can expend 1 willpower to add half your armor's BC to a skill check or saving throw. The cost to do so increases by 1 each time this ability is used, and resets to 1 after a long rest.</span>

export const marksman = <span className="default">When making a ranged attack, you may expend 1 willpower to focus your aim, gaining advantage on the attack roll and lowering the CT by 1.</span>

export const mercenary = <span className="default">As a result of extensive training, combat feats and maneuvers cost one less training slot to learn.</span>

export const minstrel = <span className="default">When any character makes an attack roll, you may spend 2 willpower to make a quick cheer, quip, retort, or insult (as appropriate). If you pass a successful DT 10 <Sub skill="Performance" /> check, the attacker gains advantage (if they were an ally) or disadvantage (if they were an enemy).</span>

export const monk = <span className="default">You may add your martial arts proficiency bonus to your unarmed attack damage.</span>

export const plague_doctor = <span className="default">You have a special syringe filled with chemicals, which functions as a <Tooltip tip={"Stiletto"}>A stabbing knife, long and sharp. Ignores BC from chainmail.</Tooltip>. However, when your weapon would be coated with poison, it doubles the Whenever you take a breather or long rest, you can change the mixture.</span>

export const prophet = <span className="default">As an agent of divine will, you may channel your deity's power once per day to cast a spell with its willpower cost reduced by 5.</span>

export const psychic = <span className="default">As a psychic prodigy, you can cast psionics spells for one less willpower.</span>

export const ranger = <span className="default">TODO</span>

export const scholar = <span className="default">You start out with the <AppendixLink appendix={2} target="arcane_adept">Arcane Adept</AppendixLink> feat for a magical school of your choice. The training slot cost to learn spells is reduced by 1, and the cost to learn academic spells is reduced by 2.</span>

export const thief = <span className="default">Owing to your lifestyle, you have a variety of talents in diverse areas:<ul><li><b>Slim Pickings</b>: You can always conceal one small weapon on your person. This weapon can only be found if you are physically searched and the person conducting the search passes a DT 15 <Sub skill="Perception" /> check.</li><li><b>Hard Knocks</b>: Your small weapons never suffer from the <Tooltip tip={"Improvised"}>The item is not designed as a weapon. The damage die is rolled with disadvantage.</Tooltip> penalty. Small weapons with the <Tooltip tip={"Sharp"}>The critical threshold for the weapon is reduced by 1. This ability is lost after critical failing an attack roll, but can be regained by using a whetstone.</Tooltip> property lower the weapon CT by 2, instead of 1.</li><li><b>Thieves' Cant</b>: You know a special form of communication that allows you to communicate secret messages, up to 6 words per minute. The language is widely known among thieves and beggars.</li></ul></span>

export const veteran = <span className="default">When in combat, you gain advantage on skill checks (including attack rolls) made while adjacent to an ally.</span>

export const witch = <span className="default">When you do not have enough willpower to cast a spell, you may sacrifice hitpoints to make up the difference. The number of hitpoints you must sacrifice to gain one willpower starts at 1 and increase by 1 each time this ability is used, until it resets during a long rest.</span>

export const wizard = <span className="default">Whenever you learn a new spell, you may choose to make that spell your favorite. Your favorite spell costs one less willpower to cast than usual.</span>

export const coreAbilityDescriptions = new TSXDirectory<React.JSX.Element>();

coreAbilityDescriptions.register("assassin", assassin)

coreAbilityDescriptions.register("barbarian", barbarian)

coreAbilityDescriptions.register("crusader", crusader)

coreAbilityDescriptions.register("druid", druid)

coreAbilityDescriptions.register("hermit", hermit)

coreAbilityDescriptions.register("inquisitor", inquisitor)

coreAbilityDescriptions.register("knight", knight)

coreAbilityDescriptions.register("marksman", marksman)

coreAbilityDescriptions.register("mercenary", mercenary)

coreAbilityDescriptions.register("minstrel", minstrel)

coreAbilityDescriptions.register("monk", monk)

coreAbilityDescriptions.register("plague_doctor", plague_doctor)

coreAbilityDescriptions.register("prophet", prophet)

coreAbilityDescriptions.register("psychic", psychic)

coreAbilityDescriptions.register("ranger", ranger)

coreAbilityDescriptions.register("scholar", scholar)

coreAbilityDescriptions.register("thief", thief)

coreAbilityDescriptions.register("veteran", veteran)

coreAbilityDescriptions.register("witch", witch)

coreAbilityDescriptions.register("wizard", wizard)