import React, { useState } from 'react';

import { Checkbox, Form, Input } from 'antd';

import UseDebounceSelect from '../../../hooks/useDebounceSelect';
import PopupIcon from '../PopupIcon/PopupIcon';
import infoIcon from '../../../assets/images/popup-icons/info.svg';

import style from './MainModalContent.module.css';

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
    // const [location, setLocation] = useState({
    //     name: '', 
    //     default: false,
    //     users: [{userId: 1, name: 'J', surname: 'H'}]
    // })

    //const [form] = Form.useForm();

    // const onHandleChange = (e) => {
    //     console.log(`value = ${e.target.value}`);
    // }
    // const onChange = ({ target }) => {
    //     const { name, value, type } = target;
    //     const currentValue = type === 'checkbox' ? target.checked : value;

    //     setLocation({
    //         // name: value,
    //         // default: checked,
    //         [name]: currentValue,
    //         users: [{userId: 1, name: 'J', surname: 'H'}]
    //     })
    //     console.log(name, `value = ${value}`, type, target);
    // }

    const onFinish = e => {

        // form.validateFields()
        //     .then((values) => {
        //         console.log(values);
        //         form.resetFields();
        //        // onSubmit(values);
        //     })
        //     .catch((info) => {
        //         console.log('Validate Failed:', info);
        //     });
        // onSubmit(location);
        // form.resetFields();
        //console.log(location, e, form);
        console.log('submit');
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
        );
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
                            // onChange={onChange}
                        />
                    </Form.Item>
                </div>
                <div className={style.modalInnerWork}>
                    <Form.Item
                        label="Workweek"
                        required
                        colon={false}
                    >
                        <Checkbox.Group 
                            options={options} 
                            // onChange={onChange} 
                        />
                    </Form.Item>
                </div>
                <div className={style.modalInnerUsers}>
                    <Form.Item
                        name="users"
                    >
                        {/* <Select
                            showArrow="true"
                        /> */}
                        <UseDebounceSelect
                            mode="multiple"
                            value={value}
                            placeholder="Select users"
                            fetchOptions={fetchUserList}
                            onChange={newValue => setValue(newValue)}
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>
                </div>
                <div className={`${style.modalInnerStatus} modalInnerStatus`}>
                    <Form.Item
                        name="default"
                        defaultChecked="false"
                        valuePropName="checked"
                        label="Make This Location Default"
                        tooltip={{
                            title: 'By making this Location the default one, all new team members will be automatically added to this Location.',
                            icon: <PopupIcon icon={infoIcon} />,
                        }}
                        colon={false}
                    >
                        <Checkbox
                            className={style.modalInnerCheckbox} 
                            // onChange={onChange} 
                        />
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
