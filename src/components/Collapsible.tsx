import { ReactElement, ReactNode, useState } from "react";

export default function Collapsible({
	text,
	children,
}: {
	text: string;
	children: ReactNode;
}): ReactElement {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className='background-inner'>
			<button className='collapsible' onClick={() => setIsOpen(!isOpen)}>
				{text}
			</button>
			{isOpen && <div style={{ marginTop: 10 }}>{children}</div>}
		</div>
	);
}
