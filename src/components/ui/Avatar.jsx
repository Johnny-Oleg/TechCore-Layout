import React from 'react';

import style from './Avatar.module.css';

const Avatar = ({ user }) => {
	const userName = user.name.slice(0, 1).toUpperCase();
	const userSurname = user.surname.slice(0, 1).toUpperCase();

	return (
		<div className={style.simpleAvatar}>
			<span className={style.simpleAvatarName}>{userName}</span>
			<span className={style.simpleAvatarSurname}>{userSurname}</span>
		</div>
	)
}

export default Avatar;