import Appendix from "../../components/Appendix";
import {Table} from "../../components/Table";
import {armor} from "../../concepts/armor";
import {materials} from "../../concepts/material";

export default function AppendixWeapons() {
	return (
		<Appendix index={4}>
			<h4>Armor</h4>
			<p>
				Many forms of armor are available for the prospective adventurer. In general, nimble and dexterous characters such as thieves and assassins
				prefer leather armor or brigandine. Barbarians, mercenaries, inquisitors, and most others usually make use of medium armors, such as
				breastplate or chainmail. Knights, veterans, and crusaders often wear splinted mail or full plate, being stouter folk.
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
					`${armor.description} ${armor.effects.join(", ")}`,
				]}
			/>
			<h4>Materials</h4>
			<p>
				The stats given above are for steel armor. Some armors can be upgraded to rely on tougher metals such as titanium, orichalcum, adamantine, and
				mithril. These give better results but are significantly more expensive.
			</p>
			<Table
				headers={["Material", "Defense Bonus", "Cost Multiplier", "Weight Multiplier", "Description"]}
				data={materials.array}
				mapper={material => [material.name, `+${material.bc}`, material.cost + "x", material.weight + "x", material.description]}
			/>
		</Appendix>
	);
}
