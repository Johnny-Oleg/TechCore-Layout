import React from 'react';

import general from '../../assets/images/settings-general.svg';
import manager from '../../assets/images/vacation-manager.svg';
import style from './SubMenu.module.css';

const SubMenu = () => {
	return (
        <ul className={style.submenuList}>
            <li className={style.submenuListItem}>
                <img className={style.listItemImg} src={general} alt="icon" />
                <p className={style.listItemText}>General</p>
            </li>
            <li className={style.submenuListItem}>
                <img className={style.listItemImg} src={manager} alt="icon" />
                <p className={`${style.listItemText} ${style.active}`}>Vacation Manager</p>
                <ul className={style.listItemSubmenu}>
                    <li className={style.listSubmenuItem}>
                        <span>Leave Types</span>
                    </li>
                    <li className={style.listSubmenuItem}>
                        <span className={`${style.active}`}>Locations</span>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default SubMenu;