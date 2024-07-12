import {Skill, skills} from "../concepts/skill";

const Info = () => {
	return (
		<table className='inner'>
			<tbody>
				<tr>
					<td colSpan={2}>Name:</td>
				</tr>
				<tr>
					<td style={{width: "60%"}}>Class:</td>
					<td>Level:</td>
				</tr>
				<tr>
					<td>Race:</td>
					<td>Alignment:</td>
				</tr>
			</tbody>
		</table>
	);
};

const Statistics = () => {
	return (
		<table className='inner'>
			<tbody>
				<tr>
					<td>HP:&emsp;&emsp;&emsp;/&emsp;&emsp;&emsp;</td>
					<td className='noborder' style={{color: "$888"}}>
						Block + Dodge = Mitigation
					</td>
				</tr>
				<tr>
					<td>WP:&emsp;&emsp;&emsp;/</td>
					<td>&emsp;&emsp;&ensp;+&emsp;&emsp;&emsp;=</td>
				</tr>
				<tr>
					<td>Status:</td>
					<td>Training Slots:&emsp;&emsp;&emsp;/</td>
				</tr>
			</tbody>
		</table>
	);
};

const Attributes = () => {
	return (
		<table className='inner'>
			<tbody>
				<tr>
					<td className='image'>
						<img src='/images/badge.png' alt='STR' />
						<div>Strength</div>
					</td>
					<td className='image'>
						<img src='/images/badge.png' alt='DEX' />
						<div>Speed</div>
					</td>
					<td className='image'>
						<img src='/images/badge.png' alt='SPD' />
						<div>Dexterity</div>
					</td>
				</tr>
				<tr>
					<td className='image'>
						<img src='/images/badge.png' alt='INT' />
						<div>Intelligence</div>
					</td>
					<td className='image'>
						<img src='/images/badge.png' alt='NST' />
						<div>Instinct</div>
					</td>
					<td className='image'>
						<img src='/images/badge.png' alt='WILL' />
						<div>Charisma</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

const Equipment = () => {
	return (
		<table className='inner'>
			<tbody>
				<tr>
					<th style={{border: "none", width: "80px"}}></th>
					<th className='subheader'>Main Hand</th>
					<th className='subheader'>Offhand</th>
				</tr>
				<tr>
					<td colSpan={2}>Name:</td>
					<td>
						<br />
					</td>
				</tr>
				<tr>
					<td colSpan={2}>Damage:</td>
					<td>
						<br />
					</td>
				</tr>
				<tr>
					<td colSpan={2}>Modifiers:</td>
					<td>
						<br />
					</td>
				</tr>
				<tr>
					<td colSpan={2}>
						<br />
					</td>
					<td>
						<br />
					</td>
				</tr>
				<tr>
					<th colSpan={3}>Armor</th>
				</tr>
				<tr>
					<td colSpan={2}>Name:</td>
					<td>Block:</td>
				</tr>
			</tbody>
		</table>
	);
};

const SkillEntry = ({skill}: {skill: Skill}) => {
	return (
		<tr>
			<td className='noborder'>
				{skill.name}
				<span style={{color: "#888", float: "right"}}>({skill.attrs.map(attr => attr.abbr).join("/")})</span>
			</td>
			<td></td>
			<td>+</td>
			<td>=</td>
		</tr>
	);
};

const SkillEntries = () => {
	return (
		<table
			className='inner'
			style={{
				background: "white url(/images/warrior.png) no-repeat bottom left",
				backgroundSize: "50%",
			}}>
			<thead>
				<tr>
					<th className='subheader'>Skill</th>
					<th className='subheader'>Base</th>
					<th className='subheader'>Bonuses</th>
					<th className='subheader'>Total</th>
				</tr>
			</thead>
			<tbody>
				{skills.array.map((skill, index) => {
					return <SkillEntry key={index} skill={skill} />;
				})}
			</tbody>
		</table>
	);
};

const Abilities = () => {
	return (
		<table
			className='inner'
			style={{
				background: "white url(/images/books.png) no-repeat bottom",
				backgroundSize: "100%",
			}}>
			<thead>
				<tr>
					<th className='subheader' style={{width: "40%"}}>
						Ability
					</th>
					<th className='subheader' style={{width: "10%"}}>
						Slots
					</th>
					<th className='subheader' style={{width: "40%"}}>
						Ability
					</th>
					<th className='subheader' style={{width: "10%"}}>
						Slots
					</th>
				</tr>
			</thead>
			<tbody>
				{skills.array.map((_, index) => {
					return (
						<tr key={index}>
							<td>
								<br />
							</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

const EmptyRow = () => {
	return (
		<tr>
			<td colSpan={3}>
				<br />
			</td>
			<td>
				<br />
			</td>
		</tr>
	);
};

const Sheet = () => {
	return (
		<div className='sheet'>
			<p
				style={{
					color: "black",
					margin: "0",
					padding: "10px",
					textAlign: "center",
					fontFamily: "Jim Nightshade",
					fontSize: "20pt",
					fontWeight: "bold",
					background: "transparent url(/images/header.png) no-repeat bottom right",
					backgroundSize: "100%",
				}}>
				All That Glitters — Character Sheet
			</p>
			<table
				className='sheet'
				style={{
					background: "transparent url(/images/scene.png) no-repeat bottom right",
					backgroundSize: "100%",
				}}>
				<tbody>
					<tr>
						<td colSpan={3} className='border' style={{width: "50%"}}>
							<Info />
						</td>
						<td className='border' style={{verticalAlign: "bottom", width: "50%"}}>
							<Statistics />
						</td>
					</tr>
					<tr>
						<th colSpan={3}>Attributes</th>
						<th>Equipment</th>
					</tr>
					<tr>
						<td colSpan={3} className='noborder'>
							<Attributes />
						</td>
						<td className='noborder'>
							<Equipment />
						</td>
					</tr>
					<tr>
						<th colSpan={3} style={{width: "50%"}}>
							Skills
						</th>
						<th style={{width: "50%"}}>Spells &amp; Abilities</th>
					</tr>
					<tr>
						<td colSpan={3} className='border'>
							<SkillEntries />
						</td>
						<td className='border'>
							<Abilities />
						</td>
					</tr>
					<tr>
						<th colSpan={3}>Backstory &amp; Personality</th>
						<th>Inventory</th>
					</tr>
					<EmptyRow />
					<EmptyRow />
					<EmptyRow />
					<EmptyRow />
					<EmptyRow />
					<EmptyRow />
					<EmptyRow />
					<EmptyRow />
					<EmptyRow />
					<EmptyRow />
				</tbody>
			</table>
		</div>
	);
};

export default Sheet;
