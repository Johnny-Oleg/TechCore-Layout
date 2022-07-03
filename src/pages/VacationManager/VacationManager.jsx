import React from 'react';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';

import shape from '../../assets/images/shape.svg';
import style from './VacationManager.module.css';

const VacationManager = () => {
    const [props, setProps] = useOutletContext();
    
	return (
        <div className={style.content}>
            <header className={style.header}>
                <div className={style.mainLocation}>
                    <img
                        className={style.mainLocationIcon}
                        src={props.icon}
                        alt="icon"
                    />
                    <NavLink to="/settings">
                        <span className={style.mainLocationTitle}>
                            {props.name}
                        </span>
                    </NavLink>
                    <img
                        className={style.mainLocationArrow}
                        src={shape}
                        alt="arrow-right"
                    />
                    <NavLink to="/settings/manager">
                        <span className={style.mainLocationSubtitle}>
                            Vacation Manager
                        </span>
                    </NavLink>
                </div>
            </header>
            <Outlet />
        </div>
    )
}

export default VacationManager;