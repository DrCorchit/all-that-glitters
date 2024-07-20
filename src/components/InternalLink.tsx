import {ReactNode} from "react";
import {normalize} from "../utils/utils";
import {chapters} from "./ChapterInfo";
import {appendices} from "./AppendixInfo";
import {Link} from "react-router-dom";

export function ChapterLink({chapter, section, rel, children}: {chapter: number; section?: number; rel?: string; children?: ReactNode}) {
	if (chapter <= 0 || chapter > chapters.length) {
		throw new Error("Chapter index out of range!");
	}

	const info = chapters[chapter - 1];
	const link = `/chapters/${info.index}`;
	let text, hash;
	if (section !== undefined) {
		text = info.sections[section - 1];
		hash = normalize(text);
	} else {
		text = `Chapter ${info.index}`;
		hash = undefined;
	}

	return (
		<Link to={{pathname: link, hash: hash}} rel={rel}>
			{children || text}
		</Link>
	);
}

export function AppendixLink({appendix, target, rel, children}: {appendix: number; target?: string; rel?: string; children?: ReactNode}) {
	if (appendix <= 0 || appendix > appendices.length) {
		throw new Error("Appendix index out of range!");
	}

	const info = appendices[appendix - 1];
	const hash = target === undefined ? undefined : normalize(target);
	return (
		<Link to={{pathname: info.link, hash: hash}} rel={rel}>
			{children || info.name}
		</Link>
	);
}
