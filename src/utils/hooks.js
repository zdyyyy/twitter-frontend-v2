import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import { getMenuByKey, getMenuByLink, includeMenu} from './constants';

//get current menu
export const useCurMenus = () => {
    const lo = useLocation();
    const it = getMenuByLink(lo.pathname);
    return it || {};
    
}

//收敛路由的跳转
export const useGoto = () => {
    const navigate = useNavigate();

    return (key,params) => {
        if (!key) {
           return navigate(-1);
        }
        const it = getMenuByKey(key);
        if (!it) return navigate('/');
        //tweet/:id
        const link = generatePath(it.link,params)
        return navigate(link);
    };
};

export const useIncludeMenu = () => {
    const lo = useLocation();
    const result = includeMenu(lo.pathname);
    return result;
}