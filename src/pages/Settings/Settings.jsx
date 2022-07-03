import React from 'react';
import { Outlet } from 'react-router-dom';

import SubMenu from '../../components/ui/SubMenu/SubMenu';
import Switcher from '../../components/ui/Switcher/Switcher';
import icon from '../../assets/images/settings-a.svg';
import style from '../pages.module.css';

const Settings = () => {
	return (
        <div className={style.main}>
            <div className={style.switcher}>
                <Switcher />
            </div>
            <div className={style.submenu}>
                <h3 className={style.submenuTitle}>Settings</h3>
                <SubMenu />
            </div>
            <Outlet context={[{name: 'Settings', icon}]} />
        </div>
    )
}

export default Settings;