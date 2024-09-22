export function Title({children, id}: {children: string; id?: string}) {
	return (
		<h1
			id={id}
			style={{
				fontFamily: "Aboreto",
				fontSize: "24pt",
				textAlign: "center",
				color: "#cb0",
				margin: "10px 0 10px 0",
			}}>
			{children}
		</h1>
	);
}
