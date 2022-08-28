import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import { Character } from "../../interface";
import "./Charts.scss";

type Props = {
	characterName: string;
	episodesLength: number;
};

export default function Charts({ characterName, episodesLength }: Props) {
	const [selectedCharacter, setSelectedCharacter] = useState<Character>({});
	const [barHight, setbarHight] = useState("0%");
	const firstName = characterName.split(" ")[0];

	useEffect(() => {
		const fetchCharacterInfo = async () => {
			const { data } = await axiosInstance.get(
				`character/?name=${characterName}&status=alive`
			);
			const { results } = data || [];
			/* ----------------CHANGE TO REAL CHARACTER-----------------*/
			setSelectedCharacter(results[0]);
		};
		fetchCharacterInfo();
	}, [characterName]);

	useEffect(() => {
		const episodesAppears = selectedCharacter?.episode?.length || 0;
		const barFillHeight =
			Math.round((episodesAppears / episodesLength) * 100) + "%";
		setbarHight(barFillHeight);
	}, [selectedCharacter, episodesLength]);

	return (
		<Grid className="chart-content">
			<Grid className="chart-content-top">
				<img alt="character" src={`${firstName}.png`} />
				<Grid className="chart-bar">
					<Grid className="chart-bar__inner">
						<Grid
							className="chart-bar__fill"
							style={{ height: barHight }}
						></Grid>
					</Grid>
					<Grid className="chart-bar__label">{barHight}</Grid>
				</Grid>
			</Grid>
			<Grid className="chart-content-bottom">
				<p>{selectedCharacter?.name}</p>
			</Grid>
		</Grid>
	);
}
