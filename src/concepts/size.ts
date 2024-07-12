import sizesJson from "../resources/sheet/sizes.json";
import Source from "../utils/source";

export interface Size {
	name: string;
	maxHeight: number;
	tileSize: number;
	terminalVelocity: number;
	notes: string;
}

export const sizes = new Source<Size>("Sizes", sizesJson, size => size.name);
