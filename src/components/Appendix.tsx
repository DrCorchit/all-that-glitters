import {ReactElement, ReactNode, useEffect} from "react";
import {appendices} from "./AppendixInfo";
import Navigation from "./Navigation";
import {AppendixLink} from "./InternalLink";

function makeNavigation(index: number): JSX.Element {
	const prev = index > 1 && <AppendixLink appendix={index - 1} rel='prev' />;
	const next = index < appendices.array.length && <AppendixLink appendix={index + 1} rel='next' />;
	return <Navigation prev={prev} next={next} />;
}

export default function Appendix({index, children}: {index: number; children: ReactNode}): ReactElement {
	const info = appendices.array[index - 1];

	useEffect(() => {
		document.title = info.name;
	});

	const nav = makeNavigation(info.index);

	return (
		<>
			<h3>{info.name}</h3>
			{nav}
			{children}
			{nav}
		</>
	);
}
