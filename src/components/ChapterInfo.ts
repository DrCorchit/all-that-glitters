import {replacers} from "../utils/replacer";
import Source from "../utils/source";

export interface ChapterInfo {
	index: number;
	name: string;
	sections: string[];
}

export const chapters = new Source<ChapterInfo>(
	"Chapters",
	[
		{
			index: 1,
			name: "How do I play the Game?",
			sections: ["Session Zero", "The Game Cycle", "Event Rolls", "Other Rules", "Glossary"],
		},
		{
			index: 2,
			name: "How do I create a Character?",
			sections: ["Races", "Classes", "Alignments", "Backstory", "Equipment"],
		},
		{
			index: 3,
			name: "What's on my Character Sheet?",
			sections: [
				"Character Information",
				"Combat Statistics",
				"Attributes",
				"Equipment",
				"Skills",
				"Spells & Abilities",
				"Backstory & Personality",
				"Inventory",
				"Putting it all Together",
			],
		},
		{
			index: 4,
			name: "How do I become Stronger?",
			sections: ["Leveling", "Training", "Looting"],
		},
		{
			index: 5,
			name: "How do I Fight?",
			sections: ["The Battlefield", "Beginning Combat", "Taking Actions", "Defeat", "Damage Types", "Status Effects"],
		},
		{
			index: 6,
			name: "What can I do besides fighting?",
			sections: [
				"Resting",
				"Working",
				"Traveling",
				"Mounts & Riding",
				"Swimming",
				"Falling",
				"Sneaking",
				"Pickpocketing",
				"Lockpicking",
				"Trading & Haggling",
			],
		},
		{
			index: 7,
			name: "How do I use Magic?",
			sections: ["Learning Spells", "Casting Spells", "Schools of Sorcery"],
		},
	],
	chapter => chapter.index.toString(),
	(item, text) => {
		const defaultName = "Chapter " + item.index;
		return `<ChapterLink chapter={${item.index}}>${text ?? defaultName}</ChapterLink>`;
	}
);

replacers.push(chapters);
