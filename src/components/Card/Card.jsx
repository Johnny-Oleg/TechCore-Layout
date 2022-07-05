import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown, Menu, Modal } from 'antd';

import { useSplitUsers } from '../../hooks/useSplitUsers';
import Avatar from '../ui/Avatar/Avatar';
import PopupIcon from '../ui/PopupIcon/PopupIcon';
import PopupModal from '../ui/PopupModal/PopupModal';
import editIcon from '../../assets/images/popup-icons/edit.svg';
import starIcon from '../../assets/images/popup-icons/star.svg';
import warningIcon from '../../assets/images/popup-icons/warning.svg';
import deleteIcon from '../../assets/images/popup-icons/delete.svg';
import style from './Card.module.css';
import { deleteLocation } from '../../redux/reducers/locations/locationsSlice';

const Card = ({ location }) => {
    const [loc, setLoc] = useState(location);
    const dispatch = useDispatch();

    const { confirm } = Modal;
    const [usersToShow, usersClone] = useSplitUsers(loc);

    useEffect(() => {
      setLoc(location);
    
      return () => {
        console.log(location, 'loc');
      }
    }, [location])
    
	//const usersClone = structuredClone(loc.users);

	//if (loc.name === 'USA' && loc.id === 3) usersClone.length = 82; // 👈 mockup users

	// const usersToShow = usersClone
	// 	.filter(user => user.userId <= 8 - String(usersClone.length).length);
	
	// const splitUsers = users => {                      // 👈 max users to show
    //     const index = String(users.length).length;

	// 	if (users.length <= 7 ) return users.splice(0);

	// 	if (users.length > 7 && users.length <= 16) {
	// 		return users.splice(0, 9 - index);
	// 	}

    //     if (index >= 6) return users.splice(0, 5);

	// 	return users.splice(0, 8 - index);	
	// }

	//const usersToShow = splitUsers(usersClone);

    const showDeleteConfirm = loc => {
        confirm({
            modalRender: PopupModal,
            title: 'Delete Location',
            icon: <PopupIcon icon={warningIcon} />,
            content: `Are you sure want to delete “${loc.name}” Location? 
                        Deleting a location might impact the users' configuration and leave information (e.g. the initial brought forward days).`,
            okText: 'Yes, Delete',
            okType: 'danger',
            centered: true,
            closable: true,
            confirmLoading: true,
            width: '460px',
            maskStyle: {backgroundColor: '#242C48', opacity: '0.3'},
            cancelButtonProps: {disabled: true, style: {display: 'none'}},
            // cancelText: 'No',

            onOk() {
                dispatch(deleteLocation(loc.id))
                console.log('OK', loc);
            },

            onCancel() {
                console.log('Cancel');
            },

            bodyStyle: {
                width: '460px',
                height: '262px',
                padding: '0 40px 24px',
                borderRadius: '12px',
                boxShadow: `0px 8px 28px rgba(0, 0, 0, 0.05), 
                        2px 2px 15px rgba(0, 44, 175, 0.05)`,

            }
        })
    }

    const handleMenuClick = loc => {
        showDeleteConfirm(loc);
        console.log(loc);
    }


    const menu = (
        <Menu 
            onClick={() => handleMenuClick(loc)}
            items={[
                { 
                    label: 'Edit', 
                    key: '1', 
                    icon: <PopupIcon icon={editIcon} /> 
                },
                { 
                    label: 'Set as Default', 
                    key: '2', 
                    icon: <PopupIcon icon={starIcon} />
                },
                { 
                    label: 'Delete', 
                    key: '3', 
                    icon: <PopupIcon icon={deleteIcon} /> 
                },
            ]}
            style={{
                width: '144px', height: '112px', 
                border: '0.1px solid #EEF0F6', padding: '8px 0', 
                boxShadow: '0px 8px 28px rgba(0, 0, 0, 0.05), 2px 2px 15px rgba(0, 44, 175, 0.05)',
                borderRadius: '6px', fontSize: '13px', lineHeight: '16px', 
                color: '#1E212A', backgroundColor: '#FFFFFF'
            }}
        />
    )

	return (
        <div className={style.card}>
            <div className={style.cardTop}>
                <h4 className={style.cardTopTitle}>{loc.name}</h4>
                {loc.default && (
                    <div className={style.cardTopStatus}>
                        <span>default</span>
                    </div>
                )}
                <Dropdown.Button 
                    className={style.dropButton} 
                    overlay={menu} 
                    size="small" 
                    placement="bottomRight"
                    trigger={['click']}
                ></Dropdown.Button>
            </div>
            <div className={style.cardInner}>
                <div className={style.cardInnerTop}>
                    <h4 className={style.innerTopText}>Holidays</h4>
                    <a className={style.innerTopLink} href="#">
                        View Holidays
                    </a>
                </div>
                <div className={style.cardInnerBottom}>
                    <h4 className={style.innerTopText}>Leave Policies</h4>
                    <a className={style.innerTopLink} href="#">
                        View Leave Policies
                    </a>
                </div>
            </div>
            <div className={style.cardUsers}>
                {usersToShow.map(user =>
                    user.avatar ? (
                        <div className={style.cardUserAvatar} key={user.userId}>
                            <img src={user.avatar} alt="avatar" />
                        </div>
                    ) : (
                        <div className={style.avatarWrapper}>
                            <Avatar user={user} key={user.userId} />
                        </div>
                    )
                )}
                {usersClone.length > 0 && 
                    <span className={style.cardUsersLength}>
						{`+${usersClone.length}`}
					</span>
                }
            </div>
        </div>
    )
}

export default Card;