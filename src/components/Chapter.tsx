import {ReactNode, useEffect} from "react";
import Navigation from "./Navigation";
import {chapters} from "./ChapterInfo";
import {ChapterLink} from "./InternalLink";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

function makeNavigation(index: number) {
	const prev = index > 1 && <ChapterLink chapter={index - 1}>Retreat to Chapter {index - 1}</ChapterLink>;
	const next = index < chapters.array.length && (
		<ChapterLink chapter={index + 1}>Advance to Chapter {index + 1}</ChapterLink>
	);
	return <Navigation prev={prev} next={next} />;
}

export default function Chapter({index, children}: {index: number; children?: ReactNode}) {
	const info = chapters.array[index - 1];
	useEffect(() => {
		document.title = info.name;
	});

	const nav = makeNavigation(info.index);

	return (
		<>
			<ScrollToHashElement />
			<h2>{`Chapter ${index}`}</h2>
			<h3>{info.name}</h3>
			{nav}
			{children}
			{nav}
		</>
	);
}
