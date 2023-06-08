import cycleSvg from '@assets/cycle.svg';
import heartSvg from '@assets/heart.svg';
import likeRedSvg from '@assets/likeRed.svg';
import msgSvg from '@assets/msg.svg';
import upSvg from '@assets/up.svg';
import { LinkOutline } from 'antd-mobile-icons';


import style from './index.module.scss'

export const BAR_KEYS = {
    HEART: 'heart',
    MSG: 'msg',
    CYCLE: 'cycle',
    UP: 'up',
}

//get bar config
export const getBars = ({  
    commentsCount, 
    likesCount,
    nav,
    id,
    onlyStar, //only show like button
    liked,
}) =>{
    if (onlyStar) {
        return [{
            key: BAR_KEYS.HEART,
            icon: (
                <div>
                    <img className={style.icon} src = {heartSvg} alt="" />
                    {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
                </div>),
        }];
    }
    return [{
    key: BAR_KEYS.MSG,
    icon: (
      <div onClick = {() => nav(`/comments/${id}`)}>
        <img className={style.icon} src = {msgSvg} alt = "" />
        {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
      </div>)
    },
    {
    key: BAR_KEYS.CYCLE,
    icon: <img className={style.icon} src = {cycleSvg} alt = "" />
    },
    {
    key: BAR_KEYS.HEART,
    icon: (
        <div>
          {liked ? <img className={style.icon} src = {likeRedSvg} alt = "" />
          : <img className={style.icon} src = {heartSvg} alt = "" />}
          {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
        </div>),
    },
    {
    key: BAR_KEYS.UP,
    icon: <img className={style.icon} src = {upSvg} alt = "" />
    },];
};

export const ACTION_KEYS = {
    COPY: 'copy',
    CANCEL: 'cancel',
}

export const ACTIONS  = [
    { text: 
        <div className={style.copyButton}>
            <LinkOutline style = {{ marginRight: 10 }}/>
            copy tweet link
        </div>, 
           key: ACTION_KEYS.COPY,
        },
        { text: <div className={style.cancelButton}>cancel</div>, key: ACTION_KEYS.CANCEL},
];

export const OBJECT_KEYS = {
    TWEET: 'tweet',
    COMMENT: 'comment'
}
