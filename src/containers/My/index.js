import Header from "@components/Header";
import { useAppContext } from "@utils/context";
import { Button, Tabs } from "antd-mobile";
import { useState,useEffect } from "react";

import style from './index.module.scss';

const My = () => {
    const [store] = useAppContext();
    const [data,setData] = useState();

    useEffect(() => {
        
    },[]);
    return (
        <div className={style.container}>
            <Header title={store.user?.nickname || 'none'} />
            {/* <Header title={store.user.nickname || 'none'} /> */}
            <div className={style.header} />
            <img className={style.avatar} src = {store.user?.avatar} alt = ""/>
            <Button className={style.edit}>Update Personal Info</Button>
            <div className={style.nickname}>
                {store.user?.nickname || 'none'}
            </div>
            <div className={style.username}>
                @
                {store.user?.username}
            </div>
            <div className={style.follower}>
                <span className = {style.number1}>
                    100
                </span>
                Following
                <span className = {style.number2}>
                    200
                </span>
                Follower
            </div>
            <Tabs>
                <Tabs.Tab title = "Tweet" key = "tweet">
                    tweet
                </Tabs.Tab>
                <Tabs.Tab title = "Tweet and Reply" key = "reply">
                    reply
                </Tabs.Tab>
            </Tabs>
        </div>
    )
}

export default My;