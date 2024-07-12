import Appendix from "../../components/Appendix";
import {Feat, feats} from "../../concepts/feats";
import {normalize} from "../../utils/utils";

function FeatElement({feat}: {feat: Feat}): JSX.Element {
	return (
		<div className='background'>
			<h5 id={normalize(feat.name)}>{feat.name}</h5>
			<p>
				<b>Requirements</b>: {feat.reqs.join(", ")}
			</p>
			<p>
				<b>Training Slots</b>: {feat.slots}
			</p>
			<p>{feat.description}</p>
		</div>
	);
}

export default function AppendixFeats() {
	return (
		<Appendix index={2}>
			{feats.map((featSource, index) => (
				<div key={index}>
					<h4>{featSource.name}</h4>
					{featSource.array.map((feat, index2) => (
						<FeatElement feat={feat} key={index2} />
					))}
				</div>
			))}
		</Appendix>
	);
}
