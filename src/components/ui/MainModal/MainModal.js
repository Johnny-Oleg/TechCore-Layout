import React from 'react'
import { useDispatch } from 'react-redux';
import { Form, Modal } from 'antd';

import { createLocation } from '../../../redux/reducers/locations/locationsSlice';
import MainModalContent from './MainModalContent';
import PopupIcon from '../PopupIcon/PopupIcon';
import PopupModalHeader from '../PopupModal/PopupModalHeader';
import closeIcon from '../../../assets/images/popup-icons/close.svg';
// TODO
const MainModal = ({ method }) => {
	const dispatch = useDispatch();
    const { confirm } = Modal;
    const [form] = Form.useForm();
	const { methodName, formId, okBtnText } = method;

	//  confirm({
	// 		title: <PopupModalHeader title={methodName} />, // prev -> Create Location
	// 		icon: false,
	// 		content: <MainModalContent form={form} />,
	// 		closeIcon: <PopupIcon icon={closeIcon} />,
	// 		okText: okBtnText, // prev -> Create
	// 		okType: 'primary',
	// 		centered: true,
	// 		closable: true,
	// 		confirmLoading: true,
	// 		width: '550px',
	// 		// maskStyle: {backgroundColor: '#242C48', opacity: '0.3'},
	// 		okButtonProps: {
	// 			form: formId, // prev -> createForm
	// 			htmlType: 'submit',
	// 			style: {
	// 				width: '93px',
	// 				height: '40px',
	// 				borderRadius: '6px',
	// 				backgroundColor: '#00A0EC',
	// 				color: '#FFFFFF',
	// 				fontSize: '13px',
	// 				fontWeight: '600',
	// 				lineHeight: '16px',
	// 				marginRight: '40px',
	// 			},
	// 		},
	// 		cancelButtonProps: {
	// 			style: {
	// 				width: '93px',
	// 				height: '40px',
	// 				borderRadius: '6px',
	// 				backgroundColor: '#AFB6C6',
	// 				color: '#FFFFFF',
	// 				fontSize: '13px',
	// 				fontWeight: '600',
	// 				lineHeight: '16px',
	// 			},
	// 		},
	
	// 		onOk() {
	// 			form.validateFields()
	// 				.then((values) => {
	// 					form.resetFields();
	// 					dispatch(createLocation(values));
	// 					console.log(values);
	// 				})
	// 				.catch((info) => {
	// 					console.log('Validate Failed:', info);
	// 				});
	// 			console.log('OK', form);
	// 		},
	
	// 		onCancel() {
	// 			console.log('Cancel');
	// 		},
	
	// 		bodyStyle: {
	// 			// width: '460px',
	// 			height: '862px',
	// 			padding: '0',
	// 			borderRadius: '12px',
	// 			boxShadow: `0px 8px 28px rgba(0, 0, 0, 0.05), 2px 2px 15px rgba(0, 44, 175, 0.05)`,
	// 		},
	// 	})
}

export default MainModal;
// TODO