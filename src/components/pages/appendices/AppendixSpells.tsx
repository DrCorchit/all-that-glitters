import {ReactElement, useState} from "react";
import {schools} from "../../../concepts/school";
import {Spell, lookupSpellsBySchool} from "../../../concepts/spell";
import {recordEquals, range} from "../../../utils/utils";
import Appendix from "../../Appendix";
import Collapsible from "../../Collapsible";
import {AppendixLink} from "../../InternalLink";
import Outline from "../../Outline";
import Section from "../../Section";

const filterTypes = ["At Least", "Exactly", "At Most"] as const;
type FilterType = (typeof filterTypes)[number];

type FilterState = {
	word: string;
	type: FilterType;
	level: number;
};

const defaultFilterState: FilterState = {word: "", type: "At Least", level: 1};

function Spellement({spell}: {spell: Spell}): ReactElement {
	return (
		<div className='background'>
			<button
				className='h5'
				id={spell.id}
				onClick={() => {
					const text = `https://all-that-glitters.net/spells#${spell.id}`;
					navigator.clipboard.writeText(text);
				}}>
				{spell.name}
			</button>
			<p>
				<i>{spell.blurb}</i>
			</p>
			<p>
				<b>Effect</b>: {spell.description}
			</p>
			<p>
				<b>Duration</b>: TODO
			</p>
			<Collapsible text='Additional Information'>
				<p>Training Requirements:</p>
				<ul>
					<li>Adventurer Level: {spell.trainingReqs.level}</li>
					<li>Training Slots: {spell.trainingReqs.slots}</li>
					{spell.trainingReqs.int > 0 && <li>Minimum Intelligence: {spell.trainingReqs.int}</li>}
					{spell.trainingReqs.nst > 0 && <li>Minimum Instinct: {spell.trainingReqs.nst}</li>}
					{spell.trainingReqs.cha > 0 && <li>Minimum Charisma: {spell.trainingReqs.cha}</li>}
				</ul>
				<p>Casting Requirements:</p>
				<ul>
					<li>Casting Time: {spell.castingReqs.time}</li>
					<li>Evocation Willpower: {spell.castingReqs.evocation}</li>
					{spell.type === "Concentration" && <li>Concentration Willpower: {spell.castingReqs.concentration}</li>}
				</ul>
			</Collapsible>
		</div>
	);
}

function FilterForm({filterState, setFilterState}: {filterState: FilterState; setFilterState: (filter: FilterState) => void}): JSX.Element {
	const isDirty = !recordEquals(filterState, defaultFilterState);

	function resetForm(event: React.MouseEvent) {
		event.preventDefault();
		setFilterState(defaultFilterState);
	}

	return (
		<form>
			<input
				name='search'
				id='word'
				value={filterState.word}
				onChange={e => setFilterState({...filterState, word: e.target.value})}
				placeholder='Filter by spell name'></input>
			<hr />
			<label>Filter by spell Level: </label>
			<select value={filterState.level} onChange={e => setFilterState({...filterState, level: Number(e.target.value)})}>
				{range(1, 9).map((value, index) => (
					<option value={value} key={index}>
						{value}
					</option>
				))}
			</select>
			{filterTypes.map((type, index) => (
				<label key={index}>
					<input type='radio' value={type} onChange={e => setFilterState({...filterState, type: type})} checked={filterState.type === type} />
					{type}
				</label>
			))}
			{isDirty && <button onClick={resetForm}>Clear</button>}
		</form>
	);
}

export default function AppendixSpells(): ReactElement {
	const [filterState, setFilterState] = useState<FilterState>(defaultFilterState);

	function filter(spell: Spell): boolean {
		const spellSearchTerm = `${spell.name} ${spell.blurb} ${spell.description}`.toLowerCase();
		if (filterState.word && !spellSearchTerm.includes(filterState.word.toLowerCase())) {
			return false;
		}

		switch (filterState.type) {
			case "At Most":
				return spell.level <= filterState.level;
			case "Exactly":
				return spell.level === filterState.level;
			case "At Least":
				return spell.level >= filterState.level;
		}
	}

	return (
		<Appendix index={1}>
			<h4 id='top'>Schools of Sorcery</h4>
			<Outline pathname='/spells' sections={schools.array.map(school => school.name)} />
			<Collapsible text='Search'>
				<FilterForm filterState={filterState} setFilterState={setFilterState} />
			</Collapsible>
			{schools.array.map((school, index) => {
				const spells = lookupSpellsBySchool(school)
					.filter(filter)
					.sort((sp1, sp2) => sp1.level - sp2.level);

				if (spells.length === 0) return undefined;

				return (
					<Section name={school.name} key={index}>
						{spells.map((spell, index) => (
							<Spellement spell={spell} key={index} />
						))}
						<AppendixLink appendix={1} target='top'>
							Back to Top
						</AppendixLink>
					</Section>
				);
			})}
		</Appendix>
	);
}
