import React from 'react';

import logo from '../../assets/images/techcore-logo.svg';
import dashboard from '../../assets/images/dashboard.svg';
import users from '../../assets/images/users.svg';
import settings from '../../assets/images/settings.svg';
import folder from '../../assets/images/folder.svg';
import vacation from '../../assets/images/vacation.svg';
import notifications from '../../assets/images/notfications.svg';
import avatar from '../../assets/images/menu-avatar.svg';
import style from './Menu.module.css';

const Menu = () => {
  	return (
		<div className={style.menu}>
			<div className={style.menuLogo}>
				<img src={logo} alt="logo" />
			</div>
			<nav className={style.navbar}>
				<ul className={style.navbarMenu}>
					<li className={style.navbarMenuItem}>
						<img className={style.menuItemImg} src={dashboard} alt="icon" />
						<p className={style.menuItemText}>Dashboard</p>
					</li>
					<li className={style.navbarMenuItem}>
						<img className={style.menuItemImg} src={users} alt="icon" />
						<p className={style.menuItemText}>Users</p>
					</li>
					<li className={style.navbarMenuItem}>
						<img className={style.menuItemImg} src={settings} alt="icon" />
						<p className={`${style.menuItemText} ${style.active}`}>Settings</p>
					</li>
					<li className={style.navbarMenuItem}>
						<img className={style.menuItemImg} src={folder} alt="icon" />
						<p className={style.menuItemText}>P&L</p>
					</li>
					<li className={style.navbarMenuItem}>
						<img className={style.menuItemImg} src={vacation} alt="icon" />
						<p className={style.menuItemText}>Vacation Manager</p>
					</li>
				</ul>
			</nav>
			<div className={style.menuBell}>
				<img src={notifications} alt="icon" />
			</div>
			<div className={style.menuAvatar}>
				<img src={avatar} alt="avatar" />
			</div>
		</div>
  	)
}

export default Menu;