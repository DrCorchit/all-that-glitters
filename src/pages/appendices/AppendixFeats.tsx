import Appendix from "../../components/Appendix";
import {FeatInfo, FeatJson, FeatTSX, featTypes} from "../../concepts/feat";
import {normalize, range, recordEquals} from "../../utils/utils";
import {feats} from "../../generated/feats";
import {AppendixLink} from "../../components/InternalLink";
import {useState} from "react";
import Collapsible from "../../components/Collapsible";
import Section from "../../components/Section";

function FeatElement({feat}: {feat: FeatTSX}): JSX.Element {
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
			<p>{feat.description}</p>
			<p>
				<b>Requirements</b>:
				<ul>
					<li>Adventurer Level {feat.trainingReqs.level}</li>
					<li>Training Slots: {feat.trainingReqs.slots}</li>
					{feat.trainingReqs.clazz && <li>Combat Class: {feat.trainingReqs.clazz}</li>}
					{Object.entries(feat.trainingReqs.stats).map((entry, index) => {
						return (
							<li key={index}>
								{entry[0].toUpperCase()}: {entry[1]}
							</li>
						);
					})}
					{feat.trainingReqs.feats.map((featName, index) => {
						const feat = feats.lookup(featName);
						return (
							<li key={index}>
								<AppendixLink appendix={2} target={normalize(feat.name)} />
							</li>
						);
					})}
				</ul>
			</p>
		</div>
	);
}

const filterTypes = ["At Least", "Exactly", "At Most"] as const;
type FilterType = (typeof filterTypes)[number];

type FilterState = {
	word: string;
	type: FilterType;
	level: number;
};

const defaultFilterState: FilterState = {word: "", type: "At Least", level: 1};

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
						onChange={() => setFilterState({...filterState, type: type})}
						checked={filterState.type === type}
					/>
					{type}
				</label>
			))}
			{isDirty && <button onClick={resetForm}>Clear</button>}
		</form>
	);
}

export default function AppendixFeats() {
	const [filterState, setFilterState] = useState<FilterState>(defaultFilterState);

	function filter(feat: FeatInfo): boolean {
		//TODO make description searchable
		//TODO filter by training slots
		const featSearchTerm = `${feat.name}`.toLowerCase();
		if (filterState.word && !featSearchTerm.includes(filterState.word.toLowerCase())) {
			return false;
		}

		switch (filterState.type) {
			case "At Most":
				return feat.level <= filterState.level;
			case "Exactly":
				return feat.level === filterState.level;
			case "At Least":
				return feat.level >= filterState.level;
		}
	}

	const featsRaw = feats.array.filter(filter);
	const featsByType = new Map(
		featTypes.array.map(featType => {
			const feats = featsRaw.filter(feat => feat.featType == featType);
			return [featType, feats];
		})
	);

	return (
		<Appendix index={2}>
			<Collapsible text='Search'>
				<FilterForm filterState={filterState} setFilterState={setFilterState} />
			</Collapsible>
			{featTypes.array.map((featType, index) => {
				const feats = featsByType.get(featType);
				return (
					<Section name={featType.name} key={index}>
						<p>{featType.description}</p>
						{feats?.map((feat, index2) => (
							<FeatElement feat={feat} key={index2} />
						))}
					</Section>
				);
			})}

			{feats.array.filter(filter).map((feat, index) => (
				<FeatElement feat={feat} key={index} />
			))}
		</Appendix>
	);
}
