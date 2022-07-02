import React from 'react';

import SubMenu from '../../components/SubMenu/SubMenu';
import style from './Vacation.module.css';

const Vacation = () => {
	return (
        <div className={style.submenu}>
            <h3 className={style.submenuTitle}>Vacation Manager</h3>
            <SubMenu />
        </div>
    )
}

export default Vacation;