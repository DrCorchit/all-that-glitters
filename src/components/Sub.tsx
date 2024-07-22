import {ReactElement} from "react";
import {attributes} from "../concepts/attribute";
import Tooltip from "./Tooltip";
import {skills} from "../concepts/skill";

export default function Sub({attr, skill}: {attr?: string; skill?: string}): ReactElement {
	if (attr !== undefined) {
		const a = attributes.lookup(attr);
		return <b>{a.abbr}</b>;
	} else if (skill !== undefined) {
		const s = skills.lookup(skill);
		return <Tooltip tip={s.name}>{s.description}</Tooltip>;
	} else {
		throw new Error("No argument passed in to Sub element");
	}
}
