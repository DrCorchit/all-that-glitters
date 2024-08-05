import sizesJson from "../resources/sheet/sizes.json";
import {replacers} from "../utils/replacer";
import Source from "../utils/source";

export interface Size {
	name: string;
	maxHeight: number;
	tileSize: number;
	terminalVelocity: number;
	notes: string;
}

export const sizes = new Source<Size>(
	"Sizes",
	sizesJson,
	size => size.name,
	(size, text) => `<ChapterLink chapter={2} target='size'>${text ?? size.name}</ChapterLink>`
);

replacers.push(sizes);
