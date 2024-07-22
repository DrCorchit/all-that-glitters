//Auto-generated file (do not modify)
import Sub from "../components/Sub";
import Tooltip from "../components/Tooltip";
export default {
	name: "Druid",
	description:
		"Whether a shaman from a remote tribe or an isolated hermit, a druid reveres, worships, and protects nature. Nature rewards this special connection by allowing the druid to practice unique and powerful forms of magic, such as transforming into various animals.",
	backstoryPrompts: [
		"How did you become a druid?",
		"Are you connected to a formal druid circle, or do you work on your own?",
		"How would you describe your relationship with nature?",
		"What does it take to cultivate such a close connection with nature?",
		"What made you leave your previous life and start adventuring?",
	],
	alignment: "Non-Evil",
	coreAbilityName: "Wildshape",
	coreAbilityDescription: (
		<>Wildshape. You have the ability to transform into animals, expending an amount of AP dependent on the animal chosen to do so.</>
	),
	limitations: (
		<>
			As a druid, you begin with deficiency in two of these three skills: <Sub skill='Defense' /> , <Sub skill='Literacy' /> ,{" "}
			<Sub skill='Legerdemain' /> .
		</>
	),
	levelingBonuses: (
		<>
			<p>
				At level 1, gain +2 to <Sub attr='CHA' /> and <Sub attr='NST' /> , and proficiency in <Sub skill='Medicine' /> and <Sub skill='Survival' /> .
			</p>
		</>
	),
	startingEquipment: (
		<>
			<ul>
				<li>
					A set of{" "}
					<Tooltip tip={"Druid's Robes"}>
						Rugged robes that never wear thin or lose color. Signifies membership in a druidic circle, and grants advantage on medicine and nature
						ability checks.
					</Tooltip>{" "}
				</li>
				<li>
					A <Tooltip tip={"Magical Staff"}>Infused with deep, yet subtle magic. Favored by druids, wizards and prophets.</Tooltip>{" "}
				</li>
				<li>A pair of sandals or moccasins</li>
				<li>
					A wooden <Tooltip tip={"Club"}>Any hefty stick or chair leg will do.</Tooltip>{" "}
				</li>
				<li>
					A <Tooltip tip={"Talisman"}>A blessed or holy artifact designed to nullify the trickery of evil spirits.</Tooltip>{" "}
				</li>
			</ul>
			<b>An adventurer's pack, containing</b>:
			<ul>
				<li>1d20 gold</li>
				<li>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
				</li>
				<li>
					A calabash, usable as a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>{" "}
				</li>
				<li>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>{" "}
				</li>
				<li>
					1 set of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>{" "}
				</li>
				<li>
					A{" "}
					<Tooltip tip={"Medical Kit"}>
						Includes bandages, sutures, and antiseptic. +2 to medicine checks while in inventory, or may be used to provide 2d6 healing during a short
						rest.
					</Tooltip>{" "}
				</li>
			</ul>
		</>
	),
};
