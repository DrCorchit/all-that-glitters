import {range} from "../utils/utils";
import {Header} from "./Sheet";
import {Helmet} from "react-helmet";
function repeat(n: number, element: (n: number) => JSX.Element): JSX.Element {
	return <>{range(0, n).map(n => element(n))}</>;
}

function EmptyRow({columns = 1}: {columns?: number}) {
	return (
		<tr>
			{repeat(columns, n => (
				<td key={n}>
					<br />
				</td>
			))}
		</tr>
	);
}

export function SheetPage2(): JSX.Element {
	return (
		<div className='sheet' style={{display: "table", height: "100%", margin: "auto"}}>
			<Helmet>
				<style>{"body { background-color: white; }"}</style>
			</Helmet>
			<Header />
			<table className='sheet'>
				<tbody>
					<tr>
						<th>Active Effects</th>
					</tr>
					<tr>
						<table className='inner'>
							<thead>
								<tr>
									<th className='subheader' style={{width: "35%"}}>
										Effect
									</th>
									<th className='subheader' style={{width: "15%"}}>
										Duration
									</th>
									<th className='subheader' style={{width: "35%"}}>
										Effect
									</th>
									<th className='subheader' style={{width: "15%"}}>
										Duration
									</th>
								</tr>
							</thead>
							<tbody>
								{repeat(4, n => (
									<EmptyRow columns={4} key={n} />
								))}
							</tbody>
						</table>
					</tr>
					<tr>
						<th>Spells &amp; Abilities</th>
					</tr>
					<tr>
						<table className='inner'>
							<thead>
								<tr>
									<th className='subheader'>Ability</th>
									<th className='subheader'>Slots</th>
									<th className='subheader'>Ability</th>
									<th className='subheader'>Slots</th>
									<th className='subheader'>Ability</th>
									<th className='subheader'>Slots</th>
								</tr>
							</thead>
							<tbody>
								{repeat(8, n => (
									<EmptyRow columns={6} key={n} />
								))}
							</tbody>
						</table>
					</tr>
					<tr>
						<th>Inventory</th>
					</tr>
					{repeat(11, n => (
						<EmptyRow key={n} />
					))}
					<tr>
						<th>Notes</th>
					</tr>
					{repeat(11, n => (
						<EmptyRow key={n} />
					))}
				</tbody>
			</table>
		</div>
	);
}
