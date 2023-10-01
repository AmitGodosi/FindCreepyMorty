import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { axiosInstance } from "../../config";
import { Character } from "../../interface";
import Table from "../../components/Table/Table";
import "./Home.scss";
import { fetchLocationData } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

type Props = {

};

export default function Home({ }: Props) {
	const [unpopularCharacters, setUnpopularCharacters] = useState<Character[]>([]);
	const [seeMore, setSeeMore] = useState(false);

	const { data, isPending, isError } = useQuery({
		queryKey: ['location'],
		queryFn: fetchLocationData
	})
	
	//if (data?.residents) {
	//	const characters: string[] = [];
	//	data?.residents?.forEach((resident: string) => {
	//		const residentSplited = resident.split("/");
	//		const residentID = residentSplited[residentSplited.length - 1];
	//		characters.push(residentID);

	//		/*----------FETCH CHARACTERS DATA----------*/
	//		const { data: charactersData } = await axiosInstance.get(
	//			`character/${characters}`
	//		);
	//		let lessEpisodes = Infinity;
	//		let foundCharacters: Character[] = [];
	//		charactersData?.forEach((character: Character) => {
	//			const { episode = [] } = character;
	//			if (episode?.length <= lessEpisodes) {
	//				lessEpisodes = episode.length;
	//				foundCharacters.push(character);
	//			}
	//		});
	//		const filteredFoundCharacters = foundCharacters?.filter((character: Character) => character?.episode?.length === foundCharacters[foundCharacters?.length - 1]?.episode?.length)
	//		setUnpopularCharacters(filteredFoundCharacters);
	//	});
	//}

	return (
		<Grid className="home-page">
			<Grid className="table-wrapper" >
				{seeMore ? unpopularCharacters?.map((character: Character) => {
					return (
						<Table isMultiple key={character?.name} character={character} dimension={data?.dimension} />
					);
				}) : (
						<Table character={unpopularCharacters?.[0]} dimension={isPending ? 'isPending' : data?.dimension} />
				)}
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
