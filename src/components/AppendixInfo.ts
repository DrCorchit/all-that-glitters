import {replacers} from "../utils/replacer";
import Source from "../utils/source";

export interface AppendixInfo {
	index: number;
	name: string;
	link: string;
}

export const appendices = new Source<AppendixInfo>(
	"Appendices",
	[
		{index: 1, name: "Appendix: Spells", link: "/spells"},
		{index: 2, name: "Appendix: Feats", link: "/feats"},
		{index: 3, name: "Appendix: Weapons", link: "/weapons"},
		{index: 4, name: "Appendix: Armor & Materials", link: "/armor"},
		{index: 5, name: "Appendix: Mercantile Goods", link: "/items"},
		{index: 6, name: "Appendix: Bestiary", link: "/bestiary"},
	],
	appendix => appendix.link,
	(item, text) => `<AppendixLink appendix={${item.index}}>${text ?? item.name}</AppendixLink>`
);

replacers.push(appendices);
