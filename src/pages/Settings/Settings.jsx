import React from 'react';

import SubMenu from '../../components/SubMenu/SubMenu';
import style from './Settings.module.css';

const Settings = () => {
	return (
        <div className={style.submenu}>
            <h3 className={style.submenuTitle}>Settings</h3>
            <SubMenu />
        </div>
    )
}

export default Settings;