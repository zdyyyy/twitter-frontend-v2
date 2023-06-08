import { useEffect } from 'react';
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

// const MAXY = 100;

// /**
//  * 
//  * pull to refresh 
//  */

// export const usePullToRefresh = () => {
//     const y = useRef(0);
//     const [tip,setTip] = useState();
//     // scrollTop === 0;
//     // document.documentElement.scrollTop === 0;
//     // touchstart touchmove touchend;
//     // y's Offset
//     // max Offset maxY
//     useEffect(() => {
//         window.ontouchstart = (e) => {
//             if (document.documentElement.scrollTop === 0){
//             y.current = e.touches[0].pageY;
//             };
//         }
//         window.ontouchmove = (e) => {
//           if (document.documentElement.scrollTop === 0){
//             if (e.touches[0].pageY - y.current > MAXY){
//                 setTip('Release to refresh');
//                 return;
//             }
//             if (e.touches[0].pageY - y.current > 0){
//                 setTip('Pull to refresh');
//             }
//           }     
//         };
//         return () => {
//             window.ontouchstart = null;
//             window.ontouchmove = null;
//         }
//     },[]);

//     useEffect(() => {
//         window.ontouchend = () => {
//             if (document.documentElement.scrollTop === 0){
//               if (tip === 'Release to refresh'){
//                 setTip('Loading...');
//                 setTimeout(() => {
//                     setTip('Refresh successfully');
//                     setTimeout(() => {
//                         setTip('');
//                 },500);
//               },1000);
//               return;
//             }
//             setTip('');
//         }
//         };
//         return () => {
//             window.ontouchend = null;
//         };     
//     },[tip]);

//     return tip;


// }