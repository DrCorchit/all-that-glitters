//Auto-generated file (do not modify)
import Sub from "../components/Sub";
import Tooltip from "../components/Tooltip";
export default {
  name: "Ranger",
  description: <>The ranger is someone—a farmer, a hunter, or maybe a lumberjack—who lives and works on the edge of civilization and has acquired a deep knowledge of nature and survival. They may have learned to hunt or track prey, tame beasts, or construct traps as a result of living in the wilderness.</>,
  backstoryPrompts: ["Have you always lived in the wild, or did you move there", "Do you see nature as nurturing or threatening -- or both?", "How did you meet your animal companion?", "What made you leave your previous life and start adventuring?"],
  coreAbilityName: "Animal Companion",
  coreAbilityDescription: <>TODO</>,
  levelingBonuses: {
    1: <span className="default">gain +2 to <Sub attr="NST"/> and <Sub attr="DEX"/>, and proficiency in <Sub skill="Survival" /></span>,},
  startingEquipment: [
    { contents: [<>A suit of <Tooltip tip={"Leather Armor"}>Composed of boiled leather. Worn by knaves.</Tooltip></>, <>Any standard weapon</>, <>A <Tooltip tip={"Dagger"}>A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.</Tooltip> and two <Tooltip tip={"Hatchet"}>A small axe suitable for throwing</Tooltip>s</>] },
    { name: <b>An adventurer's pack, containing:</b>, contents: [<>30 + 1d100 gold</>, <>3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip> and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip></>, <>A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>, <Tooltip tip={"Blanket &amp; Pillow"}>Soft and warm. An adventurer need not forsake <i>all</i> comfort.</Tooltip></>, <>Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip></>, <></>] },],
}