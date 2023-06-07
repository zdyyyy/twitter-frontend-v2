import { useState } from 'react';
import { TabBar } from 'antd-mobile/es/components/tab-bar/tab-bar';
import style from './index.module.scss';
import cycleSvg from '@assets/cycle.svg';
import heartSvg from '@assets/heart.svg';
import msgSvg from '@assets/msg.svg';
import upSvg from '@assets/up.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ActionSheet, Toast } from 'antd-mobile';
import { Action } from 'antd-mobile/es/components/action-sheet';
import { LinkOutline } from 'antd-mobile-icons';
import { ACTION_KEYS, getBars, ACTIONS, BAR_KEYS, OBJECT_KEYS } from './constants';
import { cancelLike, likes } from '@services/comments';

const Bar = ({
    id,
    onlyStar,
    isBottom,
    likesCount,
    commentsCount,
    type,
}) => {
    const [activeKey, setActiveKey] = useState();
    const [visible,setVisible] = useState(false);
    const [liked,setLiked] = useState(false);

    const nav = useNavigate();
    
    const onChangeTabItem = (key) => {
        setActiveKey(key);
        if (key === BAR_KEYS.CYCLE) {
            Toast.show('Cycle successfully')
        }
        if (key === BAR_KEYS.UP) {
            setVisible(true);
        }
        if (key === BAR_KEYS.HEART) {
            if (liked) {
                setLiked(false);
                Toast.show('Cancel successfully');
                return;
            }
            likes({
                content_type: type, //object: tweet/comment
                object_id: id, //like object id
            }).then((res) => {
                if (res.success) {
                  Toast.show('Like successfully');
                  setLiked(true);
                  return;
                }
                Toast.show('Fails to like');
            })
        }
    }

    const onAction = (e) => {
        if (e.key === ACTION_KEYS.COPY) {
            if (navigator.clipboard){
              navigator.clipboard.writeText(`${window.location.origin}/tweet/${id}`);
              Toast.show('copy successfully')
            }
        }
        if (e.key === ACTION_KEYS.CANCEL){
            setVisible(false)
        }
    }

    return (
        <div className={classNames({ 
            [style.container]: !isBottom, 
            [style.containerBottom]: isBottom,
        })}
        >
          <TabBar activeKey = {activeKey} onChange = {onChangeTabItem}>
            {getBars({
                likesCount,
                commentsCount,
                nav,
                id,
                onlyStar,
                liked
            }).map((item) => (
              <TabBar.Item key = {item.key} icon = {item.icon} />
                ))}
          </TabBar>
          <ActionSheet
            visible={visible}
            actions={ACTIONS}
            onClose={() => setVisible(false)}
            onAction={onAction}
            />
        </div>
    );

};

Bar.propTypes = {
    commentsCount: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
    isBottom: PropTypes.bool,
    id: PropTypes.number,
    onlyStar: PropTypes.bool,
    type: PropTypes.oneOf([OBJECT_KEYS.COMMENT,OBJECT_KEYS.TWEET])
};

Bar.defaultProps = {
    isBottom: false,
    id: -1,
    onlyStar: false,
    commentsCount:0,
    likesCount:0,
    type: '',
}

export default Bar;


