import Appendix from "../../components/Appendix";
import {GlossaryElement} from "../../components/Glossary";
import {Table} from "../../components/Table";
import {Header} from "../../components/text/Header";
import {WeaponType, weaponKeywords, weaponTypes} from "../../concepts/weapon";
import {weaponKeywordDescriptions} from "../../generated/weaponKeywordDescriptions";
import {normalize} from "../../utils/utils";

const headers = ["Name", "Damage", "Price", "Modifiers", "Requirements", "Notes"];

function WeaponTable({type: weapons}: {type: WeaponType}): JSX.Element {
	return (
		<>
			<Header id={normalize(weapons.name)}>{weapons.name}</Header>
			<p>{weapons.description}</p>
			<Table
				headers={headers}
				data={weapons.weaponsArray}
				mapper={weapon => [
					weapon.name,
					weapon.damage.toString(),
					weapon.cost.toString(),
					weapon.modifiers.join(", "),
					weapon.requirements.join(", "),
					weapon.description,
				]}
			/>
		</>
	);
}

export function AppendixWeapons() {
	return (
		<Appendix index={3}>
			<Header id='modifiers'>Weapon Modifiers</Header>
			<p>Certain weapons have special properties, which affect how they behave:</p>
			{weaponKeywords.array.map((keyword, index) => (
				<GlossaryElement term={keyword} description={weaponKeywordDescriptions.lookup(keyword.name)} key={index} />
			))}
			{weaponTypes.array.map((type, index) => (
				<WeaponTable type={type} key={index} />
			))}
		</Appendix>
	);
}
