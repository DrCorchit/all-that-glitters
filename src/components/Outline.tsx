import {Link} from "react-router-dom";
import {normalize} from "../utils/utils";

export default function Outline({pathname, sections}: {pathname?: string; sections: string[]}) {
	const links = sections.map((name, index) => {
		const hash = normalize(name);
		return (
			<li key={index}>
				<Link to={{pathname: pathname, hash: hash}}>{name}</Link>
			</li>
		);
	});

	return <ol>{links}</ol>;
}
