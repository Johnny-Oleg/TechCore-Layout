import React from 'react';

import PopupIcon from '../PopupIcon/PopupIcon';
import warningIcon from '../../../assets/images/popup-icons/warning.svg';

const ValidateWarning = () => {
	return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '4px'}}>
			<PopupIcon icon={warningIcon} />
            <p className="warningModalText">
                Adding or removing a user might impact the user's configuration
                and leave information (e.g. the initial brought forward days).
            </p>
        </div>
    )
}

export default ValidateWarning;