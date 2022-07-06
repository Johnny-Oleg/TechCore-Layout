import React from 'react';

import PopupIcon from '../PopupIcon/PopupIcon';
import closeIcon from '../../../assets/images/popup-icons/close.svg';
import style from './PopupModal.module.css';

const PopupModalHeader = ({ icon, title }) => {
	return (
		<div className={style.popupModalHeader}>
			<h4 className={style.modalHeaderTitle}>
				{title ?? 'Sorry, no title...'}
			</h4>
			{icon && <PopupIcon icon={closeIcon} /> }
		</div>
	)
}

export default PopupModalHeader;