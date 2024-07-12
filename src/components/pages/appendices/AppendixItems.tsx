import {Item, itemCategories} from "../../../concepts/items";
import Appendix from "../../Appendix";

function ItemElement({item}: {item: Item}): JSX.Element {
	return (
		<div className='background' style={{margin: "5px", width: "200px", flex: "0 0 auto"}}>
			<h5>{item.name}</h5>
			<p>{item.description}</p>
			<p>
				<b>Price</b>: {item.cost}
				{item.weight > 0 && (
					<>
						{" "}
						<b>Weight</b>: {item.weight} lbs
					</>
				)}
			</p>
		</div>
	);
}

export default function AppendixWeapons() {
	return (
		<Appendix index={5}>
			{itemCategories.array.map((category, index) => {
				return (
					<>
						<h4 key={index}>{category.name}</h4>
						<div className='row' style={{justifyItems: "start", flexWrap: "wrap", margin: 0}}>
							{category.items.map(item => (
								<ItemElement item={item} />
							))}
						</div>
					</>
				);
			})}
		</Appendix>
	);
}
