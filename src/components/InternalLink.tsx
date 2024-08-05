import {ReactNode} from "react";
import {normalize} from "../utils/utils";
import {chapters} from "./ChapterInfo";
import {appendices} from "./AppendixInfo";
import {HashLink} from "react-router-hash-link";

export function SheetLink({children}: {children: ReactNode}) {
	return <HashLink to={"/sheet"}>{children}</HashLink>;
}

export function ChapterLink({
	chapter,
	target = "",
	rel,
	children,
}: {
	chapter: number;
	target?: string;
	rel?: "prev" | "next";
	children?: ReactNode;
}) {
	if (chapter <= 0 || chapter > chapters.array.length) {
		throw new Error("Chapter index out of range!");
	}

	const info = chapters.array[chapter - 1];
	const link = `/chapters/${info.index}#${target}`;
	let text;
	if (target) {
		text = target;
		target = normalize(target);
	} else {
		text = `Chapter ${info.index}`;
	}

	return (
		<HashLink to={link} rel={rel}>
			{children || text}
		</HashLink>
	);
}

export function AppendixLink({
	appendix,
	target = "",
	rel,
	children,
}: {
	appendix: number;
	target?: string;
	rel?: "prev" | "next";
	children?: ReactNode;
}) {
	if (appendix <= 0 || appendix > appendices.array.length) {
		throw new Error("Appendix index out of range!");
	}

	const info = appendices.array[appendix - 1];
	const link = `${info.link}#${target}`;

	let text;
	if (target) {
		text = target;
		target = normalize(target);
	} else {
		text = info.name;
	}

	return (
		<HashLink to={link} rel={rel}>
			{children || text}
		</HashLink>
	);
}
