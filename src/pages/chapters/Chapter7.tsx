import {ReactElement} from "react";
import Chapter from "../../components/Chapter";
import {chapters} from "../../components/ChapterInfo";
import Section from "../../components/text/Section";
import {Subheader} from "../../components/text/Subheader";
import {
	spellSchools,
	SpellSchool,
	SpellStudy,
	SpellRarity,
	spellRarities,
	SpellType,
	spellTypes,
} from "../../concepts/magic";
import {AppendixLink} from "../../components/InternalLink";

const index = 7;
const info = chapters.array[index - 1];

function SchoolsOfSorcerySection(): JSX.Element {
	return (
		<Section name={info.sections[0]}>
			<blockquote>
				Any sensible treatise on magic will disclose the following insight: <i>magic is energy</i>. Therefore, magic is
				classified according to whence this energy originates, the techniques used to manipulate it, and finally
				according to the overall purpose of its application. In fact, all spells follow the same basic pattern, whereby
				the magus identifies a source of energy, imposes order over chaos, and finally unleashes this directed energy
				upon the world.
				<p style={{textAlign: "right"}}>
					— Albrecht Riftenvorg, <i>A Primer on Magic</i>
				</p>
			</blockquote>
			<p>
				Despite being intensely studied, magic remains an abstruse and opaque subject. Among those who study it, there
				is no consensus as to why certain individuals wield its power so effortlessly, why certain spells are so
				difficult to reproduce, or why other spells work at all. This inconvenience doesn't stop scholars from doing the
				one thing they are truly good at, however: categorizing things.
			</p>
			<p>
				A long time ago, spells were categorized into two types: thaumaturgy and divination. Thaumaturgical disciplines
				used the suffix -urgy, while divination schools used the suffix -mancy. For example, there was once a
				distinction between necromancy and necromurgy; the former was concerned with contacting deceased spirits, while
				the latter with raising their bodies. However, centuries of expanding magical theory as well as a good deal of
				linguistic bastardization have relegated such distinction to a mere footnote of history. Modern magic is now
				divided into six schools of sorcery, which each have their own disciplines. These are listed below:
			</p>
			{spellSchools.array.map((school, index) => (
				<SchoolElement school={school} key={index} />
			))}
		</Section>
	);
}

export function SchoolElement({school}: {school: SpellSchool}): JSX.Element {
	return (
		<>
			<Subheader>{school.name}</Subheader>
			<p>{school.description}</p>
			<p>
				<b>Primary Attribute</b>: {school.attr.name}
			</p>
			<p>
				<b>Casting Skill</b>: {school.skill.name}
			</p>
			<p>
				<b>Studies</b>:
			</p>
			<ul>
				{school.studies.map((study, index) => (
					<StudyElement study={study} key={index} />
				))}
			</ul>
		</>
	);
}

function StudyElement({study}: {study: SpellStudy}): JSX.Element {
	return (
		<li>
			<i>{study.name}</i>: {study.description}
		</li>
	);
}

function SpellRarityElement({rarity}: {rarity: SpellRarity}): ReactElement {
	return (
		<li>
			<b>{rarity.name}</b>: {rarity.description}
		</li>
	);
}

function SpellTypeElement({type}: {type: SpellType}): ReactElement {
	return (
		<li>
			<b>{type.name}</b>: {type.description}
		</li>
	);
}

function LearningSpellsSection(): JSX.Element {
	return (
		<Section name={info.sections[1]}>
			<p>
				In order to learn a spell, a player must meet all the spell's requirements. Most spells require a certain level
				of an attribute, a certain adventurer level, and a certain number of training slots to learn. Some spells also
				have spell, feat, or skill requirements. Each spell lists its specific requirements in its description, in the{" "}
				<AppendixLink appendix={1} />. Once all these requirements are met, the player is free to spend training slots
				and learn the spell.
			</p>
			<Subheader>Spell Rarities</Subheader>
			<p>
				Some spells are much more commonly used and studied than others. Spells come in four rarities, which determine
				how difficult it is to acquire knowledge of them, as well as how others would likely react to seeing them used.
			</p>
			<ul>
				{spellRarities.array.map((rarity, index) => (
					<SpellRarityElement rarity={rarity} key={index} />
				))}
			</ul>
		</Section>
	);
}

function CastingSpellsSection(): JSX.Element {
	return (
		<Section name={info.sections[2]}>
			<p>
				Once a spell has been learned, certain additional requirements must be met in order to cast the spell. These
				requirements are unique to each spell, and detailed in the spell description. In general, most spells expend
				willpower and require an action to cast. Spell requirements are often related to how the spell is cast, as
				follows:
			</p>
			<ul>
				{spellTypes.array.map((type, index) => (
					<SpellTypeElement type={type} key={index} />
				))}
			</ul>
			<Subheader>Targeting Spells</Subheader>
			<p>
				Many spells have a range of effectiveness and target a certain area of the battlefield. Every spell has a
				target, of one of the following types:
			</p>
			<ul>
				<li>
					<b>Self</b>: The spell targets the caster of the spell only.
				</li>
				<li>
					<b>Touch</b>: The spell targets one or more creatures that the spellcaster is able to physically touch.
				</li>
				<li>
					<b>Range</b>: The spell affects some or all targets of a specific type within a given range.
				</li>
				<li>
					<b>Shape</b>: The spell targets a specific area within range, based on one of the shapes described below. If
					the range is zero, the shape is targeted on the caster.
				</li>
			</ul>
			<p>
				Most spells that target something within a range require line-of-sight to the target. A spell can be cast on a
				target without line-of-sight only if the description explicitly says so. The caster always has line-of-sight to
				themselves.
			</p>
			<p>Spells that target a shape use one of the following shapes:</p>
			<table className='default'>
				<thead>
					<tr>
						<th>Shape</th>
						<th>Effect</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Sphere</td>
						<td>Affects all targets which overlap a sphere. The sphere's radius is specified by the spell.</td>
					</tr>
					<tr>
						<td>Cylinder</td>
						<td>
							Affects all targets which overlap a vertical cylinder. The cylinder's radius and height are specified by
							the spell.
						</td>
					</tr>
					<tr>
						<td>Cone</td>
						<td>
							Affects all targets which overlap a horizontal cone, with the tip at the point of origination. The cone's
							length is specified by the spell. Its angle defaults to 45 if not specified.
						</td>
					</tr>
					<tr>
						<td>Line</td>
						<td>
							Affects all targets in the path of the line. The length is specified by the spell. The width defaults to 1
							if not otherwise specified. If the spell target is self, then one of the line endpoints ends on the
							caster's tile. The caster decides if the spell includes their tile or not.
						</td>
					</tr>
					<tr>
						<td>Cube</td>
						<td>
							Affects all targets within a cube. The edge length of the cube is specified by the spell. The cube is
							centered on the point of origination if not otherwise specified.
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}

export default function Chapter7(): JSX.Element {
	return (
		<Chapter index={index}>
			<SchoolsOfSorcerySection />
			<LearningSpellsSection />
			<CastingSpellsSection />
		</Chapter>
	);
}
