import React from 'react';
import { Button } from 'antd';

import style from '../pages.module.css';
import PageLayout from '../../components/PageLayout/PageLayout';

const Locations = () => {
    return (
        <>
            <div className={style.headerBottom}>
                <div className={style.headerBottomInner}>
                    <h3 className={style.headerBottomTitle}>Locations</h3>
                    <p className={style.headerBottomSubtitle}>
                        Create new users or update the existng users. You can then
                        set their permissons here too.
                    </p>
                </div>
                <Button className={style.btnCreate} type="primary" size="large">
                    <span className={style.btnText}>Create Location</span>
                </Button>
            </div>
            <PageLayout />
        </>
    )
}

export default Locations;