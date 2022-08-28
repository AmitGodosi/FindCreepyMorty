import { Grid } from "@material-ui/core";
import { Character } from "../../interface";
import TableRow from "./TableRow/TableRow";
import "./Table.scss";

type Props = {
	character: Character;
	dimension: string;
};

export default function Table({ character, dimension }: Props) {
	const { name, origin, episode } = character;

	return (
		<Grid className="table-container">
			<Grid className="table-box">
				<TableRow text="Character Name" />
				<TableRow text={name} />
				<TableRow text="Origin Name" />
				<TableRow text={origin?.name} />
				<TableRow text="Origin Dimension" />
				<TableRow text={dimension} />
				<TableRow text="Poplurity" />
				<TableRow text={`Appears in ${episode?.length} episodes`} />
			</Grid>
		</Grid>
	);
}
