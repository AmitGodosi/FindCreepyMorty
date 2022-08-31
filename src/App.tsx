import { Routes, Route, Navigate } from 'react-router-dom';
import { RoutesNames, RoutesPath } from "./Routes/consts";
import MainPage from './pages/MainPage/MainPage';

function App() {
	return (
		<Routes>
			<Route path={RoutesPath.DEFAULT} element={<Navigate to={RoutesPath.HOME} replace />} />
			<Route path={RoutesPath.HOME} element={<MainPage activeTab={RoutesNames.HOME} />} />
			<Route path={RoutesPath.STATISTICS} element={<MainPage activeTab={RoutesNames.STATISTICS} />} />
		</Routes>
	);
}

export default App;
