export function TableBody({data}: {data: string[][]}): JSX.Element {
	return (
		<tbody>
			{data.map((row, index) => (
				<tr key={index}>
					{row.map((item, index2) => (
						<td key={index2}>{item}</td>
					))}
				</tr>
			))}
		</tbody>
	);
}

export function Table<T>({
	headers,
	data,
	mapper,
}: {
	headers: string[];
	data: T[];
	mapper: (item: T) => string[];
}): JSX.Element {
	return (
		<table className='default'>
			{headers.length > 0 && (
				<thead>
					<tr>
						{headers.map((str, index) => (
							<th key={index}>{str}</th>
						))}
					</tr>
				</thead>
			)}
			<TableBody data={data.map(mapper)} />
		</table>
	);
}
