import planesJson from "../resources/bestiary/planes.json";
import spiritsJson from "../resources/bestiary/spirits.json";
import phylaJson from "../resources/bestiary/phyla.json";
import generaJson from "../resources/bestiary/genera.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";

export interface Plane extends Keyword {}

export const planes = new Source<Plane>(
	"Planes",
	planesJson,
	plane => plane.name,
	(plane, text) => `<Tooltip tip={${text ?? plane.name}}>${plane.description}</Tooltip>`
);

export interface Spirit extends Keyword {
	latin: string;
}

export const spirits = new Source<Spirit>(
	"Spirits",
	spiritsJson,
	spirit => spirit.name,
	(spirit, text) => `<Tooltip tip={${text ?? spirit.name}}>${spirit.description}</Tooltip>`
);

export interface Phylum extends Keyword {
	namePlural: string;
	latin: string;
}

export const phyla = new Source<Phylum>(
	"Phyla",
	phylaJson.map(json => ({
		...json,
		namePlural: json.namePlural ?? json.name + "s",
	})),
	phylum => phylum.latin,
	(phylum, text) => `<Tooltip tip={${text ?? phylum.name}}>${phylum.description}</Tooltip>`
);

export interface Genus extends Keyword {
	phylum: Phylum;
	latin: string;
}

export const genera = new Source<Genus>(
	"Genera",
	generaJson.map(json => ({
		...json,
		phylum: phyla.lookup(json.phylum),
	})),
	genus => genus.latin,
	(genus, text) => `<Tooltip tip={${text ?? genus.name}}>${genus.description}</Tooltip>`
);

export function lookupGenera(phylum: Phylum): Genus[] {
	return genera.array.filter(genus => genus.phylum === phylum);
}
