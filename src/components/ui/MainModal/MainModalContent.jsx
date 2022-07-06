import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createLocation } from '../../../redux/reducers/locations/locationsSlice';
import PopupIcon from '../PopupIcon/PopupIcon';
import infoIcon from '../../../assets/images/popup-icons/info.svg';

import style from './MainModalContent.module.css';
import { Checkbox, Input, Tooltip } from 'antd';

const MainModalContent = ({loc, onChange}) => {
    const [location, setLocation] = useState(loc);
    // const [status, setStatus] = useState(false);
    // const [users, setUsers] = useState([]);
    //const dispatch = useDispatch();

    const onHandleChange = (e) => {
        console.log(`value = ${e.target.value}`);
    };
    // const onChange = ({ target }) => {
    //     setLocation({
    //         name: target.value.trim(),
    //         default: target.checked,
    //         users: [{ userId: 1, name: 'J', surname: 'H' }],
    //     });
    //     console.log(`checked = ${target.value}`, target.checked);
    // };

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     //dispatch(createLocation(location));
    //     console.log(location);
    // };

    const options = [
        { label: 'Sunday', value: 'Sunday' },
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
    ];

    return (
        <div className={style.mainModalInner}>
            <form
            // onSubmit={onSubmit}
            >
                <div>
                    {/* <input
                        className={style.modalInnerInput}
                        placeholder="Location Name"
                        onChange={onChange}
                        value={location.name}
                        name={location.name}
                    /> */}
                    <Input
                        className={style.modalInnerInput}
                        placeholder="Location Name"
                        onChange={onChange}
                        value={location.name}
                        
                    />
                </div>
                <div></div>
                <div className={style.modalInnerStatus}>
                    {/* <span
                        className={style.innerStatusCheckbox} 
                    >
                        <input 
                            type="checkbox" 
                            value={location.default} 
                        />
                    </span> */}
                    <Checkbox
                        className={style.modalInnerCheckbox}
                        onChange={onChange}
                    />
                    <label className={style.innerStatusLabel}>
                        Make This Location Default
                    </label>
                    <Tooltip title="By making this Location the default one, all new team members will be automatically added to this Location.">
                        <PopupIcon
                            className={style.innerStatusIcon}
                            icon={infoIcon}
                        />
                    </Tooltip>
                </div>
                <div className={style.modalInnerPolicy}>
                    <p className={style.innerPolicyText}>
                        Once you've created a Location, assign a{' '}
                        <a href="#">Leave Policy</a> to the Location, in order
                        to enable Users to request Leave. To assign a Leave
                        Policy, go to Location &gt; Leave Policies &gt; Assign
                        Leave Policy.
                    </p>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default MainModalContent;