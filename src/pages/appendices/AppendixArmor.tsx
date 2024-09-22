import Appendix from "../../components/Appendix";
import {Table} from "../../components/Table";
import {Header} from "../../components/text/Header";
import {armor} from "../../concepts/armor";
import {materials} from "../../concepts/material";
import {armorEffects} from "../../generated/armorEffects";

export function AppendixArmor() {
	return (
		<Appendix index={4}>
			<Header id='armor'>Armor</Header>
			<p>
				Many forms of armor are available for the prospective adventurer. In general, nimble and dexterous characters
				such as thieves and assassins prefer leather armor or brigandine. Barbarians, mercenaries, inquisitors, and most
				others usually make use of medium armors, such as breastplate or chainmail. Knights, veterans, and crusaders
				often wear splinted mail or full plate, being stouter folk.
			</p>
			<Table
				headers={["Armor", "Block Chance", "Cost", "Weight", "Requirements", "Description"]}
				data={armor.array}
				mapper={armor => [
					armor.name,
					armor.bc.toString(),
					armor.cost.toString(),
					armor.weight + " lbs",
					armor.reqs.join(", "),
					<>
						{armor.description}
						<br />
						{armorEffects.lookup(armor.name)}
					</>,
				]}
			/>
			<Header id='materials'>Materials</Header>
			<p>
				The stats given above are for steel armor. Some armors can be upgraded to rely on tougher metals such as
				titanium, orichalcum, adamantine, and mithril. These give better results but are significantly more expensive.
			</p>
			<Table
				headers={["Material", "Defense Bonus", "Cost Multiplier", "Weight Multiplier", "Description"]}
				data={materials.array}
				mapper={material => [
					material.name,
					`+${material.bc}`,
					material.cost + "x",
					material.weight + "x",
					material.description,
				]}
			/>
		</Appendix>
	);
}
