import React from 'react';

const Tooltip = ({ text }) => {
	return (
        <div
            style={{ 
				padding: '8px 20px', background: 'rgba(30, 33, 42, 0.8)',
				mixBlendMode: 'normal', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.230695)',
				borderRadius: '4px', position: 'relative'

			}}
        >
            <p
                style={{
                    fontSize: '11px',
                    lineHeight: '18px',
                    color: '#FFFFFF',
                }}
            >
                {text}
            </p>
			<div style={{ 
                width: '14px', height: '14px', background: '#DADADA', transform: 'matrix(0.71, 0.71, 0.71, -0.71, 0, 0)', position: 'absolute', bottom: '-5px', left: '50px'
            }}></div>
        </div>
    )
}

export default Tooltip;