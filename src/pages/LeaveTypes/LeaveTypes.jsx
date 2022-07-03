import React from 'react';

import style from '../pages.module.css';

const LeaveTypes = () => {
    return (
        <div className={style.headerBottom}>
            <div className={style.headerBottomInner}>
                <h3 className={style.headerBottomTitle}>Leave Types</h3>
                <p className={style.headerBottomSubtitle}>
                    Create new users or update the existng users. You can then
                    set their permissons here too.
                </p>
            </div>
        </div>
    )
}

export default LeaveTypes;