import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppWrapper from './AppWrapper/AppWrapper';
import General from '../pages/General/General';
import LeaveTypes from '../pages/LeaveTypes/LeaveTypes';
import Locations from '../pages/Locations/Locations';
import SubGeneral from '../pages/SubGeneral/SubGeneral';
import VacationManager from '../pages/VacationManager/VacationManager';
import { routes } from '../route/routes';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/*" element={<AppWrapper />}>
				{routes.map(({ path, component, icon }) => (
					<Route path={`${path}`} element={component} key={path}>
						<Route path="general" element={<General />}>
							<Route path="subgeneral" element={<SubGeneral />}/>
						</Route>
						<Route path="manager" element={<VacationManager />}>
							<Route path="types" element={<LeaveTypes />}/>
							<Route path="locations" element={<Locations />}/>
						</Route>
					</Route>
				))}
			</Route>
		</Routes>
	)
}

export default AppRouter;