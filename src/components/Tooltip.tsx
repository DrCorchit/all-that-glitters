import {ReactElement, ReactNode} from "react";

export default function Tooltip({tip, children}: {tip: ReactNode; children: ReactNode}): ReactElement {
	return (
		<div className='tooltip'>
			{tip}
			<span>{children}</span>
		</div>
	);
}
