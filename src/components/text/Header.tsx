import {Line} from "../Line";

export function Header({children, id}: {children: string; id?: string}) {
	return (
		<>
			<h1
				id={id}
				style={{
					fontFamily: "Aboreto",
					fontSize: "20pt",
					color: "#ccc",
					margin: "20px 0 0 5px",
				}}>
				{children}
			</h1>
			<Line color='white' />
		</>
	);
}
