import schoolsJson from "../resources/magic/schools.json";
import {Keyword} from "../utils/keyword";
import Source from "../utils/source";
import {Attribute, attributes} from "./attribute";
import {Skill, skills} from "./skill";

export class Study implements Keyword {
	name: string;
	description: string;
	schoolName: string;
	adjective: string;

	constructor(name: string, description: string, schoolName: string, adjective: string) {
		this.name = name;
		this.description = description;
		(this.schoolName = schoolName), (this.adjective = adjective);
	}

	school(): School {
		return schools.lookup(this.schoolName);
	}
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
		studies: json.studies.map(study => new Study(study.name, study.description, json.name, study.adjective)),
	})),
	school => school.name,
	(school, text) => `<Tooltip tip={${text ?? school.name}}>${school.description}</Tooltip>`
);

export const studies = new Source<Study>(
	"Studies",
	schools.array.flatMap(school => school.studies),
	study => study.name,
	(study, text) => `<Tooltip tip={${text ?? study.name}}>${study.description}</Tooltip>`
);
