import React from 'react';

import PopupIcon from '../PopupIcon/PopupIcon';
import closeIcon from '../../../assets/images/popup-icons/close.svg';
import warningIcon from '../../../assets/images/popup-icons/warning.svg';
import style from './PopupModal.module.css';

const PopupModal = (loc) => {
    return (
        <div className={style.popupModal}>
            <div className={style.popupModalHeader}>
                <h4 className={style.modalHeaderTitle}>Delete Location</h4>
                <PopupIcon icon={closeIcon} />
            </div>
            <div className={style.popupModalInner}>
                <p className={style.modalInnerText}>
					Are you sure want to delete “{loc.name}” Location? 
				</p>
                <div className={style.modalInnerContent}>
                    <PopupIcon icon={warningIcon} />
                    <p className={style.innerContentText}>
                        Deleting a location might impact the users'
                        configuration and leave information (e.g. the initial
                        brought forward days).
                    </p>
                </div>
				<button className={style.modalInnerBtn}>
					<span>Yes, Delete</span>
				</button>
            </div>
        </div>
    )
}

export default PopupModal;
