import React from 'react';

import PopupModalHeader from './PopupModalHeader';
import PopupModalContent from './PopupModalContent';
import style from './PopupModal.module.css';

const PopupModal = (loc, icon) => {
    return (
        <div className={style.popupModal}>
            <PopupModalHeader icon={icon} />
            <div className={style.popupModalInner}>
                <PopupModalContent loc={loc} />
            </div>
        </div>
    )
}

export default PopupModal;