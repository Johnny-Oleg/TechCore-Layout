import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown, Menu, Modal } from 'antd';

import { setStatusLocation } from '../../redux/reducers/locations/locationsSlice';
import { deleteLocation } from '../../redux/reducers/locations/locationsSlice';
import { useSplitUsers } from '../../hooks/useSplitUsers';
import Avatar from '../ui/Avatar/Avatar';
import PopupIcon from '../ui/PopupIcon/PopupIcon';
import PopupModalHeader from '../ui/PopupModal/PopupModalHeader';
import PopupModalContent from '../ui/PopupModal/PopupModalContent';
import editIcon from '../../assets/images/popup-icons/edit.svg';
import starIcon from '../../assets/images/popup-icons/star.svg';
import starIconActive from '../../assets/images/popup-icons/star-a.svg';
import warningIcon from '../../assets/images/popup-icons/warning.svg';
import deleteIcon from '../../assets/images/popup-icons/delete.svg';
import closeIcon from '../../assets/images/popup-icons/close.svg';
import style from './Card.module.css';

const Card = ({ location }) => {
    const [status, setStatus] = useState(location.default);
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

    const setStatusConfirm = loc => dispatch(setStatusLocation(loc.id));
    
    const showDeleteConfirm = loc => {
        confirm({
            title: <PopupModalHeader title="Delete Location" />,
            icon: <PopupIcon className="popupIconModalInfo" icon={warningIcon} />,
            content: <PopupModalContent loc={loc} />,
            closeIcon: <PopupIcon icon={closeIcon} />,
            okText: 'Yes, Delete',
            okType: 'danger',
            centered: true,
            closable: true,
            confirmLoading: true,
            width: '460px',
            // maskStyle: {backgroundColor: '#242C48', opacity: '0.3'},
            okButtonProps: {style: {
                width: '119px', height: '40px', borderRadius: '6px',
                backgroundColor: '#F24445', color: '#FFFFFF', fontSize: '13px',
                fontWeight: '600', lineHeight: '16px', marginRight: '40px'

            }},
            cancelButtonProps: {style: {display: 'none'}},

            onOk() {
                dispatch(deleteLocation(loc.id));
                console.log('OK', loc);
            },

            onCancel() {
                console.log('Cancel');
            },

            bodyStyle: {
                width: '460px', height: '262px', padding: '0', borderRadius: '12px', 
                boxShadow: `0px 8px 28px rgba(0, 0, 0, 0.05), 2px 2px 15px rgba(0, 44, 175, 0.05)`,
            }
        })
    }

    const handleMenuClick = (loc, key) => {
        // key === '1' && showEditConfirm(loc);
        key === '2' && setStatusConfirm(loc);
        key === '3' && showDeleteConfirm(loc);
    }

    const menuItems = [
                { 
                    label: 'Edit', 
                    key: '1', 
                    icon: <PopupIcon icon={editIcon} />
                },
                { 
                    label: !status ? 'Set as Default' : 'Remove', 
                    key: '2', 
                    icon: <PopupIcon icon={!status ? starIcon : starIconActive} />
                },
                { 
                    label: 'Delete', 
                    key: '3', 
                    icon: <PopupIcon icon={deleteIcon} /> 
                },
    ]

    const menu = (
        <Menu 
            onClick={e => handleMenuClick(loc, e.key)}
            items={menuItems}
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