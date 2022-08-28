import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../Routes/consts'
import { AiOutlineHome, AiOutlineLineChart } from 'react-icons/ai'
import "./Navbar.scss";

export default function Navbar() {
	const { HOME, STATISTICS } = RoutesPath || {};
	return (
		<Grid className="navbar-container">
			<Link to={HOME} style={{ textDecoration: 'none', color: "white" }} ><AiOutlineHome className='side-icon' /></Link>
			<h4>RICK & MORTY</h4>
			<Link to={STATISTICS} style={{ textDecoration: 'none', color: "white" }} ><AiOutlineLineChart className='side-icon' /></Link>
		</Grid>
	);
}
