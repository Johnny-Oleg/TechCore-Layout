import React from 'react';

import SubMenu from '../../components/SubMenu/SubMenu';
import style from './Home.module.css';

const Home = () => {
	return (
        <div className={style.submenu}>
            <h3 className={style.submenuTitle}>Dashboard</h3>
            <SubMenu />
        </div>
    )
}

export default Home;