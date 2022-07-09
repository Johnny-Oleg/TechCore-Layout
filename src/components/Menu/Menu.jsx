import React, { useState } from 'react';

import MenuNavbar from '../ui/MenuNavbar/MenuNavbar';
import Avatar from '../ui/Avatar/Avatar';
import logo from '../../assets/images/menu-icons/techcore-logo.svg';
import notifications from '../../assets/images/menu-icons/notfications.svg';
import avatar from '../../assets/images/menu-icons/menu-avatar.svg';
import style from './Menu.module.css';

const Menu = () => {
	const [user, setUser] = useState({ 
		avatar: null, 
		name: 'John',
		surname: 'Snow'
	})

  	return (
        <div className={style.menu}>
            <div className={style.menuLogo}>
                <img src={logo} alt="logo" />
            </div>
            <MenuNavbar />
            <div className={style.menuBell}>
                <img src={notifications} alt="icon" />
            </div>
            <div className={style.menuAvatar}>
                {user.avatar ? (
                    <img src={user.avatar} alt="avatar" />
                ) : (
                    <div className={style.avatarWrapper}>
                        <Avatar user={user} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menu;