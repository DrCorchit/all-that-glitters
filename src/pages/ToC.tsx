import {appendices} from "../components/AppendixInfo";
import {ChapterInfo, chapters} from "../components/ChapterInfo";
import {ChapterLink, AppendixLink} from "../components/InternalLink";
import {range} from "../utils/utils";

function TocEntry({chapter}: {chapter: ChapterInfo}) {
	return (
		<li>
			<ChapterLink chapter={chapter.index}>{chapter.name}</ChapterLink>
			<ol type='i'>
				{range(1, chapter.sections.length).map((index, index2) => {
					return (
						<li key={index2}>
							<ChapterLink chapter={chapter.index} section={index} />
						</li>
					);
				})}
			</ol>
		</li>
	);
}

export default function ToC() {
	return (
		<>
			<h1>All That Glitters</h1>
			<h2>Player's Handbook</h2>
			<p>This guide is designed for players new to TTRPGs. If you're an experienced player, I suggest skipping the first chapter.</p>
			<ol>
				{chapters.array.map((chapter, index) => (
					<TocEntry chapter={chapter} key={index} />
				))}
				<li>
					Appendices
					<ol type='i'>
						{appendices.array.map((appendix, index) => (
							<li key={index}>
								<AppendixLink appendix={appendix.index} />
							</li>
						))}
					</ol>
				</li>
			</ol>
		</>
	);
}
