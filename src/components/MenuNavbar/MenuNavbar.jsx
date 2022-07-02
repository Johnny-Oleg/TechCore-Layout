import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Users from '../../pages/Users/Users';
import Settings from '../../pages/Settings/Settings';
import Folder from '../../pages/Folder/Folder';
import Vacation from '../../pages/Vacation/Vacation';
import dashboard from '../../assets/images/dashboard.svg';
import dashboardActive from '../../assets/images/dashboard-a.svg';
import users from '../../assets/images/users.svg';
import usersActive from '../../assets/images/users-a.svg';
import settings from '../../assets/images/settings.svg';
import settingsActive from '../../assets/images/settings-a.svg';
import folder from '../../assets/images/folder.svg';
import folderActive from '../../assets/images/folder-a.svg';
import vacation from '../../assets/images/vacation.svg';
import vacationActive from '../../assets/images/vacation-a.svg';
import style from './MenuNavbar.module.css';

const MenuNavbar = () => {
	return (
        <nav className={style.navbar}>
            <ul className={style.navbarMenu}>
                <li className={style.navbarMenuItem}>
                    <NavLink to="/">
                        {({ isActive }) => (
                            <>
                                <img
                                    className={style.menuItemImg}
                                    src={isActive ? dashboardActive : dashboard}
                                    alt="icon"
                                />
                                <p className={style.menuItemText}>Dashboard</p>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className={style.navbarMenuItem}>
                    <NavLink to="/users">
                        {({ isActive }) => (
                            <>
                                <img
                                    className={style.menuItemImg}
                                    src={isActive ? usersActive : users}
                                    alt="icon"
                                />
                                <p className={style.menuItemText}>Users</p>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className={style.navbarMenuItem}>
                    <NavLink to="/settings">
                        {({ isActive }) => (
                            <>
                                <img
                                    className={style.menuItemImg}
                                    src={isActive ? settingsActive : settings}
                                    alt="icon"
                                />
                                <p className={style.menuItemText}>Settings</p>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className={style.navbarMenuItem}>
                    <NavLink to="/folder">
                        {({ isActive }) => (
                            <>
                                <img
                                    className={style.menuItemImg}
                                    src={isActive ? folderActive : folder}
                                    alt="icon"
                                />
                                <p className={style.menuItemText}>Folder</p>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className={style.navbarMenuItem}>
                    <NavLink to="/vacation">
                        {({ isActive }) => (
                            <>
                                <img
                                    className={style.menuItemImg}
                                    src={isActive ? vacationActive : vacation}
                                    alt="icon"
                                />
                                <p className={style.menuItemText}>Vacation Manager</p>
                            </>
                        )}
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/folder" element={<Folder />} />
                <Route path="/vacation" element={<Vacation />} />
            </Routes>
        </nav>
    )
}

export default MenuNavbar;