import alignmentsJson from "../resources/sheet/alignments.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";

export interface Alignment extends Keyword {
	abbr: string;
}

export const alignments = new Source<Alignment>(
	"Alignments",
	alignmentsJson,
	alignment => alignment.abbr,
	alignment => alignment.name,
	(alignment, text) => text ?? alignment.name
);
