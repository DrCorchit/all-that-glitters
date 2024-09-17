import {ReactElement, useState} from "react";
import Appendix from "../../components/Appendix";
import Collapsible from "../../components/Collapsible";
import {AppendixLink} from "../../components/InternalLink";
import Outline from "../../components/Outline";
import Section from "../../components/Section";
import {Spell, lookupSpellsBySchool, spellSchools} from "../../concepts/magic";
import {recordEquals, range} from "../../utils/utils";
import {spellDescriptions} from "../../generated/spellDescriptions";

function NoSpells(): React.JSX.Element {
	return (
		<div className='background'>
			<p style={{color: "#FFB080"}}>Current filter settings have excluded all spells of this category.</p>
		</div>
	);
}

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
				<b>Effect</b>: {spellDescriptions.lookup(spell.id)}
			</p>
			<p>
				<b>Duration</b>: {spell.duration}
			</p>
			<Collapsible text='Additional Information'>
				<p>Training Requirements:</p>
				<ul>
					<li>Adventurer Level: {spell.trainingReqs.level}</li>
					<li>Training Slots: {spell.trainingReqs.slots}</li>
					{spell.trainingReqs.stats?.int && <li>Minimum Intelligence: {spell.trainingReqs.stats.int}</li>}
					{spell.trainingReqs.stats?.nst && <li>Minimum Instinct: {spell.trainingReqs.stats.nst}</li>}
					{spell.trainingReqs.stats?.cha && <li>Minimum Charisma: {spell.trainingReqs.stats.cha}</li>}
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

const filterTypes = ["At Least", "Exactly", "At Most"] as const;
type FilterType = (typeof filterTypes)[number];

type FilterState = {
	word: string;
	level: number;
	levelType: FilterType;
	slots: number;
	slotsType: FilterType;
};

const defaultFilterState: FilterState = {word: "", level: 1, levelType: "At Least", slots: 15, slotsType: "At Most"};

function FilterForm({
	filterState,
	setFilterState,
}: {
	filterState: FilterState;
	setFilterState: (filter: FilterState) => void;
}): JSX.Element {
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
			<label>Filter by spell level: </label>
			<select value={filterState.level} onChange={e => setFilterState({...filterState, level: Number(e.target.value)})}>
				{range(1, 9).map((value, index) => (
					<option value={value} key={index}>
						{value}
					</option>
				))}
			</select>
			{filterTypes.map((type, index) => (
				<label key={index}>
					<input
						type='radio'
						value={type}
						onChange={() => setFilterState({...filterState, levelType: type})}
						checked={filterState.levelType === type}
					/>
					{type}
				</label>
			))}
			<hr />
			<label>Filter by training slots: </label>
			<select value={filterState.slots} onChange={e => setFilterState({...filterState, slots: Number(e.target.value)})}>
				{range(1, 15).map((value, index) => (
					<option value={value} key={index}>
						{value}
					</option>
				))}
			</select>
			{filterTypes.map((type, index) => (
				<label key={index}>
					<input
						type='radio'
						value={type}
						onChange={() => setFilterState({...filterState, slotsType: type})}
						checked={filterState.slotsType === type}
					/>
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

		if (!satisfies(spell.level, filterState.level, filterState.levelType)) {
			return false;
		}

		if (!satisfies(spell.trainingReqs.slots, filterState.slots, filterState.slotsType)) {
			return false;
		}

		return true;
	}

	function satisfies(n1: number, n2: number, relation: FilterType): boolean {
		switch (relation) {
			case "At Most":
				return n1 <= n2;
			case "Exactly":
				return n1 == n2;
			case "At Least":
				return n1 >= n2;
		}
	}

	return (
		<Appendix index={1}>
			<h4>Schools of Sorcery</h4>
			<Outline pathname='/spells' sections={spellSchools.array.map(school => school.name)} />
			<Collapsible text='Search'>
				<FilterForm filterState={filterState} setFilterState={setFilterState} />
			</Collapsible>
			{spellSchools.array.map((school, index) => {
				const spells = lookupSpellsBySchool(school)
					.filter(filter)
					.sort((sp1, sp2) => sp1.level - sp2.level);

				const noSpells = spells.length == 0;

				return (
					<Section name={school.name} key={index}>
						{noSpells ? <NoSpells /> : spells.map((spell, index) => <Spellement spell={spell} key={index} />)}
						<AppendixLink appendix={1} target='top'>
							Back to Top
						</AppendixLink>
					</Section>
				);
			})}
		</Appendix>
	);
}
