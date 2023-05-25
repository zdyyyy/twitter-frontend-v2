import { TabBar } from 'antd-mobile';
import { useState, useEffect } from 'react';
import style from './index.module.scss';
import homeSvg from '@assets/home.svg'
import messageSvg from '@assets/message.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';
const menus = [
    {
        key: 'home',
        title: 'main page',
        link: 'tweets',
        icon: <img className={style.icon} src = {homeSvg} alt = "" />
    },
    {
        key: 'search',
        link: '/',
        icon: <img className={style.icon} src = {searchSvg} alt = "" />
    },
    {
        key: 'tip',
        title: 'notification',
        link: '/',
        icon: <img className={style.icon} src = {tipSvg} alt = "" />
    },
    {
        key: 'message',
        title: 'message',
        link: '/',
        icon: <img className={style.icon} src = {messageSvg} alt = "" />
    },
];

const Bottom = () => {
    const [activeKey, setActiveKey] = useState();
    

    const onChangeTabItem = (key) => {
        setActiveKey(key);
    }
    return (
        <div className={style.container}>
          <TabBar activeKey = {activeKey} onChange = {onChangeTabItem}>
            {menus.map((item) => (
              <TabBar.Item key = {item.key} icon = {item.icon} />
                ))}
          </TabBar>
        </div>
    );
};

export default Bottom;