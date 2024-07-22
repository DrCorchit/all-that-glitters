//Auto-generated file (do not modify)
import Sub from "../components/Sub";
import Tooltip from "../components/Tooltip";
export default {
  name: "Assassin",
  description: "An assassin’s art is a quick and sure death, delivered without remorse or hesitation. Typically employed by a political state or criminal syndicate, assassins quickly learn to make use of any weapon available, including the weapons of their own targets. This makes them extremely versatile adventurers, able to adapt to nearly any combat situation as the need arises.",
  backstoryPrompts: ["Who has hired you in the past?", "How many targets have you killed?", "Do you remember your first kill?", "How did you acquire your unique skillset?", "Does your character struggle with any form of guilt?", "What made you leave your previous life and start adventuring?"],
  alignment: "Non-Good",
  coreAbilityName: "Assassination",
  coreAbilityDescription: <>You may expend 3 willpower to mark a target for assassination. The next time you score a critical hit on that target, deal an additional 15 damage.</>,
  limitations: <>Due to their extremely specialized skillset, assassins have a deficiency in two of the following three skills:  <Sub skill="Nature" /> ,  <Sub skill="Defense" /> , or  <Sub skill="Survival" /> .</>,
  levelingBonuses: <>
    <p>At level 1, gain proficiency in two out of these three skills:  <Sub skill="Martial Arts" /> ,  <Sub skill="Initiative" /> , and  <Sub skill="Accuracy" /> .</p>
    <p>At level 2, when you initiate combat with an attack, gain advantage on the  <Sub skill="Initiative" />  roll. You begin combat with an extra action.</p></>,
  startingEquipment: <>
  <ul>
    <li>A set of  <Tooltip tip={"Leather Armor"}>Composed of boiled leather. Worn by knaves.</Tooltip> .</li>
    <li>Any two  <Tooltip tip={"Nimble"}>Dexterity can be used to provide the weapon’s damage, instead of strength.</Tooltip>  weapons</li>
    <li>A  <Tooltip tip={"Buckler"}>A small shield. Allows shield bash.</Tooltip> </li>
  </ul>
  <b>Concealed on their person:</b>:
  <ul>
    <li>Any two small weapons</li>
    <li>A vial of neurotoxic poison</li>
    <li>A dozen  <Tooltip tip={"Throwing Knives"}>Knives specially designed to be hurled.</Tooltip>  or  <Tooltip tip={"Shuriken"}>A thrown, spinning weapon from a distant land.</Tooltip> s</li>
    <li>A dozen  <Tooltip tip={"Lockpick"}>For opening locks without the key. Not sold by decent folk.</Tooltip> s</li>
  </ul>
  <b>An adventurer's pack, containing:</b>:
  <ul>
    <li>2d100 gold</li>
    <li>3 days  <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>  and a  <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip> .</li>
    <li>A  <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip> </li>
    <li>Two sets of  <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip> .</li>
    <li>One set of  <Tooltip tip={"Formal Wear"}>Appropriate for appearances before a noble or royal court. +1 to performance checks.</Tooltip> </li>
    <li>A  <Tooltip tip={"Disguise Kit"}>For changing one's appearance. </Tooltip> </li>
    <li>A pair of  <Tooltip tip={"Manacles"}>For restraining the unruly or unwilling. Breakable by a successful DT 20 strength check.</Tooltip> </li>
    <li>A  <Tooltip tip={"100 Foot Rope"}>Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.</Tooltip>  and  <Tooltip tip={"Grappling Hook"}>For hooking and pulling, or escaping. Allows <i>Vertical Escape</i> and <i>Come Hither</i>.</Tooltip> </li>
  </ul></>,
}