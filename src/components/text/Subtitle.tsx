export function Subtitle({children, id}: {children: string; id?: string}) {
	return (
		<h1
			id={id}
			style={{
				fontFamily: "Aboreto",
				fontSize: "16pt",
				textAlign: "center",
				color: "#cb0",
				margin: "15px 0 15px 0",
			}}>
			{children}
		</h1>
	);
}
