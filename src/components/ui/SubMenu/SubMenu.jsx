import React from 'react';
import { NavLink } from 'react-router-dom';

import general from '../../../assets/images/menu-icons/settings-general.svg';
import generalActive from '../../../assets/images/menu-icons-active/settings-general-a.svg';
import manager from '../../../assets/images/menu-icons/vacation-manager.svg';
import managerActive from '../../../assets/images/menu-icons-active/vacation-manager-a.svg';
import style from './SubMenu.module.css';

const SubMenu = () => {
    return (
        <ul className={style.submenuList}>
            <li className={style.submenuListItem}>
                <NavLink to="general/subgeneral">
                    {({ isActive }) => (
                        <>
                            <img
                                className={style.listItemImg}
                                src={isActive ? generalActive : general}
                                alt="icon"
                            />
                            <p className={style.listItemText}>General</p>
                        </>
                    )}
                </NavLink>
            </li>
            <li className={style.submenuListItem}>
                <NavLink to="manager">
                    {({ isActive }) => (
                        <>
                            <img
                                className={style.listItemImg}
                                src={isActive ? managerActive : manager}
                                alt="icon"
                            />
                            <p className={style.listItemText}>
                                Vacation Manager
                            </p>
                        </>
                    )}
                </NavLink>
                <ul className={style.listItemSubmenu}>
                    <li className={style.listSubmenuItem}>
                        <NavLink 
                            to="manager/types"
                            style={({ isActive }) => ({
                                background: isActive ? '#EEF7FC' : 'transparent',
                            })}
                        >
                            <span>Leave Types</span>
                        </NavLink>
                    </li>
                    <li className={style.listSubmenuItem}>
                        <NavLink 
                            to="manager/locations"
                            style={({ isActive }) => ({
                                background: isActive ? '#EEF7FC' : 'transparent',
                            })}
                        >
                            <span>Locations</span>
                        </NavLink>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default SubMenu;