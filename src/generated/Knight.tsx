//Auto-generated file (do not modify)
import Sub from "../components/Sub";
import Tooltip from "../components/Tooltip";
export default {
  name: "Knight",
  description: <>The knight is a low-ranking noble with formal combat training. Although they may be called to fight in battle, a knight’s primary purpose is to serve for the glory of their Lord or Lady, to whom they have sworn an oath of fealty. Many knights are also accompanied by a squire, a young knight in training who may carry their lord’s banner or help them don and doff their armor. On the battlefield, a knight is a magnificent sight, clad in expensive steel plate armor and with their lord’s ensignia emblazoned on their shield. However, some knights forgo a shield altogether, preferring a heavier two-handed weapon. Either way, knights train extensively and are rarely caught flat-footed, even when out of armor</>,
  backstoryPrompts: ["Did you train as a page or a squire before becoming a knight?", "Are you proud of your country and your liege, or have you become disillusioned?", "Was your oath of fealty inspired by love, respect, or political convenience?", "How far back can you trace your lineage?", "What made you leave your previous life and start adventuring?"],
  alignment: "Lawful",
  coreAbilityName: "Shining Armor",
  coreAbilityDescription: <>You have sworn an oath to a nobleman or lady, to protect them with your life and to fight for them in battle. In return, they have provided you with a fine suit of chainmail, and several high quality steel weapons.</>,
  limitations: <>Deficient in sorcery.</>,
  levelingBonuses: {
    1: <span className="default">gain expertise in defense.</span>,
    2: <span className="default">learn any two abilities from the following list: <ul><li>maneuvers.parry</li><li>maneuvers.shield_bash</li><li>feats.lancer</li><li>feats.defender</li></ul></span>,
    3: <span className="default">your liege gifts you an improved suit of armor. You may choose a suit of <Tooltip tip={"Half Plate Armor"}>Plate armor, but with nonessentials stripped away to spare the cost.</Tooltip> or <Tooltip tip={"Splinted Chainmail"}>Chainmail with vertical splints to shore up defense of the limbs.</Tooltip>.</span>,
    4: <span className="default">The dexterity and speed caps on your armor are increased by 1.</span>,
    5: <span className="default">Learn 2 combat maneuvers</span>,
    6: <span className="default">in recognition of your glorious and heroic conduct, your liege grants you a set of steel plate armor.</span>,
    7: <span className="default">You ignore disadvantage on mobility checks while wearing half plate armor, and ignore disadvantage on stealth checks while wearing full plate.</span>,
    8: <span className="default">The dexterity and speed caps on your armor are further increased, from 1 to 2.</span>,
    9: <span className="default">when you fail a saving throw against a spell, you can expend willpower (equal to the amount by which you failed the save) to instead succeed the save.</span>,
    12: <span className="default">The dexterity and speed caps on your armor are further increased, from 2 to 3.</span>,
    16: <span className="default">The dexterity and speed caps on your armor are further increased, from 3 to 4.</span>,},
  startingEquipment: [
    { contents: [<>A set of steel <Tooltip tip={"Chainmail"}>Full mail. Flexible and effective.</Tooltip></>, <>An arming sword (<Tooltip tip={"Shortsword"}>A shorter sword of lighter weight, making an ideal sidearm. Similar to the arming sword and gladius.</Tooltip>)</>, <>A <Tooltip tip={"Shield"}>An ordinary shield. Allows shield bash.</Tooltip></>, <>A <Tooltip tip={"Lantern"}>Requires oil. Emits bright light to a radius of 30 feet when the hood is removed.</Tooltip>, with one <Tooltip tip={"Flask of Oil"}>Contains approximately one pint. Fuels a lantern for 12 hours.</Tooltip>.</>, <>A <Tooltip tip={"100 Foot Rope"}>Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.</Tooltip></>] },
    { name: <b>A primary weapon, of one of the following types:</b>, contents: [<>A bastard sword</>, <>A longsword</>, <>A bearded axe</>, <>A warhammer</>] },
    { name: <b>A secondary weapon, of one of the following types:</b>, contents: [<>A <Tooltip tip={"Battle Axe"}>An axe especially designed for combat</Tooltip></>, <>A falchion (<Tooltip tip={"Broadsword"}>A sword for slashing, of a category including the cutlass, machete, falchion, and scimitar.</Tooltip>)</>, <>An <Tooltip tip={"Estoc"}>A soldier’s thrusting sword for piercing mail. In the right hands, can be used to ignore chainmail BC.</Tooltip></>, <>A <Tooltip tip={"Mace"}>A martial weapon for crushing armor.</Tooltip></>, <>A <Tooltip tip={"Morningstar"}>A martial weapon, spiked for piercing mail. Damage becomes bludgeoning versus plate armor.</Tooltip></>, <>A <Tooltip tip={"Rapier"}>A rapscallion’s sword—or a gentleman’s...</Tooltip></>] },
    { name: <b>An adventurer's pack, containing:</b>, contents: [<>2d100 gold</>, <>7 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip> and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip></>, <>A <Tooltip tip={"Tent"}>Suitable for two adventurers, or one royal highness.</Tooltip></>, <>Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip></>, <>One set of <Tooltip tip={"Formal Wear"}>Appropriate for appearances before a noble or royal court. +1 to performance checks.</Tooltip></>] },],
}