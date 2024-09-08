import {useState} from "react";
import Appendix from "../../components/Appendix";
import {normalize, range, recordEquals} from "../../utils/utils";
import Collapsible from "../../components/Collapsible";
import Section from "../../components/Section";
import {Feat, feats, FeatType, featTypes, maxFeatSlots} from "../../concepts/feat";
import {featDescriptions} from "../../generated/featDescriptions";
import {featReqs} from "../../generated/featReqs";
import {Attribute, attributes, getStat} from "../../concepts/attribute";
import React from "react";

function NoFeats(): React.JSX.Element {
	console.log("No feats");

	return (
		<div className='background'>
			<p style={{color: "#FFB080"}}>Current filter settings have excluded all feats of this category.</p>
		</div>
	);
}

function FeatElement({feat}: {feat: Feat}): React.JSX.Element {
	const id = normalize(feat.name);
	return (
		<div className='background'>
			<button
				className='h5'
				id={id}
				onClick={() => {
					const text = `https://all-that-glitters.net/feats#${id}`;
					navigator.clipboard.writeText(text);
				}}>
				{feat.name}
			</button>
			<p>
				<i>{`Level ${feat.level} ${feat.featType.name} Feat`}</i>
			</p>
			<div className='default'>{featDescriptions.lookup(feat.name)}</div>
			<div className='default'>
				<b>Requirements</b>:
				<ul>
					<li>Adventurer Level {feat.trainingReqs.level}</li>
					<li>{feat.trainingReqs.slots} Training Slots</li>
					{feat.trainingReqs.clazz && <li>{feat.trainingReqs.clazz} Combat Class</li>}
					{Object.entries(feat.trainingReqs.stats).map((entry, index) => {
						const attr = attributes.lookup(entry[0]);
						const req = entry[1];
						return (
							<li key={index}>
								A {attr.name} attribute score of at least {req}.
							</li>
						);
					})}
					{featReqs.lookup(feat.name).reqs.map((req, index) => (
						<li key={index}>{req}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

const filterTypes = ["At Least", "Exactly", "At Most"] as const;
type FilterType = (typeof filterTypes)[number];

type FilterState = {
	word: string;
	featType?: FeatType;
	level: number;
	levelType: FilterType;
	slots: number;
	slotsType: FilterType;
	attr?: Attribute;
};

const defaultFilterState: FilterState = {
	word: "",
	featType: undefined,
	level: 1,
	levelType: "At Least",
	slots: maxFeatSlots,
	slotsType: "At Most",
	attr: undefined,
};

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
				placeholder='Filter by feat name'></input>
			<hr />
			<label>Filter by feat level: </label>
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
				{range(1, maxFeatSlots).map((value, index) => (
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
			<hr />
			<label>Filter by attribute: </label>
			<label>
				<input
					type='radio'
					value={undefined}
					onChange={() => setFilterState({...filterState, attr: undefined})}
					checked={filterState.attr === undefined}
				/>
				Any Attribute
			</label>
			{attributes.array.map((attr, index) => (
				<label key={index}>
					<input
						type='radio'
						value={attr.abbr}
						onChange={() => setFilterState({...filterState, attr})}
						checked={filterState.attr === attr}
					/>
					{attr.name}
				</label>
			))}

			{isDirty && <button onClick={resetForm}>Clear</button>}
		</form>
	);
}

export default function AppendixFeats() {
	const [filterState, setFilterState] = useState<FilterState>(defaultFilterState);

	function filter(feat: Feat): boolean {
		//TODO make description searchable
		const featSearchTerm = `${feat.name}`.toLowerCase();
		if (filterState.word && !featSearchTerm.includes(filterState.word.toLowerCase())) {
			return false;
		}

		if (filterState.featType && filterState.featType != feat.featType) {
			return false;
		}

		if (!satisfies(feat.level, filterState.level, filterState.levelType)) {
			return false;
		}

		const reqs = feat.trainingReqs;

		if (!satisfies(reqs.slots, filterState.slots, filterState.slotsType)) {
			return false;
		}

		if (filterState.attr) {
			const stat = getStat(reqs.stats, filterState.attr);
			if (stat === 0) return false;
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

	const featsRaw = feats.array.filter(filter);
	const featsByType: [FeatType, Feat[]][] = featTypes.array.map(featType => {
		const feats = featsRaw.filter(feat => feat.featType === featType);
		return [featType, feats];
	});

	return (
		<Appendix index={2}>
			<Collapsible text='Search'>
				<FilterForm filterState={filterState} setFilterState={setFilterState} />
			</Collapsible>
			{featsByType.map((entry, index) => {
				const type = entry[0];
				const feats = entry[1];
				const noFeats = feats.length == 0;

				return (
					<Section name={type.name} key={index}>
						<p>{type.description}</p>
						{noFeats ? <NoFeats /> : feats.map((feat, index2) => <FeatElement feat={feat} key={index2} />)}
					</Section>
				);
			})}
		</Appendix>
	);
}
