import {ReactNode, useEffect} from "react";
import Navigation from "./Navigation";
import {chapters} from "./ChapterInfo";
import {ChapterLink} from "./InternalLink";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import {Title} from "./text/Title";
import {Subtitle} from "./text/Subtitle";

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
			<Subtitle id='top'>{`Chapter ${index}`}</Subtitle>
			<Title>{info.name}</Title>
			{nav}
			{children}
			{nav}
		</>
	);
}
