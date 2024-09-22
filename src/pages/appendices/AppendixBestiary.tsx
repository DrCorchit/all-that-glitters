import Appendix from "../../components/Appendix";
import {Header} from "../../components/text/Header";
import {Subheader} from "../../components/text/Subheader";
import {Plane, Spirit, planes, spirits, phyla, lookupGenera} from "../../concepts/bestiary";

function PlaneElement({plane}: {plane: Plane}): JSX.Element {
	return (
		<div className='background'>
			<Subheader>{plane.name}</Subheader>
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

export function AppendixBestiary() {
	return (
		<Appendix index={6}>
			<Header id='planes'>The Planes of Existence</Header>
			<p>The world consists of the following planes:</p>
			{planes.array.map((plane, index) => (
				<PlaneElement plane={plane} key={index} />
			))}
			<Header id='spirits'>The Spirits of the Universe</Header>
			{spirits.array.map((spirit, index) => (
				<SpiritElement spirit={spirit} key={index} />
			))}
			<Header id='bestiary'>The Categories of Monster and Beast</Header>
			{phyla.array.map((phylum, index) => (
				<div className='background' key={index}>
					<Subheader>{phylum.namePlural}</Subheader>
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
