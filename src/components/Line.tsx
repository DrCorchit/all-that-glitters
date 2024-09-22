import {ReactNode} from "react";

const colors = {
	white: "#CCC",
	gray: "#AAA",
	gold: "#AA8",
	yellow: "#CB0",
} as const;

export type LineColor = keyof typeof colors;

export function Line({color = "yellow", margin = 3}: {color: LineColor; margin?: number}): ReactNode {
	return (
		<div
			style={{
				marginTop: margin,
				marginBottom: margin,
				borderTopWidth: 1,
				borderTopColor: colors[color],
				borderTopStyle: "solid",
			}}
		/>
	);
}
