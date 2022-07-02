import React from 'react';

import SubMenu from '../../components/SubMenu/SubMenu';
import style from './Folder.module.css';

const Folder = () => {
    return (
        <div className={style.submenu}>
            <h3 className={style.submenuTitle}>Folder</h3>
            <SubMenu />
        </div>
    )
}

export default Folder;