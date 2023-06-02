import { useLocation, useNavigate } from 'react-router-dom';
import { getMenuByKey, getMenuByLink} from './constants';

//get current menu
export const useCurMenus = () => {
    const lo = useLocation();
    const it = getMenuByLink(lo.pathname);
    return it;
    
}

//收敛路由的跳转
export const useGoto = () => {
    const navigate = useNavigate();

    return (key) => {
        const it = getMenuByKey(key);
        if (!it) return navigate('/');
        return navigate(it.link);
    };
};