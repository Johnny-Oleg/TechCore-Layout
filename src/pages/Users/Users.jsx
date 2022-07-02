import React from 'react';

import SubMenu from '../../components/SubMenu/SubMenu';
import style from './Users.module.css';

const Users = () => {
	return (
        <div className={style.submenu}>
            <h3 className={style.submenuTitle}>Users</h3>
            <SubMenu />
        </div>
    )
}

export default Users;