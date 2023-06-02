import Header from '@components/Header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Bottom from '@components/Bottom';
import { useAppContext } from '@utils/context';
import { useEffect } from 'react';
// import Cookies from 'js-cookie';
import { getSuggestedQuery } from '@testing-library/react';
import style from './index.module.scss';

const App = () => {
    const [, setStore] = useAppContext();
    const nav = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const init = async () => {
            const useId = Cookies.get('userId');
            if (!userId){
                Toast.show('Please login again');
                nav('/login');
                return;
            }
            const res = await getSuggestedQuery(userId);
            if (res.data){
                setStore({
                    user: res.data,
                });
                if (location.pathname === 'login'){
                    nav('/tweets');
                }
                return;
            }
            nav('/login');
        };
        init();
    },[]);


    return (
    <div className={style.container}>
        <Header />
        <Outlet />
        <Bottom />
    </div>
    )
}

export default App; 