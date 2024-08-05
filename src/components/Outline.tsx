import {normalize} from "../utils/utils";
import {HashLink} from "react-router-hash-link";

export default function Outline({pathname, sections}: {pathname?: string; sections: string[]}) {
	const links = sections.map((name, index) => {
		const link = `${pathname}#${normalize(name)}`;
		return (
			<li key={index}>
				<HashLink to={link}>{name}</HashLink>
			</li>
		);
	});

	return <ol>{links}</ol>;
}
