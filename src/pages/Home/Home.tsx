import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Table from "../../components/Table/Table";
import { axiosInstance } from "../../config";
import { Character } from "../../interface";
import "./Home.scss";

type Props = {
	location: string;
};

export default function Home({ location }: Props) {
	const [unpopularCharacters, setUnpopularCharacters] = useState<Character[]>([]);
	const [dimension, setDimension] = useState('');
	const [seeMore, setSeeMore] = useState(false);

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
				let foundCharacters: Character[] = [];
				charactersData?.forEach((character: Character) => {
					const { episode = [] } = character;
					if (episode?.length <= lessEpisodes) {
						lessEpisodes = episode.length;
						foundCharacters.push(character);
					}
				});
				const filteredFoundCharacters = foundCharacters?.filter((character: Character) => character?.episode?.length === foundCharacters[foundCharacters?.length - 1]?.episode?.length)
				setUnpopularCharacters(filteredFoundCharacters);
			}
		};
		fetchLocationData();
	}, [location]);

	return (
		<Grid className="home-page">
			<Grid className="table-wrapper" >
				{!seeMore && <Table character={unpopularCharacters[0]} dimension={dimension} />}
				{seeMore && unpopularCharacters?.map((character: Character) => {
					return (
						<Table isMultiple key={character?.name} character={character} dimension={dimension} />
					);
				})}
			</Grid>
			<button onClick={() => setSeeMore(prev => !prev)}>
				{seeMore ? 'See Less' : 'See More'}
			</button>
			<Grid className="img-container">
				<img src="rmbackground.png" alt="Rick&Morty" />
			</Grid>
		</Grid>
	);
}
