import alignmentsJson from "../resources/sheet/alignments.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";

export interface Alignment extends Keyword {
	abbr: string;
}

const alignmnets = new Source<Alignment>("Alignments", alignmentsJson, alignment => alignment.abbr);
