import { Grid } from "@material-ui/core";
import "./TableRow.scss";

type Props = {
	text?: string;
};

export default function TableRow({ text }: Props) {
	return (
		<Grid className="table-row">
			<p>{text}</p>
		</Grid>
	);
}
