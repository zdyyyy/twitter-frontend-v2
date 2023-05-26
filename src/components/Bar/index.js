import { useState } from 'react';
import { TabBar } from 'antd-mobile/es/components/tab-bar/tab-bar';
import style from './index.module.scss';
import cycleSvg from '@assets/cycle.svg';
import heartSvg from '@assets/heart.svg';
import msgSvg from '@assets/msg.svg';
import upSvg from '@assets/up.svg';
import PropTypes from 'prop-types';


//comments, share, likes
const getBars = ({
    commentCount,
    likesCount,
}) =>[{
    key: 'msg',
    icon: (
      <div>
        <img className={style.icon} src = {msgSvg} alt = "" />
        {commentCount > 0 && <span className={style.count}>{commentCount}</span>}
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
    likesCount,
    commentCount,
}) => {
    const [activeKey, setActiveKey] = useState();
    

    const onChangeTabItem = (key) => {
        setActiveKey(key);
    }
    return (
        <div className={style.container}>
          <TabBar activeKey = {activeKey} onChange = {onChangeTabItem}>
            {getBars({
                likesCount,
                commentCount,
            }).map((item) => (
              <TabBar.Item key = {item.key} icon = {item.icon} />
                ))}
          </TabBar>
        </div>
    );
};

Bar.propTypes = {
    commentCount: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
}

export default Bar;


