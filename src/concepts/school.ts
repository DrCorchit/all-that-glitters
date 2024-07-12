import schoolsJson from "../resources/magic/schools.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";
import {Attribute, attributes} from "./attribute";
import {Skill, skills} from "./skill";

export interface Study extends Keyword {
	school: string;
	adjective: string;
}

export interface School extends Keyword {
	attr: Attribute;
	skill: Skill;
	studies: Study[];
}

export const schools = new Source<School>(
	"Schools",
	schoolsJson.map(json => ({
		name: json.name,
		description: json.description,
		attr: attributes.lookup(json.attr),
		skill: skills.lookup(json.skill),
		studies: json.studies.map(study => ({
			school: json.name,
			...study,
		})),
	})),
	school => school.name
);

export const studies = new Source<Study>(
	"Studies",
	schools.array.flatMap(school => school.studies),
	study => study.name
);
