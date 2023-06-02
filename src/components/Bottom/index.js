import { TabBar } from 'antd-mobile';
import { useState, useEffect} from 'react';
import { useAppContext } from '@utils/context';
import { useCurMenus, useGoto } from '@utils/hooks';
import { getMenuByKey, menus } from '@utils/constants';
import style from './index.module.scss';


const Bottom = () => {
    const [activeKey, setActiveKey] = useState();
    const [, setStore] = useAppContext();
    const go = useGoto();
    const menu = useCurMenus();

    useEffect(() => {
        if (menu) {
            setStore({
                title: menu.title,
            })
        }
    },[])

    const onChangeTabItem = (key) => {
        const mu = getMenuByKey(key);
        setStore({
            title: mu.title,
        });
        go(key)
    }
    return (
        <div className={style.container}>
          <TabBar onChange = {onChangeTabItem}>
            {menus.map((item) => (
              <TabBar.Item key = {item.key} icon = {item.icon} />
                ))}
          </TabBar>
        </div>
    );
};

export default Bottom;