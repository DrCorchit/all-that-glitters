import {CombatClass} from "../concepts/combatClass";
import {classDescriptions} from "../generated/classDescriptions";
import {coreAbilityDescriptions} from "../generated/coreAbilityDescriptions";
import {levelingBonuses} from "../generated/levelingBonuses";
import {startingEquipment} from "../generated/startingEquipment";
import {normalize} from "../utils/utils";
import Collapsible from "./Collapsible";
import {Subheader} from "./text/Subheader";

export function ClassElement({clazz}: {clazz: CombatClass}): JSX.Element {
	const tag = normalize(clazz.name);
	const name = clazz.altName ? `${clazz.name} (${clazz.altName})` : clazz.name;
	const bonuses = levelingBonuses.lookup(clazz.name);
	const inventory = startingEquipment.lookup(clazz.name);

	return (
		<div className='background'>
			<div className='default'>
				<Subheader id={tag} negateTopMargin>
					{name}
				</Subheader>
				{classDescriptions.lookup(clazz.name)}
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
				<b>Core Ability</b>: <i>{clazz.coreAbilityName}</i>. {coreAbilityDescriptions.lookup(clazz.name)}
				<Collapsible text='Detailed Information' margin={5}>
					<p>
						<b>Limitations</b>: {clazz.limitations}
					</p>
					<label>
						<b>Leveling Bonuses</b>:
					</label>
					{Object.entries(bonuses).map((entry, index) => {
						const [level, bonus] = entry;
						return (
							<div className='default' style={{margin: "5px 0 10px 10px"}} key={index}>
								At level {level}, {bonus}
							</div>
						);
					})}
					<b>Starting Equipment</b>:
					<ul>
						{inventory.loose.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					{inventory.containers.map((container, index) => {
						return (
							<div className='default' key={index}>
								{container.label}
								<ul>
									{container.contents.map((item, index2) => (
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
