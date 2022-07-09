import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SubMenu from '../../components/ui/SubMenu/SubMenu';
import Switcher from '../../components/ui/Switcher/Switcher';
import icon from '../../assets/images/menu-icons-active/settings-a.svg';
import style from '../pages.module.css';

const Settings = () => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => setVisible(!visible);

	return (
        <div className={style.main}>
             <div 
                className={visible ? style.mainSwitcher : style.mainSwitcherInvisible}
                onClick={handleClick}
            >
                <span           
                    className={visible ? style.switcher : style.switcherInvisible} 
                >
                    <Switcher/>
                </span>
            </div>
            {visible &&
                <div className={style.submenu}>
                    <h3 className={style.submenuTitle}>Settings</h3>
                    <SubMenu />
                </div>
            }
            <Outlet context={[{name: 'Settings', icon}]} />
        </div>
    )
}

export default Settings;