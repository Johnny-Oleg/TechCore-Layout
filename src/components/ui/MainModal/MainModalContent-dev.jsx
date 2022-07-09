import React, { useState } from 'react';

import { Checkbox, Col, DatePicker, Form, Input, Row, Select, Tooltip } from 'antd';

import UseDebounceSelect from '../../../hooks/useDebounceSelect';
import PopupIcon from '../PopupIcon/PopupIcon';
import SuffixIcon from '../SuffixIcon/SuffixIcon';
import infoIcon from '../../../assets/images/popup-icons/info.svg';
import polygonIcon from '../../../assets/images/popup-icons/polygon.svg';

import style from './MainModalContent.module.css';
import ValidateWarning from '../ValidateWarning/ValidateWarning';

// function UseDebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
// 	const [fetching, setFetching] = useState(false);
// 	const [options, setOptions] = useState([]);
// 	const fetchRef = useRef(0);

// 	const debounceFetcher = useMemo(() => {
// 		const loadOptions = (value) => {
// 			fetchRef.current += 1;
// 			const fetchId = fetchRef.current;

// 			setOptions([]);
// 			setFetching(true);

// 			fetchOptions(value).then((newOptions) => {
// 				if (fetchId !== fetchRef.current) return;  // for fetch callback order

// 				setOptions(newOptions);
// 				setFetching(false);
// 			})
// 		}

// 		return debounce(loadOptions, debounceTimeout);
// 	}, [fetchOptions, debounceTimeout]);
// 	return (
// 		<Select
// 			labelInValue
// 			filterOption={false}
// 			onSearch={debounceFetcher}
// 			notFoundContent={fetching ? <Spin size="small" /> : null}
// 			{...props}
// 			options={options}
// 		/>
// 	)
// } // Usage of DebounceSelect

// async function fetchUserList(username) {
//     console.log('fetching user', username);

//     return fetch('https://randomuser.me/api/?results=5')
//         .then((response) => response.json())
//         .then((body) =>
//             body.results.map((user) => ({
//                 label: `${user.name.first} ${user.name.last}`,
//                 value: user.login.username,
//             }))
//         );
// }

const MainModalContent = ({ form }) => {
    const onFinish = e => {
        console.log('submit', e);
    }

    const [value, setValue] = useState([]);

    const fetchUserList = async username => {
        console.log('fetching user', username);

        return fetch('https://randomuser.me/api/?results=5')
            .then((response) => response.json())
            .then((body) =>
                body.results.map((user) => ({
                    label: `${user.name.first} ${user.name.last}`,
                    value: user.login.username,
                    // userId: `${user.id.value}`,
                    // name: `${user.name.first}`,
                    // surname: `${user.name.last}`,
                    // avatar: `${user.picture?.large}`,
                }))
            )
    }

    console.log(value);

    const options = [
        { label: 'Sunday', value: 'Sunday' },
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
    ]
    
    const months = [
        { label: 'January', value: 'January' },
        { label: 'February', value: 'February' },
        { label: 'March', value: 'March' },
        { label: 'April', value: 'April' },
        { label: 'May', value: 'May' },
        { label: 'June', value: 'June' },
        { label: 'July', value: 'July' },
        { label: 'August', value: 'August' },
        { label: 'September', value: 'September' },
        { label: 'October', value: 'October' },
        { label: 'November', value: 'November' },
        { label: 'December', value: 'December' },
    ]
    
    const week = [
        { label: 'Sunday', value: 'Sunday' },
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
    ]
    
    const gmt = [
        { label: '(GMT+02:00) Vilnius', value: '(GMT+02:00) Vilnius' },
        { label: '(GMT+03:00) Khartoum', value: '(GMT+03:00) Khartoum' },
        { label: '(GMT+03:00) Nairobi', value: '(GMT+03:00) Nairobi' },
        { label: '(GMT+03:00) Syowa', value: '(GMT+02:30) Syowa' },
        { label: '(GMT+03:00) Baghdad', value: '(GMT+03:00) Baghdad' },
        { label: '(GMT+03:00) Qatar', value: '(GMT+03:00) Qatar' },
        { label: '(GMT+03:00) Riyadh', value: '(GMT+03:00) Riyadh' },
        { label: '(GMT+03:00) Minsk', value: '(GMT+32:00)Minsks' },
    ]

    return (
        <div className={style.mainModalInner}>
            <Form 
                id="createForm"
                form={form} 
                onFinish={onFinish}
                onFinishFailed={err => console.log(err)}
            >
                <div>
                    <Form.Item 
                        name="name" 
                        required
                    >
                        <Input
                            className={style.modalInnerInput}
                            placeholder="Location Name"
                        />
                    </Form.Item>
                </div>
                <div className={style.modalInnerWork}>
                    <Form.Item
                        label="Workweek"
                        required
                        colon={false}
                    >
                        <Checkbox.Group>
                            <Row className="innerWorkWeek">
                                {options.map(item => (
                                    <Col 
                                        className="column"
                                        span={8}
                                    >
                                        <Checkbox
                                            className={style.weekGreedCheckbox}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </Checkbox>
                                    </Col>
                                ))} 
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                </div>
                <div className={style.modalInnerQuota}>
                    <Form.Item>
                        <Select
                            placeholder="Accounting Year"
                            labelInValue
                            filterOption={false}
                            options={[
                                { label: 'Accounting Year', value: 'Accounting Year' }, 
                                { label: 'User Employment Date', value: 'User Employment Date' }
                            ]}
                            showArrow="true"
                            size="large"
                            menuItemSelectedIcon={<SuffixIcon icon={polygonIcon} />}
                            suffixIcon={<SuffixIcon icon={polygonIcon} />}
                            className="modalSelect modalSelectOptions"
                            style={{ marginRight: '16px' }}
                            // dropdownStyle={{background: 'white'}}
                            // dropdownClassName="dropdownStyle"
                        />
                        <Tooltip
                            // visible="true"
                            arrowPointAtCenter
                            placement="top"
                            trigger={['hover', 'click']}
                            title="This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting."
                        >
                            <span>
                                <PopupIcon className={style.popupInfoIcon} icon={infoIcon} />
                            </span>    
                        </Tooltip>
                    </Form.Item>
                </div>
                <div className={style.modalInnerMonth}>
                    <Form.Item>
                        <Select
                            placeholder="January"
                            labelInValue
                            filterOption={false}
                            options={months}
                            showArrow="true"
                            size="large"
                            menuItemSelectedIcon={<SuffixIcon icon={polygonIcon} />}
                            suffixIcon={<SuffixIcon icon={polygonIcon} />}
                            className="modalSelect modalSelectOptions"
                            // style={{ marginRight: '16px' }}
                            allowClear
                            // dropdownStyle={{background: 'white'}}
                            // dropdownClassName="dropdownStyle"
                            />
                        <DatePicker
                            placeholder="1"
                            allowClear
                            mode="date"
                            picker="date"
                            size="large"
                            style={{ marginRight: '53%', marginLeft: '16px', minWidth: '80px' }}
                            // className="modalSelect modalSelectOptions"
                        />
                    </Form.Item>
                </div>
                <div className={`${style.modalInnerStatus} modalInnerStatus`}>
                    <Form.Item
                        name="expire"
                        defaultChecked="false"
                        valuePropName="checked"
                        colon={false}
                    >
                        <Checkbox
                            className={style.modalInnerCheckbox} 
                        />
                        <label className="modalInnerLabel">
                            <span>No Brought Forward Expiry Date</span>
                        </label>
                        <Tooltip
                            // visible="true"
                            arrowPointAtCenter
                            placement="top"
                            trigger={['hover', 'click']}
                            title="Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs."
                        >
                            <span>
                                <PopupIcon className={style.popupInfoIcon} icon={infoIcon} />
                            </span>    
                        </Tooltip>
                    </Form.Item>
                </div>
                <div className={style.innerModalWeek}>
                    <Form.Item>
                        <Select
                            placeholder="Monday"
                            labelInValue
                            filterOption={false}
                            options={week}
                            showArrow="true"
                            size="large"
                            menuItemSelectedIcon={<SuffixIcon icon={polygonIcon} />}
                            suffixIcon={<SuffixIcon icon={polygonIcon} />}
                            className="modalSelect modalSelectOptions"
                            style={{ marginRight: '69%' }}
                            // dropdownStyle={{background: 'white'}}
                            // dropdownClassName="dropdownStyle"
                        />
                    </Form.Item>
                </div>
                <div className={style.innerModalGmt}>
                    <Form.Item 
                        required
                    >
                        <Select
                            placeholder="(GMT+03:00) Moscow+00 - Moscow"
                            labelInValue
                            filterOption={false}
                            options={gmt}
                            showArrow="true"
                            size="large"
                            menuItemSelectedIcon={<SuffixIcon icon={polygonIcon} />}
                            suffixIcon={<SuffixIcon icon={polygonIcon} />}
                            className="modalSelect modalSelectOptions"
                            style={{ marginRight: '16px' }}
                            // dropdownStyle={{background: 'white'}}
                            // dropdownClassName="dropdownStyle"
                        />
                        <Tooltip
                            // visible="true"
                            arrowPointAtCenter
                            placement="top"
                            trigger={['hover', 'click']}
                            title="This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs."
                        >
                            <span>
                                <PopupIcon className={style.popupInfoIcon} icon={infoIcon} />
                            </span>
                        </Tooltip>
                    </Form.Item>
                </div>
                <div className={style.modalInnerUsers}>
                    <Form.Item
                        name="users"
                        help={<ValidateWarning />}
                        validateStatus="validating"
                        validateTrigger
                        // label="Users" :TODO
                    >
                        <UseDebounceSelect
                            mode="multiple"
                            value={value}
                            placeholder="Select users"
                            fetchOptions={fetchUserList}
                            onChange={newValue => setValue(newValue)}
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                </div>
                <div className={`${style.modalInnerStatus} modalInnerStatus`}>
                    <Form.Item
                        name="default"
                        defaultChecked="false"
                        valuePropName="checked"
                        // label="Make This Location Default"
                        // tooltip={{
                            //     title: 'By making this Location the default one, all new team members will be automatically added to this Location.',
                            //     icon: <PopupIcon className={style.popupInfoIcon} icon={infoIcon} />,
                            // }}
                            // colon={false}
                        labelAlign="left"
                    >
                        <Checkbox
                            className={style.modalInnerCheckbox} 
                        />
                        <label className="modalInnerLabel">
                            <span>Make This Location Default</span>
                        </label>
                        <Tooltip
                            // visible="true"
                            arrowPointAtCenter
                            placement="top"
                            trigger={['hover', 'click']}
                            title="By making this Location the default one, all new team members will be automatically added to this Location."
                        >
                            <span>
                                <PopupIcon className={style.popupInfoIcon} icon={infoIcon} /> 
                            </span>
                        </Tooltip>
                    </Form.Item>
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
            </Form>
        </div>
    )
}

export default MainModalContent;
