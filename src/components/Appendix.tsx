import {ReactElement, ReactNode, useEffect} from "react";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
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
			<ScrollToHashElement />
			<h3 id='top'>{info.name}</h3>
			{nav}
			{children}
			{nav}
		</>
	);
}
