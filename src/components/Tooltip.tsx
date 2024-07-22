import {ReactElement, ReactNode} from "react";

export default function Tooltip({tip, children}: {tip: ReactNode; children: ReactNode}): ReactElement {
	return (
		<span className='tooltip'>
			{tip}
			<span>{children}</span>
		</span>
	);
}
