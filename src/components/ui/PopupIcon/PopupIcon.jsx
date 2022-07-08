import React from 'react';

const PopupIcon = ({ icon }) => {
    return (
		<div 
			className="popupIconModal popupInfoIcon popupWarningIcon popupCloseIcon" 
			style={{ width: '14px', height: '14px', cursor: 'pointer' }}
		>
			<img src={icon} alt="icon" />
		</div>
	)
}

export default PopupIcon;