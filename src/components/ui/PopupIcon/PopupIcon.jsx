import React from 'react';

const PopupIcon = ({ icon }) => {
    return (
		<div className="popupIconModal" style={{ width: '14px', height: '14px' }}>
			<img src={icon} alt="icon" />
		</div>
	)
}

export default PopupIcon;