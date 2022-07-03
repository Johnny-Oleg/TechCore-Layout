import React from 'react';
import { Outlet } from 'react-router-dom';

import Menu from '../Menu/Menu';

const AppWrapper = () => {
	return (
		<div className="appWrapper">
			<Menu />
			<Outlet />
		</div>
	)
}

export default AppWrapper;