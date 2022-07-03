import React from 'react';
import { Outlet } from 'react-router-dom';

import SubMenu from '../../components/ui/SubMenu/SubMenu';
import Switcher from '../../components/ui/Switcher/Switcher';
import icon from '../../assets/images/vacation-a.svg';
import style from '../pages.module.css';

const Vacation = () => {
	return (
        <div className={style.main}>
            <div className={style.switcher}>
                <Switcher />
            </div>
            <div className={style.submenu}>
                <h3 className={style.submenuTitle}>Vacation Manager</h3>
                <SubMenu />
            </div>
            <Outlet context={[{ name: 'Vacation Manager', icon }]} />
        </div>
    )
}

export default Vacation;