import {ReactNode} from "react";
import {normalize} from "../utils/utils";
import {chapters} from "./ChapterInfo";
import {appendices} from "./AppendixInfo";
import {Link} from "react-router-dom";

export function SheetLink({children}: {children: ReactNode}) {
	return <Link to={"/sheet"}>{children}</Link>;
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
	let text;
	if (target) {
		text = target;
		target = normalize(target);
	} else {
		text = `Chapter ${info.index}`;
	}

	const link = `/chapters/${info.index}#${target}`;
	return (
		<Link to={link} rel={rel}>
			{children || text}
		</Link>
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
		<Link to={link} rel={rel}>
			{children || text}
		</Link>
	);
}
