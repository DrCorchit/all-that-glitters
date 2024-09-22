import {ReactNode} from "react";
import {normalize} from "../../utils/utils";
import {Header} from "./Header";

export default function Section({name, children}: {name: string; children: ReactNode}) {
	const id = normalize(name);

	return (
		<>
			<Header id={id}>{name}</Header>
			{children}
		</>
	);
}
