import {ReactNode} from "react";
import {normalize} from "../utils/utils";

export default function Section({name, children}: {name: string; children: ReactNode}) {
	const id = normalize(name);

	return (
		<>
			<h4 id={id}>{name}</h4>
			{children}
		</>
	);
}
