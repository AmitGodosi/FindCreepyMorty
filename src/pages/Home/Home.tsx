import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";
import { axiosInstance } from "../../config";
import { Character } from "../../interface";
import "./Home.scss";

type Props = {
	location?: string;
};

export default function Home({ location }: Props) {
	const [unpopularCharacter, setUnpopularCharacter] = useState({});
	const [dimension, setDimension] = useState('');

	useEffect(() => {
		const fetchLocationData = async () => {
			/*----------FETCH LOCATION DATA----------*/
			const { data: locationData } = await axiosInstance.get(
				`location/?name=${location}`
			);
			const { results } = locationData || [];
			setDimension(results[0]?.dimension);
			const { residents } = results[0];
			const characters: string[] = [];
			if (residents) {
				residents?.forEach((resident: string) => {
					const residentSplited = resident.split("/");
					const residentID = residentSplited[residentSplited.length - 1];
					characters.push(residentID);
				});
				/*----------FETCH CHARACTERS DATA----------*/
				const { data: charactersData } = await axiosInstance.get(
					`character/${characters}`
				);
				let lessEpisodes = Infinity;
				let foundCharacter: Character = {};
				charactersData?.forEach((character: Character) => {
					const { episode = [] } = character;
					if (episode?.length < lessEpisodes) {
						lessEpisodes = episode.length;
						foundCharacter = character;
					}
				});
				setUnpopularCharacter(foundCharacter);
			}
		};
		fetchLocationData();
	}, [location]);

	return (
		<Grid className="home-page">
			<Navbar />
			<Grid className="page-content">
				<Table character={unpopularCharacter} dimension={dimension} />
				<Grid className="img-container">
					<img src="rmbackground.png" alt="Rick&Morty" />
				</Grid>
			</Grid>
		</Grid>
	);
}
