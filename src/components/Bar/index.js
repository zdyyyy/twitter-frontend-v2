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


//comments, share, likes
const getBars = ({  
    commentsCount,
    likesCount,
    nav,
    id,
}) =>[{
    key: 'msg',
    icon: (
      <div onClick = {() => nav(`/comment/${id}`)}>
        <img className={style.icon} src = {msgSvg} alt = "" />
        {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
      </div>)
},
{
    key: 'cycle',
    icon: <img className={style.icon} src = {cycleSvg} alt = "" />
},
{
    key: 'heart',
    icon: (
        <div>
          <img className={style.icon} src = {heartSvg} alt = "" />
          {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
        </div>
    )
},
{
    key: 'up',
    icon: <img className={style.icon} src = {upSvg} alt = "" />
},]


const Bar = ({
    id,
    isBottom,
    likesCount,
    commentsCount,
}) => {
    const [activeKey, setActiveKey] = useState();
    const nav = useNavigate();
    
    const onChangeTabItem = (key) => {
        setActiveKey(key);
    }
    return (
        <div className={classNames({ 
            [style.container]: !isBottom, 
            [style.containerBottom]: isBottom
        })}
        >
          <TabBar activeKey = {activeKey} onChange = {onChangeTabItem}>
            {getBars({
                likesCount,
                commentsCount,
                nav,
                id,
            }).map((item) => (
              <TabBar.Item key = {item.key} icon = {item.icon} />
                ))}
          </TabBar>
        </div>
    );

};

Bar.propTypes = {
    isBottom: PropTypes.bool,
    commentsCount: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
}

Bar.defaultProps = {
    isBottom: false,
}

export default Bar;


