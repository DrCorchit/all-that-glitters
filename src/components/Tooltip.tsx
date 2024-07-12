import { ReactElement, ReactNode } from "react";

export default function Tooltip({
	tip,
	children,
}: {
	tip: ReactNode;
	children: ReactNode;
}): ReactElement {
	return (
		<a className='tooltip'>
			{tip}
			<span>{children}</span>
		</a>
	);
}
