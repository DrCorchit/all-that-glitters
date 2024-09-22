import {Line} from "../Line";

export function Subheader({
	children,
	id,
	negateTopMargin = false,
}: {
	children: string;
	id?: string;
	negateTopMargin?: boolean;
}) {
	const margin = `${negateTopMargin ? "0px" : "20px"} 0 0 5px`;

	return (
		<>
			<h1
				id={id}
				style={{
					fontFamily: "Aboreto",
					fontSize: "14pt",
					color: "#aaa",
					margin: margin,
				}}>
				{children}
			</h1>
			<Line color='gray' />
		</>
	);
}
