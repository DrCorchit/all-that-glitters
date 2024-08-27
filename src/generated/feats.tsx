//Auto-generated file (do not modify)
import Sub from "../components/Sub";
import Tooltip from "../components/Tooltip";
import Source from "../utils/source";
import {FeatTSX} from "../concepts/feat";

export const stalwart: FeatTSX = {
  name: "Stalwart",
  description: <div className='default'>Gain +2 HP per level, but no bonus to willpower from character level.</div>,
  level: 1,
  featType: "Mundane",
  trainingReqs: {
  level: 1,
  slots: 10,
  feats: [],
  stats: {
  str: 11,
},
},
};

export const deft: FeatTSX = {
  name: "Deft",
  description: <div className='default'>Gain a 1d4 bonus to spell saving throws.</div>,
  level: 1,
  featType: "Mundane",
  trainingReqs: {
  level: 1,
  slots: 10,
  feats: [],
  stats: {
  dex: 11,
},
},
};

export const eager: FeatTSX = {
  name: "Eager",
  description: <div className='default'>Gain +1 willpower after slaying an enemy.</div>,
  level: 1,
  featType: "Mundane",
  trainingReqs: {
  level: 1,
  slots: 10,
  feats: [],
  stats: {
  spd: 11,
},
},
};

export const prodigy: FeatTSX = {
  name: "Prodigy",
  description: <div className='default'>Training skill proficiency levels to expertise or mastery costs 1 fewer training slots.</div>,
  level: 2,
  featType: "Mundane",
  trainingReqs: {
  level: 3,
  slots: 2,
  feats: [],
  stats: {
  int: 12,
},
},
};

export const jack_of_all_trades: FeatTSX = {
  name: "Jack of All Trades",
  description: <div className='default'>Remediation and proficiency skill training require one fewer training slot, but other training is increased by 1.</div>,
  level: 2,
  featType: "Mundane",
  trainingReqs: {
  level: 3,
  slots: 4,
  feats: [],
  stats: {
  nst: 12,
},
},
};

export const specialist: FeatTSX = {
  name: "Specialist",
  description: <div className='default'>Choose an attribute. All skill trainings associated with that attribute cost one less training slot. This feat cannot be taken multiple times, and is mutually exclusive with "Jack of all Trades" and "Prodigy".</div>,
  level: 2,
  featType: "Mundane",
  trainingReqs: {
  level: 3,
  slots: 3,
  feats: [],
  stats: {
  cha: 12,
},
},
};

export const hot_tempered: FeatTSX = {
  name: "Hot Tempered",
  description: <div className='default'>When you take 5 or more damage in a single blow, gain 1 willpower.</div>,
  level: 3,
  featType: "Mundane",
  trainingReqs: {
  level: 5,
  slots: 8,
  feats: [],
  stats: {
  nst: 13,
},
},
};

export const warthog: FeatTSX = {
  name: "Warthog",
  description: <div className='default'>When you fail a saving throw by 1, you can expend 1 willpower to succeed it instead.</div>,
  level: 3,
  featType: "Mundane",
  trainingReqs: {
  level: 5,
  slots: 10,
  feats: [],
  stats: {
  str: 13,
},
},
};

export const early_riser: FeatTSX = {
  name: "Early Riser",
  description: <div className='default'>You have advantage on your first skill check of the day.</div>,
  level: 4,
  featType: "Mundane",
  trainingReqs: {
  level: 7,
  slots: 4,
  feats: [],
  stats: {
  cha: 14,
},
},
};

export const night_owl: FeatTSX = {
  name: "Night Owl",
  description: <div className='default'>You have advantage on skill checks between midnight and sunrise.</div>,
  level: 4,
  featType: "Mundane",
  trainingReqs: {
  level: 7,
  slots: 6,
  feats: [],
  stats: {
  nst: 14,
},
},
};

export const flagellant: FeatTSX = {
  name: "Flagellant",
  description: <div className='default'>When you take 10 or more damage in a single blow, gain 1 willpower.</div>,
  level: 5,
  featType: "Mundane",
  trainingReqs: {
  level: 9,
  slots: 4,
  feats: ["adrenaline_rush"],
  stats: {
  str: 15,
},
},
};

export const take_backsies: FeatTSX = {
  name: "Take Backsies",
  description: <div className='default'>Once a day, you can expend willpower to reroll a skill check you have failed. The amount of willpower required is equal to the amount by which you failed the roll.</div>,
  level: 7,
  featType: "Mundane",
  trainingReqs: {
  level: 13,
  slots: 7,
  feats: [],
  stats: {
  dex: 17,
},
},
};

export const arcane_apprentice: FeatTSX = {
  name: "Arcane Apprentice",
  description: <div className='default'>You can learn common spells from a chosen school of magic. You can take this feat multiple times, once for each school of magic, but the training slot cost increases by 3 each time.</div>,
  level: 1,
  featType: "Arcane",
  trainingReqs: {
  level: 1,
  slots: 3,
  feats: [],
  stats: {
  int: 10,
},
},
};

export const fast_learner: FeatTSX = {
  name: "Fast Learner",
  description: <div className='default'>Whenever you learn a new spell, you can attempt a <Sub skill="Sorcery" /> check to reduce the training slot cost by 1. The difficulty of the check is 12 plus the spell's level.</div>,
  level: 2,
  featType: "Arcane",
  trainingReqs: {
  level: 3,
  slots: 6,
  feats: [],
  stats: {
  int: 12,
},
},
};

export const sixth_sense: FeatTSX = {
  name: "Sixth Sense",
  description: <div className='default'>When sneaking, you have advantage on <Sub skill="Perception" /> checks to see if you have been detected.</div>,
  level: 2,
  featType: "Arcane",
  trainingReqs: {
  level: 3,
  slots: 10,
  feats: [],
  stats: {
  nst: 12,
},
},
};

export const mana_regeneration: FeatTSX = {
  name: "Mana Regeneration",
  description: <div className='default'>When you begin a combat turn with no willpower, gain one willpower.</div>,
  level: 2,
  featType: "Arcane",
  trainingReqs: {
  level: 3,
  slots: 10,
  feats: [],
  stats: {
  cha: 12,
},
},
};

export const steady_hands: FeatTSX = {
  name: "Steady Hands",
  description: <div className='default'>You can expend 1 willpower to reroll a concentration saving throw (unless triggered by <span style={{color: "#FF4"}}>Lightning</span> damage).</div>,
  level: 3,
  featType: "Arcane",
  trainingReqs: {
  level: 5,
  slots: 4,
  feats: [],
  stats: {
  dex: 13,
},
},
};

export const war_mage: FeatTSX = {
  name: "War Mage",
  description: <div className='default'>You can cast offensive spells with a range of touch as an opportunity attack.</div>,
  level: 3,
  featType: "Arcane",
  trainingReqs: {
  level: 5,
  slots: 4,
  feats: [],
  stats: {
  str: 13,
},
},
};

export const march: FeatTSX = {
  name: "March",
  description: <div className='default'>When you cast a spell, gain 6 feet of movement speed.</div>,
  level: 3,
  featType: "Arcane",
  trainingReqs: {
  level: 5,
  slots: 2,
  feats: [],
  stats: {
  spd: 13,
},
},
};

export const arcane_adept: FeatTSX = {
  name: "Arcane Adept",
  description: <div className='default'>You can learn academic spells from a chosen school of magic.</div>,
  level: 4,
  featType: "Arcane",
  trainingReqs: {
  level: 7,
  slots: 4,
  feats: [],
  stats: {
  int: 14,
},
},
};

export const well_rounded: FeatTSX = {
  name: "Well Rounded",
  description: <div className='default'>Your instinct and charisma modifier scores are added together when calculating willpower.</div>,
  level: 4,
  featType: "Arcane",
  trainingReqs: {
  level: 7,
  slots: 8,
  feats: [],
  stats: {
  nst: 14,
},
},
};

export const impetuous: FeatTSX = {
  name: "Impetuous",
  description: <div className='default'>Your willpower is increased by 3.</div>,
  level: 4,
  featType: "Arcane",
  trainingReqs: {
  level: 7,
  slots: 6,
  feats: [],
  stats: {
  cha: 14,
},
},
};

export const savant: FeatTSX = {
  name: "Savant",
  description: <div className='default'>Your HP is reduced by half, but you gain twice as much willpower from character level.</div>,
  level: 4,
  featType: "Arcane",
  trainingReqs: {
  level: 7,
  slots: 6,
  feats: [],
  stats: {
  int: 14,
},
},
};

export const war_criminal_mage: FeatTSX = {
  name: "War Criminal Mage",
  description: <div className='default'>You can now learn forbidden spells.</div>,
  level: 5,
  featType: "Arcane",
  trainingReqs: {
  level: 9,
  slots: 3,
  feats: [],
  stats: {
  int: 15,
},
},
};

export const erudite: FeatTSX = {
  name: "Erudite",
  description: <div className='default'>Ingratiated with collegiate fellows, academic spells cost 1 less training slot.</div>,
  level: 5,
  featType: "Arcane",
  trainingReqs: {
  level: 9,
  slots: 4,
  feats: [],
  stats: {
  int: 15,
},
},
};

export const barrage: FeatTSX = {
  name: "Barrage",
  description: <div className='default'>Whenever you cast two or more spells in one turn, gain 1 willpower.</div>,
  level: 5,
  featType: "Arcane",
  trainingReqs: {
  level: 9,
  slots: 8,
  feats: [],
  stats: {
  cha: 15,
},
},
};

export const sneakspell: FeatTSX = {
  name: "Sneakspell",
  description: <div className='default'>Spells you cast are totally quiet to others.</div>,
  level: 5,
  featType: "Arcane",
  trainingReqs: {
  level: 9,
  slots: 6,
  feats: [],
  stats: {
  nst: 13,
},
},
};

export const arcane_master: FeatTSX = {
  name: "Arcane Master",
  description: <div className='default'>You can learn esoteric spells (except from the school of Shamanism).</div>,
  level: 6,
  featType: "Arcane",
  trainingReqs: {
  level: 11,
  slots: 6,
  feats: [],
  stats: {
  int: 16,
},
},
};

export const first_strike: FeatTSX = {
  name: "First Strike",
  description: <div className='default'>As long as you're not surprised, you can attempt a difficulty 15 <Sub skill="Initiative" /> check. If successful, you can cast a spell before initiative is rolled.</div>,
  level: 6,
  featType: "Arcane",
  trainingReqs: {
  level: 11,
  slots: 10,
  feats: [],
  stats: {
  spd: 16,
},
},
};

export const master_of_ceremonies: FeatTSX = {
  name: "Master of Ceremonies",
  description: <div className='default'>Ceremonies cost half as much willpower to cast.</div>,
  level: 7,
  featType: "Arcane",
  trainingReqs: {
  level: 13,
  slots: 10,
  feats: [],
  stats: {
  int: 18,
},
},
};

export const parry: FeatTSX = {
  name: "Parry",
  description: <div className='default'>You may attempt to parry melee attacks using a reaction. When parrying, your BC is increased by the parry stat of the weapon.</div>,
  level: 1,
  featType: "Common",
  trainingReqs: {
  level: 1,
  slots: 3,
  feats: [],
  stats: {
  dex: 11,
},
},
};

export const parkour: FeatTSX = {
  name: "Parkour",
  description: <div className='default'>Gain a 1d4 bonus to <Sub skill="Mobility" /> checks when climbing.</div>,
  level: 1,
  featType: "Common",
  trainingReqs: {
  level: 1,
  slots: 4,
  feats: [],
  stats: {
  dex: 11,
},
},
};

export const leapfrog: FeatTSX = {
  name: "Leapfrog",
  description: <div className='default'>When you jump, you can jump 1 foot higher and six feet farther.</div>,
  level: 1,
  featType: "Common",
  trainingReqs: {
  level: 1,
  slots: 4,
  feats: [],
  stats: {
  spd: 11,
},
},
};

export const fast_walker: FeatTSX = {
  name: "Fast Walker",
  description: <div className='default'>When you take the move action, you can move six feet farther.</div>,
  level: 1,
  featType: "Common",
  trainingReqs: {
  level: 1,
  slots: 5,
  feats: [],
  stats: {
  spd: 11,
},
},
};

export const pensive: FeatTSX = {
  name: "Pensive",
  description: <div className='default'>+1 to saving throws, but -1 to skill checks. +1 <Sub skill="Defense" /></div>,
  level: 1,
  featType: "Common",
  trainingReqs: {
  level: 1,
  slots: 1,
  feats: [],
  stats: {
  int: 11,
},
},
};

export const sensitive: FeatTSX = {
  name: "Sensitive",
  description: <div className='default'>+1 to skill checks, but -1 to saving throws. +1 <Sub skill="Perception" /></div>,
  level: 1,
  featType: "Common",
  trainingReqs: {
  level: 1,
  slots: 1,
  feats: [],
  stats: {
  nst: 11,
},
},
};

export const jolly: FeatTSX = {
  name: "Jolly",
  description: <div className='default'>Gain +1 on all skill checks as long as your willpower is full.</div>,
  level: 1,
  featType: "Common",
  trainingReqs: {
  level: 1,
  slots: 3,
  feats: [],
  stats: {
  cha: 11,
},
},
};

export const billy_goat: FeatTSX = {
  name: "Billy Goat",
  description: <div className='default'>You gain a 1d4 bonus when making <Sub skill="Mobility" /> saving throws.</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 6,
  feats: [],
  stats: {
  str: 12,
},
},
};

export const deep_breath: FeatTSX = {
  name: "Deep Breath",
  description: <div className='default'>You can hold your breath twice as long as normal.</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 3,
  feats: [],
  stats: {
  str: 12,
},
},
};

export const pratfaller: FeatTSX = {
  name: "Pratfaller",
  description: <div className='default'>Fall damage is reduced by 2d6.</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 3,
  feats: [],
  stats: {
  dex: 12,
},
},
};

export const vertical_escape: FeatTSX = {
  name: "Vertical Escape",
  description: <div className='default'>You may use the grappling hook to make a hasty escape as a combat action. If surroundings are appropriate, you can attempt a difficulty 12 <Sub skill="Mobility" /> check to throw the hook up to 30 feet vertically. If it latches, you can use an action to climb 10 feet up the rope, away from enemy melee attacks.</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 2,
  feats: [],
  stats: {
  dex: 12,
},
},
};

export const dodge_roll: FeatTSX = {
  name: "Dodge Roll",
  description: <div className='default'>When you take the dodge action, you gain 6 feet of movement speed.</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 3,
  feats: [],
  stats: {
  dex: 12,
  spd: 12,
},
},
};

export const freestyler: FeatTSX = {
  name: "Freestyler",
  description: <div className='default'>Swim speed is increased by 6 feet per turn.</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 2,
  feats: [],
  stats: {
  spd: 12,
},
},
};

export const blitzkrieg: FeatTSX = {
  name: "Blitzkrieg",
  description: <div className='default'>You can make <Sub skill="Martial Arts" /> checks using your speed modifier (instead of strength or dexterity)</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 6,
  feats: [],
  stats: {
  spd: 12,
},
},
};

export const triage: FeatTSX = {
  name: "Triage",
  description: <div className='default'>When you take the help action, allies heal twice as much hp.</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 2,
  feats: [],
  stats: {
  int: 12,
},
},
};

export const charlatan: FeatTSX = {
  name: "Charlatan",
  description: <div className='default'>You can use charisma as a base attribute for <Sub skill="Sorcery" /> checks.</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 6,
  feats: [],
  stats: {
  cha: 12,
},
},
};

export const loremaster: FeatTSX = {
  name: "Loremaster",
  description: <div className='default'>You can make recognition rolls using the <Sub skill="Folklore" /> skill, instead of <Sub skill="Survival" />.</div>,
  level: 2,
  featType: "Common",
  trainingReqs: {
  level: 3,
  slots: 4,
  feats: [],
  stats: {
  nst: 12,
},
},
};

export const cleaving_strike: FeatTSX = {
  name: "Cleaving Strike",
  description: <div className='default'>When making a melee attack with a heavy weapon that deals <span style={{color: "#CFF"}}>Slashing</span> damage (but not a polearm), you can expend 2 willpower to strike an additional foe if more than one foe is in range.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 4,
  feats: [],
  stats: {
  str: 14,
},
},
};

export const shield_bash: FeatTSX = {
  name: "Shield Bash",
  description: <div className='default'>You can make a bludgeoning attack when carrying a <Tooltip tip={"Buckler"}>A small shield. Allows shield bash.</Tooltip> or <Tooltip tip={"Shield"}>An ordinary shield. Allows shield bash.</Tooltip> in your offhand.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 3,
  feats: [],
  stats: {
  str: 12,
},
},
};

export const shield_charge: FeatTSX = {
  name: "Shield Charge",
  description: <div className='default'>When you take the jog action while carrying a shield, you can make a 1d8 <span style={{color: "#888"}}>Bludgeoning</span> damage to an enemy. Dealing damage to any enemy in this way consumes your remaining movement points.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 4,
  feats: [],
  stats: {
  str: 13,
  spd: 13,
},
},
};

export const haft_strike: FeatTSX = {
  name: "Haft Strike",
  description: <div className='default'>When you make a melee attack with a polearm, you can expend 1 willpower to follow it up with a haft strike. The haft strike deals a flat 1d4 <span style={{color: "#888"}}>Bludgeoning</span> and does not benefit from any attribute modifier or the extended reach of the polearm.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 4,
  feats: [],
  stats: {
  dex: 13,
},
},
};

export const dual_wielder: FeatTSX = {
  name: "Dual Wielder",
  description: <div className='default'>When you make a melee weapon attack while dual wielding, you can make a secondary attack with your offhand weapon. The second attack does not benefit from any attribute modifier but is otherwise an ordinary weapon attack.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 10,
  feats: [],
  stats: {
  dex: 13,
},
},
};

export const stop_drop_and_roll: FeatTSX = {
  name: "Stop, Drop, and Roll",
  description: <div className='default'>You can expend 2 actions to extinguish all accumulated <Tooltip tip={"Burning"}>Accumulates. Characters take 1d4 damage at the end of their turn, then lose one level of burning. If accumulated burning exceeds the target's <Sub attr="STR"/> score at the start of their turn, they are incapacitated for that turn.</Tooltip>.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 3,
  feats: [],
  stats: {
  dex: 13,
},
},
};

export const riposte: FeatTSX = {
  name: "Riposte",
  description: <div className='default'>You may expend 1 willpower to follow up a successful parry with a counterattack.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 7,
  feats: [],
  stats: {
  dex: 13,
},
},
};

export const momentum: FeatTSX = {
  name: "Momentum",
  description: <div className='default'>Gain 6 feet of movement speed every time you kill an opponent.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 5,
  feats: [],
  stats: {
  spd: 13,
},
},
};

export const friend_in_need: FeatTSX = {
  name: "Friend in Need",
  description: <div className='default'>You can take the "move" and "help" actions in two actions (instead of three).</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 4,
  feats: [],
  stats: {
  spd: 13,
},
},
};

export const spellsword: FeatTSX = {
  name: "Spellsword",
  description: <div className='default'>When you make a weapon attack on an enemy, it has disadvantage on spell saving throws against your spells until the start of its next turn. When you make a spell attack on an enemy, you have advantage on weapon attacks against it until the start of your next turn.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 10,
  feats: [],
  stats: {
  int: 13,
},
},
};

export const bookworm: FeatTSX = {
  name: "Bookworm",
  description: <div className='default'>You can make recognition rolls using the <Sub skill="Literacy" /> skill, instead of <Sub skill="Survival" /></div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 6,
  feats: [],
  stats: {
  int: 13,
},
},
};

export const dungeoneer: FeatTSX = {
  name: "Dungeoneer",
  description: <div className='default'>Gain a 1d4 bonus to <Sub skill="Perception" /> when exploring dungeons, and to <Sub skill="Legerdemain" /> when disarming traps.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 4,
  feats: [],
  stats: {
  nst: 13,
},
},
};

export const prankster: FeatTSX = {
  name: "Prankster",
  description: <div className='default'>You have advantage on rolls to convince your marks that your shenanigans (pickpocketing, lockpicking, deceptions, etc) are harmless pranks.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 4,
  feats: [],
  stats: {
  cha: 13,
},
},
};

export const exceptional: FeatTSX = {
  name: "Exceptional",
  description: <div className='default'>Gain +1 willpower whenever you deal a critical hit.</div>,
  level: 3,
  featType: "Common",
  trainingReqs: {
  level: 5,
  slots: 12,
  feats: [],
  stats: {
  cha: 13,
},
},
};

export const guardian: FeatTSX = {
  name: "Guardian",
  description: <div className='default'>When you take the block action, allies adjacent to you also benefit from the increased BC.</div>,
  level: 4,
  featType: "Common",
  trainingReqs: {
  level: 7,
  slots: 10,
  feats: [],
  stats: {
  str: 14,
},
},
};

export const that_dog: FeatTSX = {
  name: "That Dog",
  description: <div className='default'>Whenever you take damage that would knock you unconscious, you can expend willpower to remain   conscious (at 1 hp). The willpower required is equal to the excess damage.</div>,
  level: 4,
  featType: "Common",
  trainingReqs: {
  level: 7,
  slots: 10,
  feats: [],
  stats: {
  str: 14,
},
},
};

export const come_hither: FeatTSX = {
  name: "Come Hither",
  description: <div className='default'>Using an action, the player may throw the grappling hook at a target within 20 feet. Upon a successful <Sub skill="Accuracy" /> check against the target’s Mitigation, the target is pulled up to 15 feet towards the player.</div>,
  level: 4,
  featType: "Common",
  trainingReqs: {
  level: 7,
  slots: 3,
  feats: [],
  stats: {
  dex: 14,
},
},
};

export const marathon: FeatTSX = {
  name: "Marathon",
  description: <div className='default'>Jogging costs only one action.</div>,
  level: 4,
  featType: "Common",
  trainingReqs: {
  level: 7,
  slots: 6,
  feats: [],
  stats: {
  spd: 14,
},
},
};

export const moving_target: FeatTSX = {
  name: "Moving Target",
  description: <div className='default'>You can move and dodge as a combined single action.</div>,
  level: 4,
  featType: "Common",
  trainingReqs: {
  level: 7,
  slots: 6,
  feats: [],
  stats: {
  spd: 14,
},
},
};

export const medic: FeatTSX = {
  name: "Medic",
  description: <div className='default'>Whenever you take a breather, you can attempt a <Sub skill="Medicine" /> check to heal a party member to full health. The difficulty of the check is equal to their missing health.</div>,
  level: 4,
  featType: "Common",
  trainingReqs: {
  level: 7,
  slots: 6,
  feats: [],
  stats: {
  int: 14,
},
},
};

export const stoic: FeatTSX = {
  name: "Stoic",
  description: <div className='default'>Whenever you take a breather, regain all your willpower.</div>,
  level: 4,
  featType: "Common",
  trainingReqs: {
  level: 7,
  slots: 6,
  feats: [],
  stats: {
  nst: 14,
},
},
};

export const party_animal: FeatTSX = {
  name: "Party Animal",
  description: <div className='default'>Whenever you take a breather, you and everyone in your party regains an additional 1d4 willpower.</div>,
  level: 4,
  featType: "Common",
  trainingReqs: {
  level: 7,
  slots: 6,
  feats: [],
  stats: {
  cha: 14,
},
},
};

export const blunt_cleave: FeatTSX = {
  name: "Blunt Cleave",
  description: <div className='default'>You can use the cleaving strike maneuver with weapons that deal <span style={{color: "#888"}}>Bludgeoning</span> damage.</div>,
  level: 5,
  featType: "Common",
  trainingReqs: {
  level: 9,
  slots: 5,
  feats: [],
  stats: {
  str: 15,
},
},
};

export const skull_crusher: FeatTSX = {
  name: "Skull-Crusher",
  description: <div className='default'>When making a heavy attack, the damage dice are added together instead of taking the maximum value.</div>,
  level: 5,
  featType: "Common",
  trainingReqs: {
  level: 9,
  slots: 8,
  feats: [],
  stats: {
  str: 15,
},
},
};

export const charge_through: FeatTSX = {
  name: "Charge Through",
  description: <div className='default'>When performing a shield charge, you can damage an additional enemy.</div>,
  level: 5,
  featType: "Common",
  trainingReqs: {
  level: 9,
  slots: 6,
  feats: [],
  stats: {
  str: 15,
},
},
};

export const wall_jump: FeatTSX = {
  name: "Wall Jump",
  description: <div className='default'>When you take the jump action next to a wall, your jump distance is doubled.</div>,
  level: 5,
  featType: "Common",
  trainingReqs: {
  level: 9,
  slots: 4,
  feats: ["leapfrog"],
  stats: {
  dex: 15,
},
},
};

export const adrenaline_rush: FeatTSX = {
  name: "Adrenaline Rush",
  description: <div className='default'>Gain +1 temporary willpower at the start of battle.</div>,
  level: 5,
  featType: "Common",
  trainingReqs: {
  level: 9,
  slots: 10,
  feats: [],
  stats: {
  spd: 15,
},
},
};

export const surge: FeatTSX = {
  name: "Surge",
  description: <div className='default'>You can expend 4 willpower to gain an action, once per turn.</div>,
  level: 5,
  featType: "Common",
  trainingReqs: {
  level: 9,
  slots: 10,
  feats: [],
  stats: {
  spd: 15,
},
},
};

export const walking_mountain: FeatTSX = {
  name: "Walking Mountain",
  description: <div className='default'>Your armor BC is added to your maximum willpower.</div>,
  level: 6,
  featType: "Common",
  trainingReqs: {
  level: 11,
  slots: 10,
  feats: [],
  stats: {
  str: 16,
},
},
};

export const double_dog: FeatTSX = {
  name: "Double Dog",
  description: <div className='default'>The willpower required to stay conscious (via the feats.that_dog feat) is reduced by one half (but cannot be reduced below 1).</div>,
  level: 6,
  featType: "Common",
  trainingReqs: {
  level: 11,
  slots: 10,
  feats: ["that_dog"],
  stats: {
  str: 16,
},
},
};

export const fleetfooted: FeatTSX = {
  name: "Fleetfooted",
  description: <div className='default'>Your first move action each turn no longer costs an action.</div>,
  level: 6,
  featType: "Common",
  trainingReqs: {
  level: 11,
  slots: 12,
  feats: [],
  stats: {
  spd: 16,
},
},
};

export const titan: FeatTSX = {
  name: "Titan",
  description: <div className='default'>Gain +1 willpower when an attack is blocked by your armor.</div>,
  level: 7,
  featType: "Common",
  trainingReqs: {
  level: 13,
  slots: 12,
  feats: [],
  stats: {
  str: 17,
},
},
};

export const steel_avalanche: FeatTSX = {
  name: "Steel Avalanche",
  description: <div className='default'>You can expend 2 willpower to add your armor BC to a two-handed melee weapon attack.</div>,
  level: 9,
  featType: "Common",
  trainingReqs: {
  level: 17,
  slots: 6,
  feats: [],
  stats: {
  str: 19,
},
},
};

export const dog_gone: FeatTSX = {
  name: "Dog Gone",
  description: <div className='default'>The willpower required to stay conscious (via the feats.that_dog feat) is reduced by one quarter instead of one half (but cannot be reduced below 1).</div>,
  level: 9,
  featType: "Common",
  trainingReqs: {
  level: 17,
  slots: 10,
  feats: ["double_dog"],
  stats: {
  str: 20,
},
},
};

export const bloodthirsty: FeatTSX = {
  name: "Bloodthirsty",
  description: <div className='default'>When you get a kill during a rage, you can expend 1 willpower to increase your rage level by 1.</div>,
  level: 2,
  featType: "Class",
  trainingReqs: {
  level: 3,
  slots: 3,
  feats: [],
  stats: {
  str: 12,
},
},
};

export const perseverance: FeatTSX = {
  name: "Perseverance",
  description: <div className='default'>Your rage sustains you in your darkest hour. Once per turn, when you take damage while below half hp, your rage level increases by 1.</div>,
  level: 3,
  featType: "Class",
  trainingReqs: {
  level: 5,
  slots: 4,
  feats: [],
  stats: {
  str: 13,
},
},
};

export const anger_management: FeatTSX = {
  name: "Anger Management",
  description: <div className='default'>The cost to rage is decreased from 3 to 2.</div>,
  level: 5,
  featType: "Class",
  trainingReqs: {
  level: 9,
  slots: 4,
  feats: [],
  stats: {
  cha: 15,
},
},
};

export const thunderin_tarnation: FeatTSX = {
  name: "Thunderin' Tarnation",
  description: <div className='default'>magic is stupid, but you can make it go away by yelling at it. Enemies which fail their saving throw against your roar may not cast spells on their next turn, and lose concentration on any spells they have already cast.</div>,
  level: 6,
  featType: "Class",
  trainingReqs: {
  level: 11,
  slots: 8,
  feats: [],
  stats: {
  nst: 16,
},
},
};

export const armor_of_god: FeatTSX = {
  name: "Armor of God",
  description: <div className='default'>Add half your armor BC when making saving throws against spells.</div>,
  level: 5,
  featType: "Class",
  trainingReqs: {
  level: 9,
  slots: 12,
  feats: [],
  stats: {
  nst: 15,
},
},
};

export const immortal: FeatTSX = {
  name: "Immortal",
  description: <div className='default'>Your armor BC is added to your</div>,
  level: 2,
  featType: "Class",
  trainingReqs: {
  level: 3,
  slots: 4,
  feats: [],
  stats: {
  str: 12,
},
},
};

export const praetorian: FeatTSX = {
  name: "Praetorian",
  description: <div className='default'>You no longer have disadvantage to <Sub skill="Mobility" /> checks while wearing armor.</div>,
  level: 4,
  featType: "Class",
  trainingReqs: {
  level: 7,
  slots: 4,
  feats: [],
  stats: {
  str: 14,
},
},
};

export const samurai: FeatTSX = {
  name: "Samurai",
  description: <div className='default'>The penalty to maximum DC when wearing heavy armor is reduced by 2.</div>,
  level: 5,
  featType: "Class",
  trainingReqs: {
  level: 9,
  slots: 4,
  feats: [],
  stats: {
  str: 15,
},
},
};

export const templar: FeatTSX = {
  name: "Templar",
  description: <div className='default'>Ignore disadvantage on stealth checks while wearing full plate.</div>,
  level: 6,
  featType: "Class",
  trainingReqs: {
  level: 11,
  slots: 6,
  feats: [],
  stats: {
  str: 16,
},
},
};

export const crazy_eights: FeatTSX = {
  name: "Crazy Eights",
  description: <div className='default'>Whenever you roll an 8 on a d20, something unexpected happens. It is what it is.</div>,
  level: 2,
  featType: "Class",
  trainingReqs: {
  level: 3,
  slots: 4,
  feats: [],
  stats: {
  cha: 12,
},
},
};

export const lucky_sevens: FeatTSX = {
  name: "Lucky Sevens",
  description: <div className='default'>When you roll a seven on a d20, it counts as a critical.</div>,
  level: 4,
  featType: "Class",
  trainingReqs: {
  level: 7,
  slots: 12,
  feats: [],
  stats: {
  cha: 14,
},
},
};

const allFeats: FeatTSX[] = [stalwart, deft, eager, prodigy, jack_of_all_trades, specialist, hot_tempered, warthog, early_riser, night_owl, flagellant, take_backsies, arcane_apprentice, fast_learner, sixth_sense, mana_regeneration, steady_hands, war_mage, march, arcane_adept, well_rounded, impetuous, savant, war_criminal_mage, erudite, barrage, sneakspell, arcane_master, first_strike, master_of_ceremonies, parry, parkour, leapfrog, fast_walker, pensive, sensitive, jolly, billy_goat, deep_breath, pratfaller, vertical_escape, dodge_roll, freestyler, blitzkrieg, triage, charlatan, loremaster, cleaving_strike, shield_bash, shield_charge, haft_strike, dual_wielder, stop_drop_and_roll, riposte, momentum, friend_in_need, spellsword, bookworm, dungeoneer, prankster, exceptional, guardian, that_dog, come_hither, marathon, moving_target, medic, stoic, party_animal, blunt_cleave, skull_crusher, charge_through, wall_jump, adrenaline_rush, surge, walking_mountain, double_dog, fleetfooted, titan, steel_avalanche, dog_gone, bloodthirsty, perseverance, anger_management, thunderin_tarnation, armor_of_god, immortal, praetorian, samurai, templar, crazy_eights, lucky_sevens]

export const feats = new Source<FeatTSX>(
	"Feats",
	allFeats,
	feat => feat.name,
	(item, text) => `<AppendixLink appendix={2} target={item.name}>${text ?? item.name}</InternalLink>`
);