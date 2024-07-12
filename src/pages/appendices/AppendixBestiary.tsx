import Appendix from "../../components/Appendix";
import {Plane, Spirit, planes, spirits, phyla, lookupGenera} from "../../concepts/bestiary";

function PlaneElement({plane}: {plane: Plane}): JSX.Element {
	return (
		<div className='background'>
			<h5>{plane.name}</h5>
			<p>{plane.description}</p>
		</div>
	);
}

function SpiritElement({spirit}: {spirit: Spirit}): JSX.Element {
	return (
		<p>
			{spirit.name} ({spirit.latin}): {spirit.description}
		</p>
	);
}

export default function AppendixWeapons() {
	return (
		<Appendix index={6}>
			<h4>The Planes of Existence</h4>
			<p>The world consists of the following planes:</p>
			{planes.array.map((plane, index) => (
				<PlaneElement plane={plane} key={index} />
			))}
			<h4>The Spirits of the Universe</h4>
			{spirits.array.map((spirit, index) => (
				<SpiritElement spirit={spirit} key={index} />
			))}
			<h4>The Categories of Monster and Beast</h4>
			{phyla.array.map((phylum, index) => (
				<div className='background' key={index}>
					<h5>{phylum.namePlural}</h5>
					<p>{phylum.description}</p>
					<p>Subcategories:</p>
					{lookupGenera(phylum).map((genus, index2) => (
						<p style={{marginLeft: "25px"}} key={index2}>
							<b>{genus.name}</b> ({`${phylum.latin} ${genus.latin}`}): {genus.description}
						</p>
					))}
				</div>
			))}
		</Appendix>
	);
}
