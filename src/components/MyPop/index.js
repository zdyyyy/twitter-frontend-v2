import { Popup } from 'antd-mobile';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import { useAppContext } from '@utils/context';

//personal info drawer
const MyPopup = ({
    visible,
    onClose,
}) => {
    const [store] = useAppContext();
    const go = useGoto();
    return (
        <Popup
          visible = {visible}
          closeOnMaskClick = {onClose}
          position = "left"
          bodyStyle = {{ width: '60vw'}}
        >
          <div className={style.container}>
            <div className = {style.title}>Account Info</div>
            <img className = {style.avatar} src = {store.user.avatar_url} alt = "head" />
            <div className={style.nickname}>
                {/* {store.user?.nickname} */}
                {store.user.nickname || 'none'}
            </div>
            <div className={style.username}>
                @
                {/* {store.user?.username} */}
                {store.user.username}
            </div>
            <div className={style.follower}>
                <span className={style.number1}>100</span>
                Following
                <span className={style.number2}>200</span>
                Follower
            </div>
            <div className = {style.listItem} onClick = {() => go('my')}>
                <UserOutline />
                <span className={style.info}>
                    Personal Info
                </span>
            </div>  
            <div className={style.footer}>
                Logout
            </div>
          </div>
        </Popup>
    )
};

MyPopup.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}
export default MyPopup;