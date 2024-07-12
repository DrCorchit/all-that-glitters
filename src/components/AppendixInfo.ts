export interface AppendixInfo {
	index: number;
	name: string;
	link: string;
}

export const appendices: AppendixInfo[] = [
	{index: 1, name: "Appendix: Spells", link: "/spells"},
	{index: 2, name: "Appendix: Abilities", link: "/abilities"},
	{index: 3, name: "Appendix: Weapons", link: "/weapons"},
	{index: 4, name: "Appendix: Armor & Materials", link: "/armor"},
	{index: 5, name: "Appendix: Mercantile Goods", link: "/items"},
	{index: 6, name: "Appendix: Bestiary", link: "/bestiary"},
];
