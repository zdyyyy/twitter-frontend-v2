import Header from '@components/Header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Bottom from '@components/Bottom';
import { useAppContext } from '@utils/context';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import style from './index.module.scss';
import { Toast } from 'antd-mobile';
import CreateButton from '@components/CreateButton';
import { useCurMenus } from '@utils/hooks';
import { getUser } from '@services/login';

const App = () => {
    const [, setStore] = useAppContext();
    const nav = useNavigate();
    const location = useLocation();
    const menu = useCurMenus();
    useEffect(() => {
        const init = async () => {
            // const userId = Cookies.get('userId');
            const userId = Cookies.get('id');
            if (!userId){
                Toast.show('Please login again');
                nav('/login');
                return;
            }
            const res = await getUser(userId);
            console.log('res',res.data)
            if (res.data){
                setStore({
                    user: res.data,
                });
                if (location.pathname === '/login'){
                    nav('/tweets');
                }
                return;
            }
            nav('/login');
        };
        init();
    },[]);

    const onClickCreateTweet = () => {
        nav('/createTweet');
    }
    console.log('menu',menu);
    return (
    <div className={style.container}>
        {!menu.hideHeader && <Header />}
        <Outlet />
        <Bottom />
        {!menu.hideHeader && <CreateButton onClick = {onClickCreateTweet}/>}
    </div>
    )
}

export default App; 