import { Grid } from "@material-ui/core";
import { Character } from "../../interface";
import TableRow from "./TableRow/TableRow";
import "./Table.scss";

type Props = {
	character: Character;
	dimension: string;
	isMultiple?: boolean;
};

export default function Table({ character, dimension, isMultiple }: Props) {
	const { name, origin, episode } = character || {};
	const popularityText = episode?.length === 1 ? 'Appears in 1 episode' : `Appears in ${episode?.length} episodes`
	return (
		<Grid className={isMultiple ? "table-container is-multiple" : "table-container"}>
			<Grid className="table-box">
				<TableRow text="Character Name" />
				<TableRow text={name} />
				<TableRow text="Origin Name" />
				<TableRow text={origin?.name} />
				<TableRow text="Origin Dimension" />
				<TableRow text={dimension} />
				<TableRow text="Popularity" />
				<TableRow text={popularityText} />
			</Grid>
		</Grid>
	);
}
