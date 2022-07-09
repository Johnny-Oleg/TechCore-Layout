import React from 'react';
import { NavLink } from 'react-router-dom';

import dashboard from '../../../assets/images/menu-icons/dashboard.svg';
import dashboardActive from '../../../assets/images/menu-icons-active/dashboard-a.svg';
import users from '../../../assets/images/menu-icons/users.svg';
import usersActive from '../../../assets/images/menu-icons-active/users-a.svg';
import settings from '../../../assets/images/menu-icons/settings.svg';
import settingsActive from '../../../assets/images/menu-icons-active/settings-a.svg';
import folder from '../../../assets/images/menu-icons/folder.svg';
import folderActive from '../../../assets/images/menu-icons-active/folder-a.svg';
import vacation from '../../../assets/images/menu-icons/vacation.svg';
import vacationActive from '../../../assets/images/menu-icons-active/vacation-a.svg';
import style from './MenuNavbar.module.css';

const MenuNavbar = () => {
	return (
        <nav className={style.navbar}>
            <ul className={style.navbarMenu}>
                <li className={style.navbarMenuItem}>
                    <NavLink to="dashboard">
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
                    <NavLink to="users">
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
                    <NavLink to="settings">
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
                    <NavLink to="folder">
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
                    <NavLink to="vacation">
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
        </nav>
    )
}

export default MenuNavbar;