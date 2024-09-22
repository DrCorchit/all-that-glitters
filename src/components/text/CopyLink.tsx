import {ReactElement, useState} from "react";

export function CopyLink({link, id, children}: {link: string; id: string; children: string}): ReactElement {
	const [hover, setHover] = useState(false);
	const color = hover ? "#fff" : "#aaa";

	return (
		<>
			<button
				style={{
					fontFamily: "Aboreto",
					fontSize: "14pt",
					fontWeight: "bold",
					color: color,
					backgroundColor: "transparent",
					border: "none",
				}}
				id={id}
				onClick={() => {
					const text = `https://all-that-glitters.net/${link}#${id}`;
					navigator.clipboard.writeText(text);
				}}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}>
				{children}
			</button>
			{hover && <img src='images/link.png' alt='link' width='12px' height='12px' />}
		</>
	);
}

// button.h1 {
// 	font-family: "Aboreto";
// 	color: #aaa;
// 	background-color: transparent;
// 	font-size: 14pt;
// 	font-weight: bold;
// 	border: none;
// }
// button.h1:hover {
// 	color: #fff;
// }
// button.h1:hover:after {
// 	content: url("../images/link.png");
// 	width: 20px;
// 	height: 20px;
// }
