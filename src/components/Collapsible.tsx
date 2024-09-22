import {ReactElement, ReactNode, useState} from "react";

export default function Collapsible({
	text,
	margin = 0,
	children,
}: {
	text: string;
	margin?: number;
	children: ReactNode;
}): ReactElement {
	const [isOpen, setIsOpen] = useState(false);
	const [hover, setHover] = useState(false);

	const marginStr = `${margin}px 0 ${margin}px 0`;
	const color = hover ? "#cca" : "#aaa";
	const backgroundColor = hover ? "#443" : "transparent";

	return (
		<div
			style={{
				margin: marginStr,
				padding: "5px",
				borderWidth: "1px",
				borderStyle: "solid",
				borderColor: "#30302a",
				backgroundColor: "#282828",
				borderRadius: "5px",
			}}>
			<button
				style={{
					fontFamily: "Aboreto",
					fontSize: "10pt",
					color: color,
					backgroundColor: backgroundColor,
					border: "none",
					borderRadius: "3px",
					margin: 0,
					padding: 0,
				}}
				onClick={() => setIsOpen(!isOpen)}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}>
				{text}
			</button>
			{isOpen && <div style={{marginTop: 10}}>{children}</div>}
		</div>
	);
}

// .collapsible {
// 	color: #aaa;
// 	cursor: pointer;
// 	padding: 0;
// 	font-family: "Aboreto";
// 	font-size: 14px;
// 	background-color: transparent;
// 	border: none;
// 	border-radius: 3px;
// }
// .collapsible:hover {
// 	color: #cca;
// 	background-color: #443;
// }
