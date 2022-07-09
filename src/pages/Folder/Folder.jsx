import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SubMenu from '../../components/ui/SubMenu/SubMenu';
import Switcher from '../../components/ui/Switcher/Switcher';
import icon from '../../assets/images/menu-icons-active/folder-a.svg';
import style from '../pages.module.css';

const Folder = () => {
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
                    <h3 className={style.submenuTitle}>Folder</h3>
                    <SubMenu />
                </div>
            }
            <Outlet context={[{ name: 'Folder', icon }]} />
        </div>
    )
}

export default Folder;