//Auto-generated file (do not modify)
import Sub from "../components/Sub";
import Tooltip from "../components/Tooltip";
export default {
  name: "Mercenary",
  description: <>The mercenary eschews lofty aspirations of honor and glory and fights almost exclusively for coin. Although they have a cutthroat reputation, there is a simple pragmatism to their motives. Mercenaries fight with whatever weapons and training they can purchase, and do not limit themselves to any particular discipline.</>,
  backstoryPrompts: ["How did you acquire your combat skill?", "Do you take pride in your work?", "Do you fight for money, for the excitement of battle, or something else?", "What made you leave your previous life and start adventuring?"],
  alignment: "Non-Good",
  coreAbilityName: "Mercenary Contract",
  coreAbilityDescription: <>You have associations with a mercenaries guild, which connects individuals of martial prowess with clients in need of muscle. This mercenary guild positions you well to take on mercenary contracts and meet trainers for various skills: defense, martial arts, and even sorcery.</>,
  levelingBonuses: {
    1: <span className="default">gain +2 to <Sub attr="STR"/>, +1 to <Sub attr="DEX"/> and <Sub attr="INT"/>.</span>,},
  startingEquipment: [
    { contents: [<>A set of <Tooltip tip={"Breastplate"}>Robust protection for the vital regions.</Tooltip>.</>, <>Any standard weapon</>, <>Any small weapon</>, <>A <Tooltip tip={"Buckler"}>A small shield. Allows shield bash.</Tooltip></>] },
    { name: <b>An adventurer's pack, containing:</b>, contents: [<>2d100 gold</>, <>3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>.</>, <>A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>, <Tooltip tip={"Blanket &amp; Pillow"}>Soft and warm. An adventurer need not forsake <i>all</i> comfort.</Tooltip></>, <>Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>.</>, <>A pair of <Tooltip tip={"Manacles"}>For restraining the unruly or unwilling. Breakable by a successful DT 20 strength check.</Tooltip></>, <>A <Tooltip tip={"100 Foot Rope"}>Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.</Tooltip></>] },
    { name: <b>Any one of the following:</b>, contents: [<>A second standard weapon</>, <>A dozen <Tooltip tip={"Throwing Knives"}>Knives specially designed to be hurled.</Tooltip> and a <Tooltip tip={"Grappling Hook"}>For hooking and pulling, or escaping. Allows <i>Vertical Escape</i> and <i>Come Hither</i>.</Tooltip></>, <>A <Tooltip tip={"Hand Cannon"}>A heavy pistol, for those strong enough to wield it. Light modifier does not apply if strength is less than 16.</Tooltip> and ten bullets.</>, <>A </>] },],
}