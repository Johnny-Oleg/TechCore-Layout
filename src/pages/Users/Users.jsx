import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import SubMenu from '../../components/ui/SubMenu/SubMenu';
import Switcher from '../../components/ui/Switcher/Switcher';
import icon from '../../assets/images/users-a.svg';
import style from '../pages.module.css';

const Users = () => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => setVisible(!visible);

	return (
        <div className={style.main}>
            <div
                className={visible ? style.switcher : style.switcherInvisible}
                onClick={handleClick}
            >
                <Switcher />
            </div>
            {visible &&
                <div className={style.submenu}>
                    <h3 className={style.submenuTitle}>Users</h3>
                    <SubMenu />
                </div>
            }
            <Outlet context={[{ name: 'Users', icon }]} />
        </div>
    )
}

export default Users;