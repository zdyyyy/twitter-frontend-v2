import homeSvg from '@assets/home.svg'
import messageSvg from '@assets/message.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';
import style from '../common.module.scss';
import { matchPath } from 'react-router-dom';
export const menus = [
    {
        key: 'tweet',
        title: 'tweet',
        link: '/tweet/:id',
    },
    {
        key: 'home',
        title: 'main page',
        link: '/',
        icon: <img className={style.icon} src = {homeSvg} alt = "" />
    },
    {
        key: 'search',
        link: '/search',
        isMenu: true,
        icon: <img className={style.icon} src = {searchSvg} alt = "" />
    },
    {
        key: 'notification',
        title: 'notification',
        link: '/notification',
        isMenu: true,
        icon: <img className={style.icon} src = {tipSvg} alt = "" />
    },
    {
        key: 'message',
        title: 'message',
        link: '/message',
        isMenu: true,
        icon: <img className={style.icon} src = {messageSvg} alt = "" />
    },
    {
        key: 'comment',
        // title: 'response',
        // link: '/comment/:id',
        link: '/comment',
        hideHeader: true,
    },
    {
        key: 'createTweet',
        // title: 'Tweet',
        link: '/createTweet',
        hideHeader: true,
    }
];

export const getMenuByKey = (key) => menus.find((item) => item.key === 
key);

//matchPath('/comment/:id','/comment/1') => True
export const getMenuByLink = (link) => menus.find((item) => matchPath(item.link,link));


export const includeMenu = (link) => menus.some((item) => item.link === 
link);