import homeSvg from '@assets/home.svg'
import messageSvg from '@assets/message.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';
import style from '../common.module.scss';
export const menus = [
    {
        key: 'home',
        title: 'main page',
        link: '/tweets',
        icon: <img className={style.icon} src = {homeSvg} alt = "" />
    },
    {
        key: 'search',
        link: '/search',
        icon: <img className={style.icon} src = {searchSvg} alt = "" />
    },
    {
        key: 'tip',
        title: 'notification',
        link: '/notification',
        icon: <img className={style.icon} src = {tipSvg} alt = "" />
    },
    {
        key: 'message',
        title: 'message',
        link: '/message',
        icon: <img className={style.icon} src = {messageSvg} alt = "" />
    },
];

export const getMenuByKey = (key) => {
    return menus.find((item) => item.key === key);
}

export const getMenuByLink = (link) => {
    return menus.find((item) => item.link === link);
}