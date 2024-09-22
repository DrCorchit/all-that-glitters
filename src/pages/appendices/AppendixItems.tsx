import Appendix from "../../components/Appendix";
import {Header} from "../../components/text/Header";
import {Subheader} from "../../components/text/Subheader";
import {Item, itemCategories} from "../../concepts/item";

function ItemElement({item}: {item: Item}): JSX.Element {
	return (
		<div className='background' style={{margin: "5px", width: "200px", flex: "0 0 auto"}}>
			<Subheader>{item.name}</Subheader>
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

export function AppendixItems() {
	return (
		<Appendix index={5}>
			{itemCategories.array.map((category, index) => {
				return (
					<div key={index}>
						<Header>{category.name}</Header>
						<div className='row' style={{justifyItems: "start", flexWrap: "wrap", margin: 0}}>
							{category.items.map((item, index2) => (
								<ItemElement item={item} key={index2} />
							))}
						</div>
					</div>
				);
			})}
		</Appendix>
	);
}
