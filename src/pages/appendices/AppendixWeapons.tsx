import Appendix from "../../components/Appendix";
import {GlossaryElement} from "../../components/Glossary";
import {Table} from "../../components/Table";
import {WeaponType, weaponKeywords, weaponTypes} from "../../concepts/weapon";
import {weaponKeywordDescriptions} from "../../generated/weaponKeywordDescriptions";

const headers = ["Name", "Damage", "Price", "Modifiers", "Requirements", "Notes"];

function WeaponTable({type: weapons}: {type: WeaponType}): JSX.Element {
	return (
		<>
			<h4>{weapons.name}</h4>
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

export default function AppendixWeapons() {
	return (
		<Appendix index={3}>
			<h4>Weapon Modifiers</h4>
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
