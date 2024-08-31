//Auto-generated file (do not modify)
import {TSXDirectory} from "../utils/tsxDirectory";
import {AppendixLink} from "../components/InternalLink";
import Sub from "../components/Sub";
import Tooltip from "../components/Tooltip";
import {Inventory} from "../concepts/combatClass";

export const assassin = {
	loose: [
		<>
			A set of <Tooltip tip={"Leather Armor"}>Composed of boiled leather. Worn by knaves.</Tooltip>.
		</>,
		<>
			Any two{" "}
			<Tooltip tip={"Nimble"}>Dexterity can be used to provide the weapon’s damage, instead of strength.</Tooltip>{" "}
			weapons
		</>,
		<>
			A <Tooltip tip={"Buckler"}>A small shield. Allows shield bash.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>Concealed on their person:</>,
			contents: [
				<>Any two small weapons</>,
				<>A vial of neurotoxic poison</>,
				<>
					A dozen <Tooltip tip={"Throwing Knives"}>Knives specially designed to be hurled.</Tooltip> or{" "}
					<Tooltip tip={"Shuriken"}>A thrown, spinning weapon from a distant land.</Tooltip>s
				</>,
				<>
					A dozen <Tooltip tip={"Lockpick"}>For opening locks without the key. Not sold by decent folk.</Tooltip>s
				</>,
			],
		},
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>2d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>.
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>.
				</>,
				<>
					One set of{" "}
					<Tooltip tip={"Formal Wear"}>
						Appropriate for appearances before a noble or royal court. +1 to performance checks.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Disguise Kit"}>For changing one's appearance. </Tooltip>
				</>,
				<>
					A pair of{" "}
					<Tooltip tip={"Manacles"}>
						For restraining the unruly or unwilling. Breakable by a successful DT 20 strength check.
					</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"100 Foot Rope"}>
						Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.
					</Tooltip>{" "}
					and{" "}
					<Tooltip tip={"Grappling Hook"}>
						For hooking and pulling, or escaping. Allows <i>Vertical Escape</i> and <i>Come Hither</i>.
					</Tooltip>
				</>,
			],
		},
	],
};

export const barbarian = {
	loose: [
		<>
			A set of <Tooltip tip={"Quilted Armor"}>A homespun gambeson. A sure sign of a hooligan.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>One of the following, as a primary weapon:</>,
			contents: [
				<>
					A{" "}
					<Tooltip tip={"Longsword"}>
						A knight’s two-handed sword. May be upgraded by a blacksmith to gain <i>Sharp</i> for 150 gold.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Greataxe"}>A large axe well suited to those possessing great brawn</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Maul"}>A greathammer, for smashing through armor.</Tooltip>
				</>,
				<>
					Two standard weapons with the{" "}
					<Tooltip tip={"Light"}>
						The weapon can be used alongside a greatshield, or dual wielded alongside another light weapon.
					</Tooltip>{" "}
					property.
				</>,
			],
		},
		{
			label: <>Any two of the following small weapons:</>,
			contents: [
				<>
					A <Tooltip tip={"Cleaver"}>A heavy knife for cutting meat.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Club"}>Any hefty stick or chair leg will do.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Dagger"}>
						A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Hatchet"}>A small axe suitable for throwing</Tooltip>
				</>,
			],
		},
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>30 + 1d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>.
				</>,
				<>
					2 bottles of <Tooltip tip={"Mead, Bottle of"}>Made from honey. Sweeter than beer.</Tooltip>
				</>,
				<>
					A bottle of{" "}
					<Tooltip tip={"Moonshine, Flask of"}>
						Extremely strong alcohol. Lacks the royal stamp, indicating that is has been manufactured illegally.
					</Tooltip>
				</>,
			],
		},
	],
};

export const crusader = {
	loose: [
		<>
			A steel <Tooltip tip={"Hauberk"}>A chainmail shirt, as worn by rank-and-file infantry.</Tooltip>.
		</>,
		<>A small weapon</>,
		<>
			A holy symbol of your deity, which functions as a{" "}
			<Tooltip tip={"Talisman"}>A blessed or holy artifact designed to nullify the trickery of evil spirits.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>A weapon of one of the following types:</>,
			contents: [
				<>Any great weapon or polearm</>,
				<>
					Any standard weapon and a <Tooltip tip={"Shield"}>An ordinary shield. Allows shield bash.</Tooltip>
				</>,
				<>
					Any light weapon and a{" "}
					<Tooltip tip={"Greatshield"}>An extraordinarily large shield. Allows shield charge.</Tooltip>
				</>,
			],
		},
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>30 + 1d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>,{" "}
					<Tooltip tip={"Blanket &amp; Pillow"}>
						Soft and warm. An adventurer need not forsake <i>all</i> comfort.
					</Tooltip>
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>.
				</>,
				<>
					One set of{" "}
					<Tooltip tip={"Religious Vestments"}>Distinguishing attire of a priest, cleric, or similar ilk.</Tooltip>
				</>,
				<>
					3 <Tooltip tip={"Torch"}>Lasts 4 hours</Tooltip>es
				</>,
				<>
					A <Tooltip tip={"Candle"}>Lasts 1 hour; emits only dim light.</Tooltip> and a flask of{" "}
					<Tooltip tip={"Holy Water"}>
						Contains 1 cup of water blessed by a priest. Deals 3d8 holy damage when thrown.
					</Tooltip>
				</>,
			],
		},
		{
			label: <>One of the following items:</>,
			contents: [
				<>
					A{" "}
					<Tooltip tip={"Ram"}>
						For when lockpicks fail. Allows 2-4 adventurers to combine their strength score when breaking down a door.
					</Tooltip>{" "}
					(Gain +1 <Sub attr='STR' />)
				</>,
				<>
					A{" "}
					<Tooltip tip={"Musical Instrument"}>
						An instrument such as a guitar, banjo, lute, or dulcimer. Not included: the skill to play it.
					</Tooltip>{" "}
					(Gain proficiency in <Sub skill='Performance' />)
				</>,
				<>
					A <Tooltip tip={"Hand Crossbow"}>A miniature crossbow. Widely considered a gimmick.</Tooltip> and{" "}
					<Tooltip tip={"Quiver"}>Holds up to 24 arrows or crossbow bolts.</Tooltip> with two dozen arrows. (Gain
					proficiency in <Sub skill='Accuracy' />)
				</>,
				<>
					A set of <Tooltip tip={"Climbing Gear"}>Includes 10 pitons, 3 carabiners, and a harness</Tooltip>. (Gain
					proficiency in <Sub skill='Mobility' />)
				</>,
			],
		},
	],
};

export const druid = {
	loose: [
		<>
			A set of{" "}
			<Tooltip tip={"Druid's Robes"}>
				Rugged robes that never wear thin or lose color. Signifies membership in a druidic circle, and grants advantage
				on medicine and nature ability checks.
			</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Magical Staff"}>
				Infused with deep, yet subtle magic. Favored by druids, wizards and prophets.
			</Tooltip>
		</>,
		<>A pair of sandals or moccasins</>,
		<>
			A wooden <Tooltip tip={"Club"}>Any hefty stick or chair leg will do.</Tooltip>
		</>,
		<>
			A <Tooltip tip={"Talisman"}>A blessed or holy artifact designed to nullify the trickery of evil spirits.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing</>,
			contents: [
				<>1d20 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>
				</>,
				<>
					A calabash, usable as a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>
				</>,
				<>
					1 set of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Medical Kit"}>
						Includes bandages, sutures, and antiseptic. +2 to medicine checks while in inventory, or may be used to
						provide 2d6 healing during a short rest.
					</Tooltip>
				</>,
			],
		},
	],
};

export const hermit = {
	loose: [
		<>
			A set of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
		</>,
		<>
			A <Tooltip tip={"Talisman"}>A blessed or holy artifact designed to nullify the trickery of evil spirits.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>1d20 gold</>,
				<>
					1 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>
				</>,
				<>
					1 set of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					3 <Tooltip tip={"Torch"}>Lasts 4 hours</Tooltip>es
				</>,
				<>
					A{" "}
					<Tooltip tip={"100 Foot Rope"}>
						Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Map"}>Conveys a general sense of surrounding terrain.</Tooltip> and{" "}
					<Tooltip tip={"Compass"}>Always points north, except in the presence of magical fields.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Frying Pan"}>
						For frying eggs. Oft improvised as a weapon of housewives, against intruders.
					</Tooltip>{" "}
					and a{" "}
					<Tooltip tip={"Tinderbox"}>
						For starting fire. If one is in your possession, you may light a torch, candle, or lantern as an action.
					</Tooltip>
				</>,
			],
		},
		{
			label: <>Two of the following:</>,
			contents: [
				<>
					A <Tooltip tip={"Padlock &amp; Key"}>For securing valuables, or denying entry.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Whetstone"}>For sharpening knives and blades.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Dog Whistle"}>
						Dogs may be trained to respond to its signal in a specific way. Typical commands: come, attack, heel, or
						fetch.
					</Tooltip>
				</>,
				<>
					A pet, such as a{" "}
					<AppendixLink appendix={6} target='Cat'>
						Cat
					</AppendixLink>
					,{" "}
					<AppendixLink appendix={6} target='Dog'>
						Dog
					</AppendixLink>
					,{" "}
					<AppendixLink appendix={6} target='Parrot'>
						Parrot
					</AppendixLink>
					, or{" "}
					<AppendixLink appendix={6} target='Monkey'>
						Monkey
					</AppendixLink>
				</>,
				<>
					A bottle of{" "}
					<Tooltip tip={"Moonshine, Flask of"}>
						Extremely strong alcohol. Lacks the royal stamp, indicating that is has been manufactured illegally.
					</Tooltip>
				</>,
				<>
					Two{" "}
					<Tooltip tip={"Hunting Trap"}>
						Reusable. For trapping small animals, such as rabbits, mice, or gophers.
					</Tooltip>
					s
				</>,
			],
		},
	],
};

export const inquisitor = {
	loose: [
		<>
			A set of <Tooltip tip={"Brigandine"}>Metal plates riveted together beneath leather. Cheaper than mail.</Tooltip>.
		</>,
		<>Any standard weapon.</>,
		<>
			A{" "}
			<Tooltip tip={"Dagger"}>
				A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.
			</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Lantern"}>
				Requires oil. Emits bright light to a radius of 30 feet when the hood is removed.
			</Tooltip>{" "}
			with <Tooltip tip={"Flask of Oil"}>Contains approximately one pint. Fuels a lantern for 12 hours.</Tooltip>
		</>,
		<>
			A <Tooltip tip={"Net"}>For catching and restraining.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>2d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Tent"}>Suitable for two adventurers, or one royal highness.</Tooltip> with a{" "}
					<Tooltip tip={"Blanket &amp; Pillow"}>
						Soft and warm. An adventurer need not forsake <i>all</i> comfort.
					</Tooltip>
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					One set of{" "}
					<Tooltip tip={"Religious Vestments"}>Distinguishing attire of a priest, cleric, or similar ilk.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Censer"}>
						For the ceremonial burning of incense. Infused with magic of a theurgical sort.
					</Tooltip>{" "}
					and{" "}
					<Tooltip tip={"Incense"}>
						1 pound of sweet smelling incense. An indispensable component of theurgical rituals.
					</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Talisman"}>
						A blessed or holy artifact designed to nullify the trickery of evil spirits.
					</Tooltip>
				</>,
				<>
					A pair of{" "}
					<Tooltip tip={"Manacles"}>
						For restraining the unruly or unwilling. Breakable by a successful DT 20 strength check.
					</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"100 Foot Rope"}>
						Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.
					</Tooltip>
				</>,
			],
		},
		{
			label: <>One of the following:</>,
			contents: [
				<>
					A{" "}
					<Tooltip tip={"Crowbar"}>Invented by workmen, for prying. A favorite of thieves and hoodlums galore.</Tooltip>{" "}
					and a <Tooltip tip={"Ladder"}>10 foot, when unfolded. Holds up to 300 pounds.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Hand Crossbow"}>A miniature crossbow. Widely considered a gimmick.</Tooltip> and a{" "}
					<Tooltip tip={"Quiver"}>Holds up to 24 arrows or crossbow bolts.</Tooltip> with 24 bolts
				</>,
				<>
					A <Tooltip tip={"Spyglass"}>Allows viewing distant objects at 4x magnification.</Tooltip> and a{" "}
					<Tooltip tip={"Map"}>Conveys a general sense of surrounding terrain.</Tooltip>
				</>,
			],
		},
	],
};

export const knight = {
	loose: [
		<>
			A set of steel <Tooltip tip={"Chainmail"}>Full mail. Flexible and effective.</Tooltip>
		</>,
		<>
			An arming sword (
			<Tooltip tip={"Shortsword"}>
				A shorter sword of lighter weight, making an ideal sidearm. Similar to the arming sword and gladius.
			</Tooltip>
			)
		</>,
		<>
			A <Tooltip tip={"Shield"}>An ordinary shield. Allows shield bash.</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Lantern"}>
				Requires oil. Emits bright light to a radius of 30 feet when the hood is removed.
			</Tooltip>
			, with one <Tooltip tip={"Flask of Oil"}>Contains approximately one pint. Fuels a lantern for 12 hours.</Tooltip>.
		</>,
		<>
			A{" "}
			<Tooltip tip={"100 Foot Rope"}>
				Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.
			</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>A primary weapon, of one of the following types:</>,
			contents: [<>A bastard sword</>, <>A longsword</>, <>A bearded axe</>, <>A warhammer</>],
		},
		{
			label: <>A secondary weapon, of one of the following types:</>,
			contents: [
				<>
					A <Tooltip tip={"Battle Axe"}>An axe especially designed for combat</Tooltip>
				</>,
				<>
					A falchion (
					<Tooltip tip={"Broadsword"}>
						A sword for slashing, of a category including the cutlass, machete, falchion, and scimitar.
					</Tooltip>
					)
				</>,
				<>
					An{" "}
					<Tooltip tip={"Estoc"}>
						A soldier’s thrusting sword for piercing mail. In the right hands, can be used to ignore chainmail BC.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Flail"}>For countering shields.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Mace"}>A martial weapon for crushing armor.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Morningstar"}>
						A martial weapon, spiked for piercing mail. Damage becomes bludgeoning versus plate armor.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Rapier"}>A rapscallion’s sword—or a gentleman’s...</Tooltip>
				</>,
			],
		},
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>2d100 gold</>,
				<>
					7 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Tent"}>Suitable for two adventurers, or one royal highness.</Tooltip>
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					One set of{" "}
					<Tooltip tip={"Formal Wear"}>
						Appropriate for appearances before a noble or royal court. +1 to performance checks.
					</Tooltip>
				</>,
			],
		},
	],
};

export const marksman = {
	loose: [
		<>
			A coat of <Tooltip tip={"Gambeson"}>A proper gambeson, befitting a squire.</Tooltip>.
		</>,
		<>
			A <Tooltip tip={"Longbow"}>The bow used by professional archers.</Tooltip> and a{" "}
			<Tooltip tip={"Quiver"}>Holds up to 24 arrows or crossbow bolts.</Tooltip> with 24 arrows
		</>,
		<>Any standard weapon.</>,
		<>
			A{" "}
			<Tooltip tip={"Lantern"}>
				Requires oil. Emits bright light to a radius of 30 feet when the hood is removed.
			</Tooltip>{" "}
			with <Tooltip tip={"Flask of Oil"}>Contains approximately one pint. Fuels a lantern for 12 hours.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>Either of the following:</>,
			contents: [
				<>
					A <Tooltip tip={"Shortbow"}>A bow favored by hunters and spies.</Tooltip>, plus 24{" "}
					<Tooltip tip={"Arrow"}>Ammunition for drawn bows.</Tooltip>s
				</>,
				<>
					A <Tooltip tip={"Crossbow"}>A mechanical bow operated by a trigger.</Tooltip> and a{" "}
					<Tooltip tip={"Quiver"}>Holds up to 24 arrows or crossbow bolts.</Tooltip> with 24{" "}
					<Tooltip tip={"Bolt"}>Ammunition for crossbows.</Tooltip>s
				</>,
				<>
					A{" "}
					<Tooltip tip={"Pistol"}>
						A compact firearm, carried in one hand. Designed to be fired once and then holstered.
					</Tooltip>{" "}
					and 12 <Tooltip tip={"Bullet"}>Ammunition for firearms.</Tooltip>s
				</>,
				<>
					A <Tooltip tip={"Arquebus"}>A powerful and unpredictable firearm.</Tooltip> and 12{" "}
					<Tooltip tip={"Bullet"}>Ammunition for firearms.</Tooltip>s
				</>,
			],
		},
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>30 + 1d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Spyglass"}>Allows viewing distant objects at 4x magnification.</Tooltip> and a set of{" "}
					<Tooltip tip={"Navigational Tools"}>
						An astrolabe and sextant, used by mariners to determine approximate positioning ascertain the distance to
						landmarks of known height.
					</Tooltip>
				</>,
				<>
					A pair of{" "}
					<Tooltip tip={"Climbing Boots"}>Includes crampons for the surest of footing. +2 to mobility checks.</Tooltip>,{" "}
					<Tooltip tip={"Climbing Gear"}>Includes 10 pitons, 3 carabiners, and a harness</Tooltip>, and a{" "}
					<Tooltip tip={"100 Foot Rope"}>
						Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.
					</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Medical Kit"}>
						Includes bandages, sutures, and antiseptic. +2 to medicine checks while in inventory, or may be used to
						provide 2d6 healing during a short rest.
					</Tooltip>
				</>,
				<>
					A spare <Tooltip tip={"Quiver"}>Holds up to 24 arrows or crossbow bolts.</Tooltip> containing 24{" "}
					<Tooltip tip={"Arrow"}>Ammunition for drawn bows.</Tooltip>s
				</>,
			],
		},
	],
};

export const mercenary = {
	loose: [
		<>
			A set of <Tooltip tip={"Breastplate"}>Robust protection for the vital regions.</Tooltip>.
		</>,
		<>Any standard weapon</>,
		<>Any small weapon</>,
		<>
			A <Tooltip tip={"Buckler"}>A small shield. Allows shield bash.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>2d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>
					.
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>,{" "}
					<Tooltip tip={"Blanket &amp; Pillow"}>
						Soft and warm. An adventurer need not forsake <i>all</i> comfort.
					</Tooltip>
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>.
				</>,
				<>
					A pair of{" "}
					<Tooltip tip={"Manacles"}>
						For restraining the unruly or unwilling. Breakable by a successful DT 20 strength check.
					</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"100 Foot Rope"}>
						Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.
					</Tooltip>
				</>,
			],
		},
		{
			label: <>Any one of the following:</>,
			contents: [
				<>A second standard weapon</>,
				<>
					A dozen <Tooltip tip={"Throwing Knives"}>Knives specially designed to be hurled.</Tooltip> and a{" "}
					<Tooltip tip={"Grappling Hook"}>
						For hooking and pulling, or escaping. Allows <i>Vertical Escape</i> and <i>Come Hither</i>.
					</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Hand Cannon"}>
						A heavy pistol, for those strong enough to wield it. Light modifier does not apply if strength is less than
						16.
					</Tooltip>{" "}
					and ten bullets.
				</>,
				<>A </>,
			],
		},
	],
};

export const minstrel = {
	loose: [
		<>
			A set of <Tooltip tip={"Quilted Armor"}>A homespun gambeson. A sure sign of a hooligan.</Tooltip>
		</>,
		<>
			A <Tooltip tip={"Nimble"}>Dexterity can be used to provide the weapon’s damage, instead of strength.</Tooltip>{" "}
			weapon
		</>,
		<>
			A{" "}
			<Tooltip tip={"Dagger"}>
				A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.
			</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Musical Instrument"}>
				An instrument such as a guitar, banjo, lute, or dulcimer. Not included: the skill to play it.
			</Tooltip>{" "}
			of some kind
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>30 + 1d100 gold.</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>
					.
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>.
				</>,
				<>
					One set of{" "}
					<Tooltip tip={"Formal Wear"}>
						Appropriate for appearances before a noble or royal court. +1 to performance checks.
					</Tooltip>
				</>,
				<>
					Three <Tooltip tip={"Lockpick"}>For opening locks without the key. Not sold by decent folk.</Tooltip>s
				</>,
				<>
					A <Tooltip tip={"Tent"}>Suitable for two adventurers, or one royal highness.</Tooltip>
				</>,
			],
		},
		{
			label: <>A satchel, containing:</>,
			contents: [
				<>
					A{" "}
					<Tooltip tip={"Looking Glass"}>
						A genuine glass mirror with silvered backing. No undead or unholy visage shall appear in its frame.
					</Tooltip>
				</>,
				<>
					<Tooltip tip={"Soap"}>
						Washes away sweat and grime, more than plain water. +1 to persuasion and performance checks for 12 hours. 10
						uses.
					</Tooltip>{" "}
					and{" "}
					<Tooltip tip={"Perfume"}>
						Known as cologne, when sold to men. Lends a pleasant scent to one that wears it. Increases charisma by 1 for
						one hours, if one has washed with soap. 10 uses.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Disguise Kit"}>For changing one's appearance. </Tooltip>
				</>,
				<>
					A pair of <Tooltip tip={"Scissors"}>Suitable for cutting cloth or paper</Tooltip> and a{" "}
					<Tooltip tip={"Needle &amp; Thread"}>
						A needle and 100 feet of thread wound around a spindle, for sewing.
					</Tooltip>
				</>,
			],
		},
	],
};

export const monk = {
	loose: [],
	containers: [],
};

export const plague_doctor = {
	loose: [
		<>
			A set of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Shortsword"}>
				A shorter sword of lighter weight, making an ideal sidearm. Similar to the arming sword and gladius.
			</Tooltip>{" "}
			and a{" "}
			<Tooltip tip={"Dagger"}>
				A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.
			</Tooltip>
		</>,
		<>A doctor's robes, and a mask.</>,
		<>A jar of leeches.</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>2d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Tent"}>Suitable for two adventurers, or one royal highness.</Tooltip> or a{" "}
					<Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>,{" "}
					<Tooltip tip={"Blanket &amp; Pillow"}>
						Soft and warm. An adventurer need not forsake <i>all</i> comfort.
					</Tooltip>
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Scissors"}>Suitable for cutting cloth or paper</Tooltip> and a{" "}
					<Tooltip tip={"Needle &amp; Thread"}>
						A needle and 100 feet of thread wound around a spindle, for sewing.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Map"}>Conveys a general sense of surrounding terrain.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Crowbar"}>Invented by workmen, for prying. A favorite of thieves and hoodlums galore.</Tooltip>
				</>,
			],
		},
	],
};

export const prophet = {
	loose: [
		<>
			A set of <Tooltip tip={"Rags"}>A set of threadbare garments, such as befits a beggar.</Tooltip>, blessed by the
			divine to provide the same benefits as{" "}
			<Tooltip tip={"Sorcerer's Robes"}>
				Distinguishes one as a practitioner of the arcane. Grants advantage on ability checks to cast magical spells.
			</Tooltip>
			.
		</>,
		<>
			A{" "}
			<Tooltip tip={"Magical Staff"}>
				Infused with deep, yet subtle magic. Favored by druids, wizards and prophets.
			</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>1d20 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>
				</>,
				<>
					One set of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					One set of{" "}
					<Tooltip tip={"Religious Vestments"}>Distinguishing attire of a priest, cleric, or similar ilk.</Tooltip>
				</>,
				<>
					A pair of{" "}
					<Tooltip tip={"Spectacles"}>For reading comfort, or restoring sight to the nearsighted adventurer.</Tooltip>{" "}
				</>,
				<>
					A{" "}
					<Tooltip tip={"Frying Pan"}>
						For frying eggs. Oft improvised as a weapon of housewives, against intruders.
					</Tooltip>
				</>,
				<>
					A bottle of{" "}
					<Tooltip tip={"Moonshine, Flask of"}>
						Extremely strong alcohol. Lacks the royal stamp, indicating that is has been manufactured illegally.
					</Tooltip>
				</>,
			],
		},
		{
			label: <>Any two of the following</>,
			contents: [
				<>
					A{" "}
					<Tooltip tip={"Musical Instrument"}>
						An instrument such as a guitar, banjo, lute, or dulcimer. Not included: the skill to play it.
					</Tooltip>{" "}
					(and proficiency in <Sub skill='Performance' />)
				</>,
				<>
					A <Tooltip tip={"Disguise Kit"}>For changing one's appearance. </Tooltip> and a{" "}
					<Tooltip tip={"Forgery Kit"}>
						Contains stationery, pens, and inks of various sorts, for falsifying signatures.
					</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Medical Kit"}>
						Includes bandages, sutures, and antiseptic. +2 to medicine checks while in inventory, or may be used to
						provide 2d6 healing during a short rest.
					</Tooltip>{" "}
					(and proficiency in <Sub skill='Medicine' />)
				</>,
				<>
					A half-dozen <Tooltip tip={"Lockpick"}>For opening locks without the key. Not sold by decent folk.</Tooltip>s
					(and proficiency in <Sub skill='Legerdemain' />)
				</>,
			],
		},
	],
};

export const psychic = {
	loose: [
		<>
			A set of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Dagger"}>
				A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.
			</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>A sidearm, such as:</>,
			contents: [
				<>
					A{" "}
					<Tooltip tip={"Shortsword"}>
						A shorter sword of lighter weight, making an ideal sidearm. Similar to the arming sword and gladius.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Shortbow"}>A bow favored by hunters and spies.</Tooltip> and{" "}
					<Tooltip tip={"Quiver"}>Holds up to 24 arrows or crossbow bolts.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Hand Crossbow"}>A miniature crossbow. Widely considered a gimmick.</Tooltip> and{" "}
					<Tooltip tip={"Quiver"}>Holds up to 24 arrows or crossbow bolts.</Tooltip>
				</>,
				<>
					A dozen <Tooltip tip={"Throwing Knives"}>Knives specially designed to be hurled.</Tooltip>
				</>,
			],
		},
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>2d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>,{" "}
					<Tooltip tip={"Blanket &amp; Pillow"}>
						Soft and warm. An adventurer need not forsake <i>all</i> comfort.
					</Tooltip>
				</>,
				<>
					2 sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"100 Foot Rope"}>
						Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.
					</Tooltip>{" "}
					and a{" "}
					<Tooltip tip={"Block &amp; Tackle"}>
						For lifting weight and multiplying effort when hoisting with ropes.
					</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Lantern"}>
						Requires oil. Emits bright light to a radius of 30 feet when the hood is removed.
					</Tooltip>{" "}
					and <Tooltip tip={"Flask of Oil"}>Contains approximately one pint. Fuels a lantern for 12 hours.</Tooltip>
				</>,
			],
		},
		{
			label: <>One of the following</>,
			contents: [
				<>
					A <Tooltip tip={"Map"}>Conveys a general sense of surrounding terrain.</Tooltip>,{" "}
					<Tooltip tip={"Compass"}>Always points north, except in the presence of magical fields.</Tooltip>, and{" "}
					<Tooltip tip={"Spyglass"}>Allows viewing distant objects at 4x magnification.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Medical Kit"}>
						Includes bandages, sutures, and antiseptic. +2 to medicine checks while in inventory, or may be used to
						provide 2d6 healing during a short rest.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Padlock &amp; Key"}>For securing valuables, or denying entry.</Tooltip> and half a dozen{" "}
					<Tooltip tip={"Lockpick"}>For opening locks without the key. Not sold by decent folk.</Tooltip>s
				</>,
				<>
					A{" "}
					<Tooltip tip={"Needle &amp; Thread"}>
						A needle and 100 feet of thread wound around a spindle, for sewing.
					</Tooltip>
					, <Tooltip tip={"Scissors"}>Suitable for cutting cloth or paper</Tooltip>, and a{" "}
					<Tooltip tip={"Disguise Kit"}>For changing one's appearance. </Tooltip>
				</>,
			],
		},
	],
};

export const ranger = {
	loose: [
		<>
			A suit of <Tooltip tip={"Leather Armor"}>Composed of boiled leather. Worn by knaves.</Tooltip>
		</>,
		<>Any standard weapon</>,
		<>
			A{" "}
			<Tooltip tip={"Dagger"}>
				A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.
			</Tooltip>{" "}
			and two <Tooltip tip={"Hatchet"}>A small axe suitable for throwing</Tooltip>s
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>30 + 1d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>,{" "}
					<Tooltip tip={"Blanket &amp; Pillow"}>
						Soft and warm. An adventurer need not forsake <i>all</i> comfort.
					</Tooltip>
				</>,
				<>
					Two sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<></>,
			],
		},
	],
};

export const scholar = {
	loose: [
		<>
			A set of{" "}
			<Tooltip tip={"Sorcerer's Robes"}>
				Distinguishes one as a practitioner of the arcane. Grants advantage on ability checks to cast magical spells.
			</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Magical Wand"}>
				Used by casters to direct and focus magical energy. Favored by scholars and warlocks.
			</Tooltip>
		</>,
		<>
			A steel{" "}
			<Tooltip tip={"Dagger"}>
				A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.
			</Tooltip>
		</>,
		<>
			A pair of{" "}
			<Tooltip tip={"Spectacles"}>For reading comfort, or restoring sight to the nearsighted adventurer.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>2d100 gold</>,
				<>
					7 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a jug of <Tooltip tip={"Drinking Water"}>1 Gallon of potable water for cooking and drinking.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Tent"}>Suitable for two adventurers, or one royal highness.</Tooltip>
				</>,
				<>
					3 sets of{" "}
					<Tooltip tip={"Formal Wear"}>
						Appropriate for appearances before a noble or royal court. +1 to performance checks.
					</Tooltip>
				</>,
				<>
					A set of <Tooltip tip={"Utensils"}>Steel silverware, for fine eating even in rugged places.</Tooltip>
				</>,
				<>
					An <Tooltip tip={"Inkpot &amp; Quill"}>An ounce of ink, sufficient to fill 1000 pages, at least.</Tooltip> and
					three blank <Tooltip tip={"Scroll"}>5 feet of blank parchment.</Tooltip>s
				</>,
				<>
					A{" "}
					<Tooltip tip={"Signet Ring &amp; Sealing Wax"}>
						Allows a distinctive wax seal to be affixed to scrolls and letters. Provides proof of authenticity and
						prevents tampering.
					</Tooltip>
				</>,
				<>
					A stick of <Tooltip tip={"Chalk"}>For writing upon stone or rough surfaces.</Tooltip>
				</>,
				<>
					A bar of{" "}
					<Tooltip tip={"Soap"}>
						Washes away sweat and grime, more than plain water. +1 to persuasion and performance checks for 12 hours. 10
						uses.
					</Tooltip>
				</>,
			],
		},
		{
			label: <>One of the following guilty pleasures:</>,
			contents: [
				<>
					A jar of{" "}
					<Tooltip tip={"Tobacco"}>
						1 pound. Emits a thick smoke when lit, agreeable to some and noxious to others.
					</Tooltip>
				</>,
				<>
					A bottle of <Tooltip tip={"Wine, Bottle of"}>A finer drink, favored by nobles and kings.</Tooltip>
				</>,
				<>
					Three bottles of <Tooltip tip={"Mead, Bottle of"}>Made from honey. Sweeter than beer.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Traveler's Chess Set"}>
						The game of kings. Conveniently designed to allow the board to be folded and stowed along with the pieces.
					</Tooltip>
				</>,
			],
		},
	],
};

export const thief = {
	loose: [
		<>
			A set of <Tooltip tip={"Leather Armor"}>Composed of boiled leather. Worn by knaves.</Tooltip>
		</>,
		<>Any two small weapons</>,
		<>
			A{" "}
			<Tooltip tip={"Dagger"}>
				A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.
			</Tooltip>
			, <Tooltip tip={"Stiletto"}>A stabbing knife, long and sharp. Ignores BC from chainmail.</Tooltip> or{" "}
			<Tooltip tip={"Tanto"}>A short slashing blade with an angular tip.</Tooltip>, concealed on your person.
		</>,
		<>
			Five <Tooltip tip={"Throwing Knives"}>Knives specially designed to be hurled.</Tooltip>
		</>,
		<>
			A <Tooltip tip={"Crowbar"}>Invented by workmen, for prying. A favorite of thieves and hoodlums galore.</Tooltip>
		</>,
		<>
			A <Tooltip tip={"Rucksack"}>Of burlap, suitable for any purpose. 5 gallon capacity.</Tooltip> containing 4 stolen
			goods. Each stolen item is worth (disadvantaged) 1d100 gold
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>1d20 gold</>,
				<>
					3 days rations and a jug of{" "}
					<Tooltip tip={"Drinking Water"}>1 Gallon of potable water for cooking and drinking.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>
				</>,
				<>
					A set of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Tinderbox"}>
						For starting fire. If one is in your possession, you may light a torch, candle, or lantern as an action.
					</Tooltip>{" "}
					and a <Tooltip tip={"Torch"}>Lasts 4 hours</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Disguise Kit"}>For changing one's appearance. </Tooltip> and a{" "}
					<Tooltip tip={"Forgery Kit"}>
						Contains stationery, pens, and inks of various sorts, for falsifying signatures.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Whetstone"}>For sharpening knives and blades.</Tooltip>
				</>,
				<>A bottle of any alcoholic drink</>,
			],
		},
	],
};

export const veteran = {
	loose: [
		<>
			A <Tooltip tip={"Breastplate"}>Robust protection for the vital regions.</Tooltip>
		</>,
		<>Any polearm</>,
		<>Any standard weapon</>,
		<>Any small weapon</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>30 + 1d100 gold</>,
				<>
					7 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>{" "}
					and a <Tooltip tip={"Canteen"}>Holds one quart of drinking water.</Tooltip>.
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>,{" "}
					<Tooltip tip={"Blanket &amp; Pillow"}>
						Soft and warm. An adventurer need not forsake <i>all</i> comfort.
					</Tooltip>
				</>,
				<>
					2 sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Lantern"}>
						Requires oil. Emits bright light to a radius of 30 feet when the hood is removed.
					</Tooltip>{" "}
					and <Tooltip tip={"Flask of Oil"}>Contains approximately one pint. Fuels a lantern for 12 hours.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Tinderbox"}>
						For starting fire. If one is in your possession, you may light a torch, candle, or lantern as an action.
					</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Medical Kit"}>
						Includes bandages, sutures, and antiseptic. +2 to medicine checks while in inventory, or may be used to
						provide 2d6 healing during a short rest.
					</Tooltip>
				</>,
			],
		},
		{
			label: <>Any three of the following:</>,
			contents: [
				<>
					A{" "}
					<Tooltip tip={"100 Foot Rope"}>
						Easily affixed to an adventurer's pack. Holds up to 1000 pounds of weight.
					</Tooltip>
					, including a{" "}
					<Tooltip tip={"Block &amp; Tackle"}>
						For lifting weight and multiplying effort when hoisting with ropes.
					</Tooltip>
				</>,
				<>
					<Tooltip tip={"Climbing Gear"}>Includes 10 pitons, 3 carabiners, and a harness</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Map"}>Conveys a general sense of surrounding terrain.</Tooltip> and{" "}
					<Tooltip tip={"Compass"}>Always points north, except in the presence of magical fields.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Musical Instrument"}>
						An instrument such as a guitar, banjo, lute, or dulcimer. Not included: the skill to play it.
					</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Workman's Hammer"}>An ordinary ball-peen hammer.</Tooltip>,{" "}
					<Tooltip tip={"Chisel"}>For shaping stone and wood. Best when combined with a workman's hammer.</Tooltip>, and
					a{" "}
					<Tooltip tip={"Crowbar"}>Invented by workmen, for prying. A favorite of thieves and hoodlums galore.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Whistle"}>Emits a shrill noise, often to alert of danger.</Tooltip>
				</>,
			],
		},
	],
};

export const witch = {
	loose: [
		<>
			A set of{" "}
			<Tooltip tip={"Sorcerer's Robes"}>
				Distinguishes one as a practitioner of the arcane. Grants advantage on ability checks to cast magical spells.
			</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Magical Wand"}>
				Used by casters to direct and focus magical energy. Favored by scholars and warlocks.
			</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Dagger"}>
				A short sidearm, suitable for slashing or stabbing. The “Sharp” property does not apply when thrown.
			</Tooltip>{" "}
			or <Tooltip tip={"Stiletto"}>A stabbing knife, long and sharp. Ignores BC from chainmail.</Tooltip>
		</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>2d100 gold</>,
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Bedroll"}>A minimal sleeping arrangement for a rugged adventurer.</Tooltip>,{" "}
					<Tooltip tip={"Blanket &amp; Pillow"}>
						Soft and warm. An adventurer need not forsake <i>all</i> comfort.
					</Tooltip>
				</>,
				<>
					2 sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Talisman"}>
						A blessed or holy artifact designed to nullify the trickery of evil spirits.
					</Tooltip>{" "}
					and a{" "}
					<Tooltip tip={"Bell"}>
						For calling others to attention, or summoning spirits, depending on one's needs.
					</Tooltip>
				</>,
			],
		},
		{
			label: <>One of the following items, shoved to the bottom of the pack:</>,
			contents: [
				<>
					<Tooltip tip={"Formal Wear"}>
						Appropriate for appearances before a noble or royal court. +1 to performance checks.
					</Tooltip>{" "}
					and a set of{" "}
					<Tooltip tip={"Religious Vestments"}>Distinguishing attire of a priest, cleric, or similar ilk.</Tooltip>
				</>,
				<>
					A{" "}
					<Tooltip tip={"Deck of Cards"}>
						An ordinary deck of cards, tinged with the faint scent of alcohol and tobacco.
					</Tooltip>
					, A human skull, a <Tooltip tip={"Candle"}>Lasts 1 hour; emits only dim light.</Tooltip>, and an{" "}
					<Tooltip tip={"Hourglass"}>Measures out the passage of an hour. Accurate to within one minute.</Tooltip> (gain
					inspiration)
				</>,
				<>
					A{" "}
					<Tooltip tip={"Portable Alchemy Set"}>
						Allows brewing potions, though less reliably so than a proper alchemical laboratory.
					</Tooltip>{" "}
					(lose 50 gold)
				</>,
				<>
					A{" "}
					<Tooltip tip={"Crystal Ball"}>
						Aids in scrying, divination, and certain forms of astrology. Highly prized by mages.
					</Tooltip>{" "}
					(lose 100 gold)
				</>,
				<>
					A bar of{" "}
					<Tooltip tip={"Soap"}>
						Washes away sweat and grime, more than plain water. +1 to persuasion and performance checks for 12 hours. 10
						uses.
					</Tooltip>{" "}
					and{" "}
					<Tooltip tip={"Perfume"}>
						Known as cologne, when sold to men. Lends a pleasant scent to one that wears it. Increases charisma by 1 for
						one hours, if one has washed with soap. 10 uses.
					</Tooltip>
				</>,
				<>
					An <Tooltip tip={"Inkpot &amp; Quill"}>An ounce of ink, sufficient to fill 1000 pages, at least.</Tooltip> and
					a <Tooltip tip={"Scroll"}>5 feet of blank parchment.</Tooltip>, plus a{" "}
					<Tooltip tip={"Signet Ring &amp; Sealing Wax"}>
						Allows a distinctive wax seal to be affixed to scrolls and letters. Provides proof of authenticity and
						prevents tampering.
					</Tooltip>{" "}
					(gain proficiency in <Sub skill='Literacy' />)
				</>,
			],
		},
	],
};

export const wizard = {
	loose: [
		<>
			A set of{" "}
			<Tooltip tip={"Sorcerer's Robes"}>
				Distinguishes one as a practitioner of the arcane. Grants advantage on ability checks to cast magical spells.
			</Tooltip>
		</>,
		<>
			A{" "}
			<Tooltip tip={"Magical Staff"}>
				Infused with deep, yet subtle magic. Favored by druids, wizards and prophets.
			</Tooltip>
		</>,
		<>A large, pointed hat</>,
		<>Any small weapon</>,
	],
	containers: [
		{
			label: <>An adventurer's pack, containing:</>,
			contents: [
				<>
					3 days <Tooltip tip={"Rations"}>Consists of non-perishable food items for a single day's sustenance.</Tooltip>
				</>,
				<>
					A <Tooltip tip={"Tent"}>Suitable for two adventurers, or one royal highness.</Tooltip> and{" "}
					<Tooltip tip={"Blanket &amp; Pillow"}>
						Soft and warm. An adventurer need not forsake <i>all</i> comfort.
					</Tooltip>
				</>,
				<>
					2 sets of <Tooltip tip={"Plain Clothes"}>Ordinary clothes for ordinary folk.</Tooltip>
				</>,
				<>
					3 <Tooltip tip={"Candle"}>Lasts 1 hour; emits only dim light.</Tooltip>s and a{" "}
					<Tooltip tip={"Bell"}>
						For calling others to attention, or summoning spirits, depending on one's needs.
					</Tooltip>
				</>,
				<>
					An <Tooltip tip={"Inkpot &amp; Quill"}>An ounce of ink, sufficient to fill 1000 pages, at least.</Tooltip> and
					a blank <Tooltip tip={"Scroll"}>5 feet of blank parchment.</Tooltip>
				</>,
			],
		},
		{
			label: (
				<>
					Up to three of the following items, secured in a{" "}
					<Tooltip tip={"Rucksack"}>Of burlap, suitable for any purpose. 5 gallon capacity.</Tooltip>:
				</>
			),
			contents: [
				<>
					A pair of{" "}
					<Tooltip tip={"Spectacles"}>For reading comfort, or restoring sight to the nearsighted adventurer.</Tooltip>
				</>,
				<>A bottle of any alcoholic drink</>,
				<>
					A pipe and{" "}
					<Tooltip tip={"Tobacco"}>
						1 pound. Emits a thick smoke when lit, agreeable to some and noxious to others.
					</Tooltip>
				</>,
				<>
					A cup of <Tooltip tip={"Salt, 1 cup"}>For flavor, and curing meat. And driving off foul spirits.</Tooltip>
				</>,
				<>
					A gallon jug of <Tooltip tip={"Drinking Water"}>1 Gallon of potable water for cooking and drinking.</Tooltip>
				</>,
				<>
					A pair of <Tooltip tip={"Scissors"}>Suitable for cutting cloth or paper</Tooltip> and some{" "}
					<Tooltip tip={"String"}>
						50 feet of string wrapped around a spindle. Its use depends on one's wit and creativity. It entertains cats,
						if nothing else.
					</Tooltip>
				</>,
			],
		},
	],
};

export const startingEquipment = new TSXDirectory<Inventory>();

startingEquipment.register("assassin", assassin);

startingEquipment.register("barbarian", barbarian);

startingEquipment.register("crusader", crusader);

startingEquipment.register("druid", druid);

startingEquipment.register("hermit", hermit);

startingEquipment.register("inquisitor", inquisitor);

startingEquipment.register("knight", knight);

startingEquipment.register("marksman", marksman);

startingEquipment.register("mercenary", mercenary);

startingEquipment.register("minstrel", minstrel);

startingEquipment.register("monk", monk);

startingEquipment.register("plague_doctor", plague_doctor);

startingEquipment.register("prophet", prophet);

startingEquipment.register("psychic", psychic);

startingEquipment.register("ranger", ranger);

startingEquipment.register("scholar", scholar);

startingEquipment.register("thief", thief);

startingEquipment.register("veteran", veteran);

startingEquipment.register("witch", witch);

startingEquipment.register("wizard", wizard);
