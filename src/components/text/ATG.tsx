import {ReactNode} from "react";

export function ATG({children = "All That Glitters", id = "top"}: {children?: string; id?: string}): ReactNode {
	return (
		<h1
			style={{fontFamily: "Almendra Display", fontSize: "36pt", textAlign: "center", color: "#cb0", margin: "20px 0"}}>
			{children}
		</h1>
	);
}
