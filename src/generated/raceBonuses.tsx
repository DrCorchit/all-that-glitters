//Auto-generated file (do not modify)
import React from 'react'
import {TSXDirectory} from "../utils/tsxDirectory"
import Sub from "../components/Sub"

export const human = <div className="default">Human characters begin with +1 to two attributes, and -1 to an attribute. They also begin with proficiency in a skill of their choice.</div>

export const elf = <div className="default">All elven characters suffer a -1 penalty to <Sub attr="STR"/>, and gain bonuses depending on their bloodline. Those of the royal line gain +2 <Sub attr="INT"/> and knowledge of a level 1 astrology or elemental spell, plus proficiency in <Sub skill="Literacy" />. However, they also have deficiency in <Sub skill="Survival" />. Members of the common line gain +2 <Sub attr="DEX"/> and proficiency in <Sub skill="Nature" /> and <Sub skill="Accuracy" />, but suffer deficiency in <Sub skill="Defense" />. Drow gain +2 <Sub attr="CHA"/> and proficiency in perception and <Sub skill="Stealth" />, at the cost of -1 to <Sub attr="NST"/> and deficiency in <Sub skill="Nature" />. Drow also have the gift of darkvision, allowing them to see normally in dim light.</div>

export const dwarf = <div className="default">Despite their unusual habits and short stature, dwarves are actually a fairly well balanced race that can excel in many roles. Dwarves gain +1 <Sub attr="STR"/> and +1 <Sub attr="CHA"/> at the cost of -2 <Sub attr="SPD"/>, and choose an additional +1 in <Sub attr="STR"/> or <Sub attr="CHA"/>. Also, dwarves have a keen sense for gold and have advantage on <Sub skill="Perception" /> and <Sub skill="Persuasion" /> checks when searching for treasure or bartering with merchants. All dwarves have proficiency in <Sub skill="Defense" />. Dwarves make particularly fearsome warriors, but are a solid choice in many other roles.</div>

export const halfling = <div className="default">Halflings tend to be unbalanced characters, having a -2 penalty to <Sub attr="STR"/> and a -1 penalty to <Sub attr="SPD"/>. They make up for this with a +2 to DEX, and another +2 to <Sub attr="INT"/>, <Sub attr="CHA"/>, or <Sub attr="NST"/>. All halflings have proficiency in <Sub skill="Folklore" />, but urban halflings have proficiency in <Sub skill="Mobility" /> while rural halflings have proficiency in <Sub skill="Nature" />. They excel as mages, naturalists, or renegades, but struggle as warriors.</div>

export const orc = <div className="default">Orcs gain +2 to <Sub attr="STR"/> and +1 to either <Sub attr="CHA"/> or <Sub attr="NST"/>, at the cost of -1 to <Sub attr="DEX"/> and -1 <Sub attr="INT"/>. They have proficiency in <Sub skill="Folklore" /> and <Sub skill="Survival" />. Above all, they make excellent warriors.</div>

export const tiefling = <div className="default">Tieflings gain +2 to <Sub attr="CHA"/> and +1 to another attribute, at the cost of -2 to another attribute. They possess the gift of darkvision, and can see in total darkness to a range of 3 yards, or dim light to about 30 yards. They have proficiency in two of <Sub skill="Performance" />, <Sub skill="Medicine" /> or <Sub skill="Perception" />.</div>

export const aarakocra = <div className="default">Aarakocra gain a +2 bonus to <Sub attr="SPD"/>, but -1 to <Sub attr="STR"/>. All aarakocra can fly (when not wearing armor) and are immune to fall damage. Raptors gain +1 <Sub attr="STR"/> and proficiency in <Sub skill="Perception" />, while songbirds gain +1 <Sub attr="DEX"/> and proficiency in <Sub skill="Performance" />.</div>

export const saurid = <div className="default">Saurids gain +2 to <Sub attr="STR"/> and <Sub attr="SPD"/>, at the cost of -2 <Sub attr="INT"/> and -1 <Sub attr="CHA"/>. They possess the gift of darkvision, able to see in near total darkness. They have deficiency in <Sub skill="Literacy" /> but may take proficiency in two out of <Sub skill="Folklore" />, <Sub skill="Stealth" />, or <Sub skill="Survival" />.</div>

export const raceBonuses = new TSXDirectory<React.JSX.Element>();

raceBonuses.register("human", human)

raceBonuses.register("elf", elf)

raceBonuses.register("dwarf", dwarf)

raceBonuses.register("halfling", halfling)

raceBonuses.register("orc", orc)

raceBonuses.register("tiefling", tiefling)

raceBonuses.register("aarakocra", aarakocra)

raceBonuses.register("saurid", saurid)