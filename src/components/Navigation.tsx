import {ReactNode} from "react";
import {Link} from "react-router-dom";
import {Line} from "./Line";

type NavProps = {
	prev?: ReactNode;
	next?: ReactNode;
};

export default function Navigation({prev, next}: NavProps) {
	return (
		<>
			<Line color='yellow' />
			<div className='row' style={{margin: 0, justifyContent: "space-evenly"}}>
				{prev && <div className='column-shrink'>{prev}</div>}
				<div className='column-shrink'>
					<Link to='/chapters#top'>Back to the Table of Contents</Link>
				</div>
				{next && <div className='column-shrink'>{next}</div>}
			</div>
			<Line color='yellow' />
		</>
	);
}
