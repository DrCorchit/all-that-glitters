import skillsJson from "../resources/sheet/skills.json";
import {Keyword} from "../utils/keyword";
import {replacers} from "../utils/replacer";
import Source from "../utils/source";
import {Attribute, attributes} from "./attribute";

export interface Skill extends Keyword {
	attrs: Attribute[];
}

export const skills = new Source<Skill>(
	"Skills",
	skillsJson.map(json => ({
		name: json.name,
		description: json.description,
		attrs: json.attrs.map(attr => attributes.lookup(attr)),
	})),
	skill => skill.name,
	skill => `<Sub skill="${skill.name}" />`
);

replacers.push(skills);
