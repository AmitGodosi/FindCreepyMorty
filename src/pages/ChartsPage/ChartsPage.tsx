import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Charts from "../../components/Charts/Charts";
import { axiosInstance } from "../../config";
import "./ChartsPage.scss";

export default function ChartsPage() {
	const [episodes, setEpisodes] = useState(0);
	useEffect(() => {
		const fetchAllEpisodes = async () => {
			const { data } = await axiosInstance.get("episode");
			const { info } = data || {};
			setEpisodes(info?.count);
		};
		fetchAllEpisodes();
	}, []);
	const CharactersForCharts = [
		"Rick Sanchez",
		"Summer Smith",
		"Morty Smith",
		"Beth Smith",
		"Jerry Smith",
	];
	return (
		<Grid className="charts-page">
			{CharactersForCharts.map((characterName: string) => {
				return (
					<Charts
						key={characterName}
						characterName={characterName}
						episodesLength={episodes}
					/>
				);
			})}
		</Grid>
	);
}
