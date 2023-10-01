import { Component } from 'react'
import { RoutesNames } from '../../Routes/consts';
import { Grid } from '@material-ui/core';
import { LOCATION } from '../../config';
import Home from '../Home/Home';
import ChartsPage from '../ChartsPage/ChartsPage';
import Navbar from '../../components/Navbar/Navbar';
import './MainPage.scss'

type Props = {
	activeTab: string;
}

export default class MainPage extends Component<Props> {
	renderPageContent() {
		const { activeTab } = this.props;
		const { HOME, STATISTICS } = RoutesNames;
		return {
			//[HOME]: () => <Home location={LOCATION} />,
			[HOME]: () => <Home />,
			[STATISTICS]: () => <ChartsPage />,
		}[activeTab]();
	}

	render() {
		return (
			<Grid className="main-page-container">
				<Grid className="navbar"><Navbar /></Grid>
				<Grid className="page-content">{this.renderPageContent()}</Grid>
			</Grid>
		)
	}
}