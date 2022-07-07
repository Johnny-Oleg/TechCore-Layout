import React, { useState } from 'react';
import { Checkbox, Form, Input, Select } from 'antd';

import PopupIcon from '../PopupIcon/PopupIcon';
import infoIcon from '../../../assets/images/popup-icons/info.svg';

import style from './MainModalContent.module.css';

const MainModalContent = ({ onSubmit }) => {
    const [location, setLocation] = useState({
        name: '', 
        default: '',
        users: [{userId: 1, name: 'J', surname: 'H'}]
    })

    const [form] = Form.useForm();

    const onHandleChange = (e) => {
        console.log(`value = ${e.target.value}`);
    }
    const onChange = ({ target }) => {
        const { name, value, checked} = target;

        setLocation({
            name: value.trim(),
            default: checked,
            users: [{userId: 1, name: 'J', surname: 'H'}]
        })
        console.log(`checked = ${value}`,  onSubmit);
    }

    const onFinish = e => {

        form.validateFields()
            .then((values) => {
                console.log(values);
                form.resetFields();
               // onSubmit(values);
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
        onSubmit(location);
        form.resetFields();
        console.log(location, e, form);
    }

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
                    <Input
                        className={style.modalInnerInput}
                        placeholder="Location Name"
                        onChange={onChange}
                        value={location.name}
                        name={location.name}
                        
                    />
                </div>
                <div>
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
                <div>
                    <Form.Item>
                        <Select
                            showArrow="true"
                        />
                    </Form.Item>
                </div>
                <div className={style.modalInnerStatus}>
                    <Form.Item
                        label="Make This Location Default"
                        tooltip={{
                            title: 'By making this Location the default one, all new team members will be automatically added to this Location.',
                            icon: <PopupIcon icon={infoIcon} />,
                        }}
                        colon={false}
                    >
                        <Checkbox 
                            className={style.modalInnerCheckbox} 
                            onChange={onChange} 
                            checked={location.default}
                            name={location.default}
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
    );
}

export default MainModalContent;
