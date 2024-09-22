import Chapter from "../../components/Chapter";
import {chapters} from "../../components/ChapterInfo";
import {AppendixLink, ChapterLink} from "../../components/InternalLink";
import Section from "../../components/text/Section";
import Sub from "../../components/Sub";
import strings from "../../resources/strings.json";

const index = 4;
const info = chapters.array[index - 1];

function Intro(): JSX.Element {
	return (
		<p>
			In All That Glitters, there are three ways that characters increase their power level: leveling, training, and
			looting. Each of these serves a unique function. Leveling provides characters with guaranteed and predicatable
			bonuses that they can plan their character around. Training allows players to adapt their character to looming
			challenges and emphasize their character's flavor. Finally, looting allows the storyteller to challenge players
			with new ideas that are unique to each adventure.
		</p>
	);
}

function LevelingSection(): JSX.Element {
	return (
		<Section name={info.sections[0]}>
			<p>
				Each character’s skill as an adventurer is measured by their level, which typically begins at 1 and progresses
				up to 20. All characters in the party level up together, usually after a huge battle or major obstacle is
				overcome. The storyteller increases the party's level after such milestones, recognizing the adventuring party’s
				increasing skill and renown.
			</p>
			<p>
				When leveling up, characters gain slightly different bonuses at odd and even levels. At odd-numbered levels, the
				maximum power level of abilities characters can learn increases, enabling more powerful spells and combat
				maneuvers. At even numbered levels, characters may increase a number of attribute scores by one, according to
				this chart:
			</p>
			<table className='default'>
				<thead>
					<tr>
						<th>Level</th>
						<th>Attribute Points</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2</td>
						<td>4</td>
					</tr>
					<tr>
						<td>4</td>
						<td>4</td>
					</tr>
					<tr>
						<td>6</td>
						<td>3</td>
					</tr>
					<tr>
						<td>8</td>
						<td>3</td>
					</tr>
					<tr>
						<td>10</td>
						<td>3</td>
					</tr>
					<tr>
						<td>12</td>
						<td>2</td>
					</tr>
					<tr>
						<td>14</td>
						<td>2</td>
					</tr>
					<tr>
						<td>16+</td>
						<td>1</td>
					</tr>
				</tbody>
			</table>
			<p>
				Although abilities of the next rank are unlocked at odd-numbered character levels, it's often a good idea to
				start planning ahead early when allocating ability points. Also, note that you can't increase a single attribute
				by more than 1 per level.
			</p>

			<p>To level up, follow these steps:</p>
			<ol>
				<li>
					If you're at an even-numbered level, increase your attribute scores. You may need to recalculate your maximum
					HP, willpower, and training slots after you've done so.
					<pre>{strings.max_hp_formula}</pre>
					<pre>{strings.max_wp_formula}</pre>
					<pre>{strings.training_slots_formula}</pre>
				</li>
				<li>
					If you're at an odd-numbered level, look over the new class features you've gained, including any attribute or
					proficiency bonuses. Class features are covered in <ChapterLink chapter={2} target='classes' />.
				</li>
				<li>
					Increase your maximum hitpoints. The easy way is to just add half your strength score to your Max HP, but if
					you want to be 100% accurate, you can recalculate using the max hp formula above.
				</li>
				<li>
					Regain training slots used by abilities learned in the previous level. If you didn't use every trainig slot
					available in the previous level, up to 5 training slots carry over to the next level.
				</li>
				<li>
					Update your character sheet. You don't need to copy new class abilities into the "abilities" section, but you
					should make sure that your attribute values and training slots are accurate. If your attributes changed, max
					HP, WP, and skill scores may also need to be updated, since they depend on your attributes.
				</li>
			</ol>
		</Section>
	);
}

function TrainingSection(): JSX.Element {
	return (
		<Section name={info.sections[1]}>
			<p>
				Trainable abilities are divided into three types:
				<ul>
					<li>
						<b>Feats</b>, which are (usually) passive abilities useful in and out of combat.
					</li>
					<li>
						<b>Spells</b>, which are magical abilities available to players who have taken the{" "}
						<AppendixLink appendix={2} target='Arcane Apprentice' /> feat.
					</li>
					<li>
						<b>Maneuvers</b>, which are nonmagical combat abilities used during battles.
					</li>
				</ul>
			</p>
			<p>
				All three of these types of abilities cost training slots to learn. Training slots represent the time and mental
				effort required to fully master the new skill. Normally, each player has training slots equal to their
				intelligence score. These are expended when learning new abilities, and returned after leveling up. If you want
				to play a character who has an answer for every situation, you likely want to level your <Sub attr='int' />{" "}
				score, since this directly influences their repertoir.
			</p>
			<p>
				If you level up and have some training slots left over, but none of the availabilities appeal to you, up to 5
				training slots carry over to the next level. (Or more, if your storyteller allows.)
			</p>
			<p>
				In order to learn new abilities, players must first ensure that they meet the requirements of the ability they
				are trying to learn. For example:
			</p>
			<ul>
				<li>All spells, feats, and abilities require a certain adventurer level.</li>
				<li>A certain level of strength or intelligence, or other attribute.</li>
				<li>High level spells often require mastery of other low level spells before they can be learned.</li>
				<li>Players must have sufficient training slots available for the ability they are trying to learn.</li>
			</ul>
			<p>The list of all feats, spells, and maneuvers are listed in the following appendices:</p>
			<ul>
				<li>
					<b>Spells</b>: <AppendixLink appendix={1} />
				</li>
				<li>
					<b>Feats and Maneuvers</b>: <AppendixLink appendix={2} />
				</li>
			</ul>
		</Section>
	);
}

function LootingSection(): JSX.Element {
	return (
		<Section name={info.sections[2]}>
			<p>
				True to its name, <i>All That Glitters</i> treats looting as a core part of the leveling process. Besides the
				acquisition of magical items, gold allows players to improve their builds in a number of important ways:
			</p>
			<ul>
				<li>Hiring trainers for rare spells or abilities</li>
				<li>Purchasing magical trinkets and jewelry</li>
				<li>Buying improved weapons and armor</li>
				<li>Buying potions, scrolls, or other tools</li>
			</ul>
			<p>
				Because gold is a core part of the leveling process, players can plan on obtaining a certain amount per level:
			</p>
			<table className='default'>
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
