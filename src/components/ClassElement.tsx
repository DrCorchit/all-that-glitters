import {CombatClass} from "../concepts/combatClass";
import {normalize} from "../utils/utils";
import Collapsible from "./Collapsible";

export function ClassElement({clazz}: {clazz: CombatClass}): JSX.Element {
	const tag = normalize(clazz.name);
	const name = clazz.altName ? `${clazz.name} (${clazz.altName})` : clazz.name;

	return (
		<div className='background'>
			<h5 id={tag}>{name}</h5>
			<p>While writing the backstory for a {clazz.name}, consider the following:</p>
			<ul>
				{clazz.backstoryPrompts.map((prompt, index) => (
					<li key={index}>{prompt}</li>
				))}
			</ul>
			{clazz.alignment && (
				<p>
					<b>Alignment Suggestion</b>: {clazz.alignment}
				</p>
			)}
			<p>
				<b>Core Ability</b>: <i>{clazz.coreAbilityName}</i>. {clazz.coreAbilityDescription}
			</p>
			<Collapsible text='Detailed Information'>
				<p>
					<b>Limitations</b>: {clazz.limitations}
				</p>
				<p>
					<b>Leveling Bonuses</b>:
				</p>
				{clazz.levelingBonuses}
				<p>
					<b>Starting Equipment</b>:
				</p>
				{clazz.startingEquipment}
			</Collapsible>
		</div>
	);
}
/*
<b>{entry[0]}</b>
						<ul>
							{entry[1].map((item, index2) => (
								<li key={index2}>{item}</li>
							))}
						</ul>
						*/
