import {Link} from "react-router-dom";
import Chapter from "../../components/Chapter";
import {chapters} from "../../components/ChapterInfo";
import {ChapterLink, AppendixLink} from "../../components/InternalLink";
import Section from "../../components/Section";
import {combatCategories, CombatCategory} from "../../concepts/combatCategory";
import {races, Race} from "../../generated/race";
import {sizes, Size} from "../../concepts/size";
import {range} from "../../utils/utils";
import {ClassElement} from "../../components/ClassElement";
import {classes} from "../../generated/combatClass";

const index = 2;
const info = chapters.array[index - 1];

const altSectionNames = ["Choose a Race", "Choose a Class", "Choose an Alignment", "Write a Backstory", "Choose starting Equipment"];

function Intro(): JSX.Element {
	return (
		<>
			<p>
				Now that you know the basics, you're ready to create a character. This section of the text will refer to some mechanics which aren't explained
				until the next chapter. If that bothers you, you can skip ahead and revisit this section later. However, you don't need to perfectly
				understand the rules to make an excellent character. I recommend at least a quick read of this chapter before moving on.
			</p>
			<p>
				Creating a character in <i>All That Glitters</i> is really simple. Just follow these steps:
			</p>
			<ol>
				{altSectionNames.map((name, index2) => (
					<li key={index2}>
						<ChapterLink chapter={index} section={index2 + 1}>
							{name}
						</ChapterLink>
					</li>
				))}
			</ol>
		</>
	);
}

function RaceSection(): JSX.Element {
	return (
		<Section name={info.sections[0]}>
			<p>
				There are eight example races here, representing some favorite repeat offenders from the fantasy genre. That said, homebrewing new races is
				very much in the spirit of All that Glitters, and if a race you want to play isn’t in this list, you absolutely should create it.
				Alternatively, feel free to create your own lore for any of these races—don’t let my ideas stifle yours! Further on, I’ll explain some
				guidelines for creating new races while also respecting gameplay balance.
			</p>
			{races.array.map((race, index) => {
				return <RaceElement race={race} key={index} />;
			})}
			<h5 id='custom_races'>Custom Races</h5>
			<p>When creating new races, consider following these general guidelines:</p>
			<ol>
				<li>No stat bonus should exceed +2, and no stat penalty should exceed -2.</li>
				<li>The sum of all attribute bonuses minus all penalties should equal 1.</li>
				<li>Every race should have at least one proficiency bonus, but no more than 2.</li>
				<li>The player should have some choices, in the form of subraces, attributes, or proficiencies.</li>
				<li>
					Be careful making races that give +2 bonuses to both strength and dexterity, or both intelligence and will. Such races make very strong
					warriors or wizards respectively with very little downside.
				</li>
			</ol>
			<h5 id='size'>Size</h5>
			<p>
				A character's race also determines their size. Size is not recorded on the character sheet, but is usually medium. If you picked a halfling,
				it's small. Size primarily affects what weapons a character can and can’t use, terminal velocity, and how effectively they can grapple.
				Grappling will be explained in further detail in <ChapterLink chapter={5} section={6} />, while fall damage and terminal velocity will be
				explained in <ChapterLink chapter={6} section={6} />.
			</p>
			<table className='standard'>
				<thead>
					<tr>
						<th>Size</th>
						<th>Maximum Height</th>
						<th>Grid Size</th>
						<th>Terminal Velocity</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{sizes.array.map((size, index) => (
						<SizeElement size={size} key={index} />
					))}
				</tbody>
			</table>
		</Section>
	);
}

function RaceElement({race}: {race: Race}) {
	return (
		<>
			<h5>{race.name}</h5>
			{race.description}
			{race.bonuses}
		</>
	);
}

function SizeElement({size}: {size: Size}) {
	return (
		<tr>
			<td>{size.name}</td>
			<td>{size.maxHeight} ft</td>
			<td>
				{size.tileSize}x{size.tileSize}
			</td>
			<td>{size.terminalVelocity} ft/s</td>
			<td>{size.notes}</td>
		</tr>
	);
}

const last = classes.array.length;
const half = last / 2;
const classesColumn1 = range(0, half).map(index => classes.array[index].name);
const classesColumn2 = range(half, last - half).map(index => classes.array[index].name);

function ClassSection(): JSX.Element {
	return (
		<Section name={info.sections[1]}>
			<div className='row'>
				<div className='column'>
					<p>
						A character's combat class gives you an idea of both their fighting style and occupational background. Realtistically, these two are
						rarely separate. Unless you're an aristocrat, you don't have the time and money to aquire skills of little use within your day-to-day
						life. So a monk picks up his staff, a veteran takes his sword from the mantlepiece, or a scholar gathers her books. Each of them takes
						something familiar to them and does something extraordinary with it, as they begin their adventure.
					</p>
					<p>
						The easiest way to choose a class is to avoid all the details and just pick one that sounds cool. However, if you're of a mind to make an
						informed decision by carefully examine the unique features of each class, you certainly can. There are no wrong choices, only interesting
						ones.
					</p>
					<p>
						There is some ongoing debate as to the ideal number of classes in a TTRPG system. Too few classes, and players are less likely to find one
						that really captures their interest and vision. Too many, and the player is at risk of being drowned by excess choices—which may not be
						well balanced, either! I’ve decided to use 20 classes, which are grouped into five categories, listed below. Players who struggle to pick
						a class can thus choose between one of these five categories and then choose between one of the four classes within that category.
						Hopefully it is easier to make two simple choices than one complicated choice.
					</p>
				</div>
				<div className='column' style={{width: "120px"}}>
					<ul>
						{classesColumn1.map((name, index) => (
							<li key={index}>
								<Link to={{hash: name}}>{name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='column' style={{width: "120px"}}>
					<ul>
						{classesColumn2.map((name, index) => (
							<li key={index}>
								<Link to={{hash: name}}>{name}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<p>Here are the five categories:</p>
			<CombatCategoriesElement />
			<p>
				In addition to each category’s attribute and proficiency bonus, each class category has a special bonus ability shared between all characters
				in that category. Here’s what each ability does:
			</p>
			<ul>
				<li>
					<b>Heavy Attack</b>: When making a strength-based weapon attack, you may expend 1 willpower to increase the damage of your attack. If it
					hits, you may roll your weapon's damage die a second time and take the higher value.
				</li>
				<li>
					<b>Mana Regeneration</b>: When starting a combat turn with less than two willpower, gain one willpower.
				</li>
				<li>
					<b>Precision Strike</b>: When making a dexterity-based weapon attack, you may expend 1 willpower to gain +3 to hit on the attack roll and
					lower the critical threshold by 1. (i.e. from 20 to 19, typically.)
				</li>
				<li>
					<b>Beast Speech</b>: You know the language of beasts, and may converse with them at any time without expending willpower or using the "Beast
					Speech" spell.
				</li>
				<li>
					<b>Meditation</b>: Once per long rest and while outside of combat, you may expend 4 willpower to meditate or pray to your deity. You may
					increase an attribute of your choice by 2 for one hour, but not above 20.
				</li>
			</ul>
			<p>
				In addition to these bonuses, the proficiency bonus of the base skill for each category advances to the next level at level 5 and again at
				level 10. This bonus cannot increase the proficiency bonus beyond mastery.
			</p>
			<p>A detailed explanation of classes is given below, in alphabetical order.</p>
			{classes.array.map((clazz, index) => (
				<ClassElement clazz={clazz} key={index} />
			))}
		</Section>
	);
}

function CombatCategoriesElement(): JSX.Element {
	return (
		<table className='standard'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Bonuses</th>
					<th>Classes</th>
				</tr>
			</thead>
			<tbody>
				{combatCategories.array.map((category, index) => {
					return <CombatCategoryElement category={category} key={index} />;
				})}
			</tbody>
		</table>
	);
}

function CombatCategoryElement({category}: {category: CombatCategory}): JSX.Element {
	return (
		<tr>
			<td>{category.name}</td>
			<td>{category.description}</td>
			<td>{category.bonuses.join(", ")}</td>
			<td>{category.classes.join(", ")}</td>
		</tr>
	);
}

function AlignmentSection(): JSX.Element {
	return (
		<Section name={info.sections[2]}>
			<p>
				In keeping with traditional TTPRGs, we use a simple alignment system to roughly track a character’s motives. The alignment chart has two axes:{" "}
				<i>lawfulness </i>and <i>morality</i>. Lawfulness describes a character’s predictability and their faith (or lack of faith) in ideals.
				Meanwhile, morality describes a character’s level of empathy and compassion for others, or lack thereof.
			</p>
			<table className='standard'>
				<tbody>
					<tr>
						<td>Lawful Good</td>
						<td>Neutral Good</td>
						<td>Chaotic Good</td>
					</tr>
					<tr>
						<td>Lawful Neutral</td>
						<td>True Neutral</td>
						<td>Chaotic Neutral</td>
					</tr>
					<tr>
						<td>Lawful Evil</td>
						<td>Neutral Evil</td>
						<td>Chaotic Evil</td>
					</tr>
				</tbody>
			</table>
			<p>
				A character’s alignment provides a rough guide to how they intend to behave. Of course, a character’s alignment can change over time, and not
				all actions are perfectly representative of their alignment. Also, certain actions don’t have a middle ground. You either run into a burning
				orphanage to save the children, or you don’t. Such circumstances can be polarizing, driving character development and pushing neutral
				characters towards the extremes of morality. Likewise, polarizing events might also serve to disillusion good characters and turn them evil or
				neutral, or inspire evil characters to reconsider their ways.
			</p>
			<p>
				Before we move on, I’d like to dispel some misconceptions regarding lawfulness and the alignment chart in general. First, alignment should
				always be secondary to a character’s personality. Second, lawfulness is often used to capture two separate ideas. The first interpretation is
				<i>a tendency to follow laws</i> while the second is
				<i>a tendency to believe in and adhere to some fixed set of ideals</i>. This leads to confusion because a seemingly lawful paladin could
				suddenly start breaking laws if they travel to a land where the foreign laws conflict heavily with their ideals. It’s not always clear whether
				this represents a change in alignment or not. Although there’s no single correct interpretation, I suggest a third interpretation that lawful
				characters tend to behave according to reason and logic, while chaotic characters behave according to emotion. One advantage of this
				interpretation is that it allows lawful characters the flexibility to sometimes be driven by pure emotion, and also explains when and why
				chaotic characters behave unpredictably—as opposed to just providing chaos for the sake of chaos.
			</p>
		</Section>
	);
}

function BackstorySection(): JSX.Element {
	return (
		<Section name={info.sections[3]}>
			<p>
				In a medieval or renaissance setting, very few characters are either physically or financially disposed to go cavorting about on grand
				adventures slaying dragons and dispatching necromancers and whatnot. Most of the characters in this sort of world are farmers, either working
				on a manor for their feudal lord or fending for themselves on the edges of civilization. Whether they're tied down by social expectations,
				afraid of death and the unkown, or just too damn comfortable, the simple fact is that{" "}
				<i>most people are not, and never will be, adventurers</i>.
			</p>
			<p>
				So who does go adventuring? If not the cowardly and mediocre, then only the strongest, boldest, and most daring individuals remain.{" "}
				<i>That's you!</i> Whether young or old, rich or poor, man or woman, an adventurer is someone who possesses <i>true courage</i>, and a
				compelling <i>vision</i>. Whatever your old life was, you're leaving it behind to try something new and exciting. Dangerous, certainly, but
				also glorious.
			</p>
			<p>
				Your backstory can be as long or short as you want it to be. Write from your heart, and create a character that resonates with you. As you
				write your backstory, try to think about what drove them to abandon their old life and become an adventurer. Here are some general questions
				to get you started:
			</p>
			<ol>
				<li>Is your character the sort to make elaborate plans, or do they react to the world around them on the fly?</li>
				<li>Has anyone in their family ever been an adventurer? Are they inspired by legends of adventurers past?</li>
				<li>Does the idea of protecting the innocent and vulnerable resonate with your character?</li>
				<li>Was your character displaced by a natural disaster, such as a fire or flood?</li>
				<li>Has your character known financial extremes, such as wealth or poverty?</li>
				<li>
					What do they hope to find as an adventurer? Some adventurers seek fame, money, friendship, or true love, while others seek revenge or even
					adventure itself.
				</li>
				<li>
					Is your character leaving anything behind in their decision to go adventuring? Perhaps family, an ancestral home or village, or a spouse?
				</li>
				<li>How does your character come across to others? Are they amiable, eccentric, softspoken, confident, or perhaps dark and brooding?</li>
				<li>How does your character feel about the downsides of adventuring, such as death, injury, or poverty?</li>
				<li>
					Are there any unresolved threads from their old life that could come back to haunt them, such as a sworn enemy, estranged family, or the
					law?
				</li>
			</ol>
		</Section>
	);
}

function EquipmentSection(): JSX.Element {
	return (
		<Section name={info.sections[4]}>
			<p>
				Starting equipment depends heavily on your character's class. Some classes are well-prepared, bringing several unique items for unforeseen
				situations. Others have more scant preparations, bringing hardly more than the clothes on their back and a smattering of food and gold. If you
				do not feel your character's initial gear is appropriate for your character, discuss this with your DM. If they agree, you can exchange some
				of your starting gear for gold or items of equivalent value.
			</p>
			<p>
				Most classes also start with an initial sum of gold, which may be spent at a merchant or on combat training. You can supplement your
				character's gear by visiting a merchant before your adventure starts. The{" "}
				<AppendixLink appendix={4}>appendix of mercantile goods</AppendixLink> lists typical merchant wares available for purchase. If you do plan to
				make a trip to a merchant, be considerate and plan your purchases in advance, to avoid inconveniencing your fellow players with an extended
				shopping spree.
			</p>
		</Section>
	);
}

export default function Chapter2() {
	return (
		<Chapter index={index}>
			<Intro />
			<RaceSection />
			<ClassSection />
			<AlignmentSection />
			<BackstorySection />
			<EquipmentSection />
		</Chapter>
	);
}
