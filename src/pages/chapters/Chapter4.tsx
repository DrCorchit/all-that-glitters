import Chapter from "../../components/Chapter";
import {chapters} from "../../components/ChapterInfo";
import {ChapterLink} from "../../components/InternalLink";
import Section from "../../components/Section";
import Sub from "../../components/Sub";
import strings from "../../resources/strings.json";

const index = 4;
const info = chapters.array[index - 1];

function Intro(): JSX.Element {
	return (
		<p>
			In All That Glitters, there are three ways that characters increase their power level: leveling, training, and looting. The main difference
			between these systems is that leveling provides guaranteed and predictable bonuses, while looting provides more irregular and chaotic bonuses
			that players cannot foresee. The bonuses from leveling promote planning and ambition, while the bonuses from looting are unique to each
			adventure, and promote character identity. Contrasting these, training allows players to take control of their own destinies and acquire the
			abilities they deem most useful.
		</p>
	);
}

function LevelingSection(): JSX.Element {
	return (
		<Section name={info.sections[0]}>
			<p>
				Each character’s skill as an adventurer is measured by their level, which typically begins at 1 and progresses up to 20. Typically, all
				characters in the party level up together, usually after a huge battle or major obstacle is overcome. The DM increases the party's level after
				such milestones, recognizing the adventuring party’s increasing skill and renown.
			</p>
			<p>To level up, follow these steps:</p>
			<ol>
				<li>
					Look over the new class features you've gained, including any attribute or proficiency bonuses. Class features are covered in{" "}
					<ChapterLink chapter={2} section={1} />.
				</li>
				<li>
					Increase your maximum hitpoints. Max HP is initially equal to your strength score and increases by half your strength score each level. If
					you leveled STR, you should recalculate your max hp:
					<pre>{strings.max_hp_formula}</pre>
				</li>
				<li>
					If you leveled instinct or charisma, increase your maximum willpower accordingly. Max WP is equal to 10 plus your instinct and charisma
					modifiers:
					<pre>{strings.max_wp_formula}</pre>
				</li>
				<li>
					If you leveled <Sub attr='INT' />, increase your maximum training slots:
					<pre>{strings.training_slots_formula}</pre>
				</li>
				<li>Regain training slots. Any abilities trained in previous levels now use half as many training slots, rounded down.</li>
				<li>
					Update your character sheet. You don't need to copy new class abilities into the "abilities" section, but you should make sure that your
					attribute values and training slots are accurate. If your attributes changed, max HP, WP, and skill scores may also need to be updated,
					since they depend on your attributes.
				</li>
			</ol>
		</Section>
	);
}

function TrainingSection(): JSX.Element {
	return (
		<Section name={info.sections[1]}>
			<p>
				It is possible for characters to proactively learn certain abilities from NPC trainers, such as skill proficiencies, combat tactics, and
				spells. In addition to any gold cost, learning abilities in this way costs training slots. Each player has training slots equal to their
				intelligence score, which represent the time and mental effort required to fully master the new skill. Most abilities consume 2 training slots
				at first, but that number is reduced by half every time the player levels up, rounded down. After leveling up, any trained abilities that
				consume only one training slot become rote abilities, and no longer consume training slots.
			</p>
			<p>
				If a player does not have enough training slots available to learn a new ability, they cannot learn the ability even if they have sufficient
				gold to purchase the training. In this case, players can choose to forget abilities they are in the process of learning. If this is done, the
				training slots for the forgotten ability are recovered but the gold use to purchase the ability is lost and the skill can no longer be used.
			</p>
			<p>
				In order to learn new abilities, players must first ensure that they meet the requirements of the ability they are trying to learn. For
				example:
			</p>
			<ul>
				<li>Many abilities require a certain level of strength or intelligence, or other attribute.</li>
				<li>Some abilities require a level of proficiency in a certain skill.</li>
				<li>High level spells often require mastery of other low level spells before they can be learned.</li>
				<li>Players must have sufficient training slots available for the ability they are trying to learn.</li>
			</ul>
			<p>
				Assuming they meet these requirements, players must find and hire a trainer of the appropriate discipline and skill level. After this, the new
				ability is gained, and can be used at any point in the adventure.
			</p>
		</Section>
	);
}

function LootingSection(): JSX.Element {
	return (
		<Section name={info.sections[2]}>
			<p>
				True to its name, All That Glitters treats looting as a core part of the leveling process. Besides the acquisition of magical items, gold
				allows players to improve their builds in a number of important ways:
			</p>
			<ul>
				<li>Learning spells</li>
				<li>Hiring trainers</li>
				<li>Purchasing magical trinkets and jewelry</li>
				<li>Buying improved weapons and armor</li>
				<li>Buying potions, scrolls, or other tools</li>
			</ul>
			<p>Because gold is a core part of the leveling process, players can plan on obtaining a certain amount per level:</p>
			<table className='standard'>
				<thead>
					<tr>
						<th>Party Level</th>
						<th>Gold per player</th>
						<th>Typical Expenditures</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>0-50</td>
						<td>Basic spell and ability training</td>
					</tr>
					<tr>
						<td>2-3</td>
						<td>50-100</td>
						<td>Training, plus minor enchanted gadgets and consumables</td>
					</tr>
					<tr>
						<td>4-5</td>
						<td>70-150</td>
						<td>Training, and upgrading weapons and armor.</td>
					</tr>
					<tr>
						<td>6-7</td>
						<td>100-250</td>
						<td>Party role specialization and elite attribute training.</td>
					</tr>
					<tr>
						<td>8-10</td>
						<td>150-300</td>
						<td>Training, including olympian attribute training.</td>
					</tr>
					<tr>
						<td>11-15</td>
						<td>300-500</td>
						<td>Training, and acquisition of advanced armors such as mithril or adamant.</td>
					</tr>
					<tr>
						<td>16+</td>
						<td>500+</td>
						<td>Rare and powerful trinkets and armor.</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}

export default function Chapter4(): JSX.Element {
	return (
		<Chapter index={index}>
			<Intro />
			<LevelingSection />
			<TrainingSection />
			<LootingSection />
		</Chapter>
	);
}
