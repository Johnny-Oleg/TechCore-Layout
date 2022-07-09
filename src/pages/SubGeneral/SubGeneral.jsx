import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'antd';

import { createLocation } from '../../redux/reducers/locations/locationsSlice';
import PageLayout from '../../components/PageLayout/PageLayout';
import PopupModalHeader from '../../components/ui/PopupModal/PopupModalHeader';
import MainModalContent from '../../components/ui/MainModal/MainModalContent-dev';
import PopupIcon from '../../components/ui/PopupIcon/PopupIcon';
import warningIcon from '../../assets/images/popup-icons/warning.svg';
import closeIcon from '../../assets/images/popup-icons/close.svg';
import style from '../pages.module.css';

const SubGeneral = () => {
    const dispatch = useDispatch();
    const { confirm } = Modal;
    const [form] = Form.useForm();

    const showCreateConfirm = () => {
        confirm({
            title: <PopupModalHeader title="Create Location" />,
            icon: false,
            content: <MainModalContent form={form} />,
            closeIcon: <PopupIcon icon={closeIcon} />,
            okText: 'Create',
            okType: 'primary',
            centered: true,
            closable: true,
            confirmLoading: true,
            width: '550px',
            // maskStyle: {backgroundColor: '#242C48', opacity: '0.3'},
            okButtonProps: {
                form: 'createForm',
                htmlType: 'submit',
                style: {
                    width: '93px',
                    height: '40px',
                    borderRadius: '6px',
                    backgroundColor: '#00A0EC',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '600',
                    lineHeight: '16px',
                    marginRight: '40px',
                },
            },
            cancelButtonProps: {
                style: {
                    width: '93px',
                    height: '40px',
                    borderRadius: '6px',
                    backgroundColor: '#AFB6C6',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '600',
                    lineHeight: '16px',
                },
            },

            onOk() {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        dispatch(createLocation(values));
                        console.log(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
                console.log('OK', form);
            },

            onCancel() {
                console.log('Cancel');
            },

            bodyStyle: {
                // width: '460px',
                height: '862px',
                padding: '0',
                borderRadius: '12px',
                boxShadow: `0px 8px 28px rgba(0, 0, 0, 0.05), 2px 2px 15px rgba(0, 44, 175, 0.05)`,
            },
        })
    }

    return (
        <>
            <div className={style.headerBottom}>
                <div className={style.headerBottomInner}>
                    <h3 className={style.headerBottomTitle}>General</h3>
                    <p className={style.headerBottomSubtitle}>
                        Create new users or update the existng users. You can
                        then set their permissons here too.
                    </p>
                </div>
                <Button
                    className={style.btnCreate}
                    type="primary"
                    size="large"
                    onClick={showCreateConfirm}
                >
                    <span className={style.btnText}>Create Location</span>
                </Button>
            </div>
            <PageLayout />
        </>
    )
}

export default SubGeneral;