import React from 'react';

const PopupIcon = ({ icon }) => {
    return (
        <div
            className="popupSuffixIcon"
            style={{ width: '8px', height: '12px' }}
        >
            <img src={icon} alt="icon" />
        </div>
    )
}

export default PopupIcon;