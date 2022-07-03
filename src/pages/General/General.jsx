import React from 'react';
import { NavLink, Outlet, useOutletContext } from 'react-router-dom';

import shape from '../../assets/images/shape.svg';
import style from './General.module.css';

const General = () => {
    const [props, setProps] = useOutletContext();
    const { name, icon } = props;

    return (
        <div className={style.content}>
            <header className={style.header}>
                <div className={style.mainLocation}>
                    <img
                        className={style.mainLocationIcon}
                        src={icon}
                        alt="icon"
                    />
                    <NavLink to={`/${name.toLowerCase()}`}>
                        <span className={style.mainLocationTitle}>
                            {name}
                        </span>
                    </NavLink>
                    <img
                        className={style.mainLocationArrow}
                        src={shape}
                        alt="arrow-right"
                    />
                    <NavLink to={`/${name.toLowerCase()}/general`}>
                        <span className={style.mainLocationSubtitle}>
                            General
                        </span>
                    </NavLink>
                </div>
            </header>
            <Outlet />
        </div>
    )
}

export default General;