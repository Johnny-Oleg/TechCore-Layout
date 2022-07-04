import React, { useMemo } from 'react';
import Avatar from '../Avatar/Avatar';

import style from './Card.module.css';

const Card = ({ loc }) => {
	const usersClone = structuredClone(loc.users);

	if (loc.name === 'USA') usersClone.length = 82;

	// const usersToShow = usersClone
	// 	.filter(user => user.userId <= 8 - String(usersClone.length).length);
	
	const splitUsers = users => {
		if (users.length <= 7 ) return users.splice(0);

		if (users.length > 7 && users.length <= 16) {
			return users.splice(0, 9 - String(users.length).length);
		}

		return users.splice(0, 8 - String(users.length).length);	
	}

	const usersToShow = splitUsers(usersClone);

	return (
        <div className={style.card}>
            <div className={style.cardTop}>
                <h4 className={style.cardTopTitle}>{loc.name}</h4>
                {loc.default && (
                    <div className={style.cardTopStatus}>
                        <span>default</span>
                    </div>
                )}
            </div>
            <div className={style.cardInner}>
                <div className={style.cardInnerTop}>
                    <h4 className={style.innerTopText}>Holidays</h4>
                    <a className={style.innerTopLink} href="#">
                        View Holidays
                    </a>
                </div>
                <div className={style.cardInnerBottom}>
                    <h4 className={style.innerTopText}>Leave Policies</h4>
                    <a className={style.innerTopLink} href="#">
                        View Leave Policies
                    </a>
                </div>
            </div>
            <div className={style.cardUsers}>
                {usersToShow.map((user) =>
                    user.avatar ? (
                        <div className={style.cardUserAvatar} key={user.userId}>
                            <img src={user.avatar} alt="avatar" />
                        </div>
                    ) : (
                        <div className={style.avatarWrapper}>
                            <Avatar user={user} key={user.userId} />
                        </div>
                    )
                )}
                {usersClone.length > 0 && (
                    <span
                        className={style.cardUsersLength}
                    >{`+${usersClone.length}`}</span>
                )}
            </div>
        </div>
    );
}

export default Card;