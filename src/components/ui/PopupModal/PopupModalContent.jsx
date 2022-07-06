import React from 'react';

import PopupIcon from '../PopupIcon/PopupIcon';
import warningIcon from '../../../assets/images/popup-icons/warning.svg';
import style from './PopupModal.module.css';

const PopupModalContent = ({ loc, icon }) => {
	return (
        <div className={style.popupModalInner}>
            <p className={style.modalInnerText}>
                Are you sure want to delete “{loc.name}” Location?
            </p>
            <div className={style.modalInnerContent}>
                {icon && <PopupIcon icon={warningIcon} />}
                <p className={style.innerContentText}>
                    Deleting a location might impact the users' configuration
                    and leave information (e.g. the initial brought forward
                    days).
                </p>
            </div>
        </div>
    )
}

export default PopupModalContent;