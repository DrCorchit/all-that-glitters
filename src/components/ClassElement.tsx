import {CombatClass} from "../concepts/combatClass";
import {normalize} from "../utils/utils";
import Collapsible from "./Collapsible";

export function ClassElement({clazz}: {clazz: CombatClass}): JSX.Element {
	const tag = normalize(clazz.name);
	const name = clazz.altName ? `${clazz.name} (${clazz.altName})` : clazz.name;

	return (
		<div className='background'>
			<div className='default'>
				<h5 id={tag}>{name}</h5>
				<p>{clazz.description}</p>
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
					<b>Limitations</b>: {clazz.limitations}
					<b>Leveling Bonuses</b>:
					{Object.entries(clazz.levelingBonuses).map((entry, index) => {
						const [level, bonus] = entry;
						return (
							<div className='default' key={index}>
								At level {level}, {bonus}
							</div>
						);
					})}
					<b>Starting Equipment</b>:
					{Object.entries(clazz.startingEquipment).map((container, index) => {
						return (
							<div className='default' key={index}>
								{container[0]}
								<ul>
									{container[1]!!.map((item, index2) => (
										<li key={index2}>{item}</li>
									))}
								</ul>
							</div>
						);
					})}
				</Collapsible>
			</div>
		</div>
	);
}
