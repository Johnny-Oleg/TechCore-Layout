import React from 'react';

import switcher from '../../../assets/images/switcher.svg';
import style from './Switcher.module.css';

const Switcher = ({ active }) => {
	return (
		<div className={style.switcher}>
			<img className={style.switcherImg} src={switcher} alt="switcher" />
		</div>
	)
}

export default Switcher;