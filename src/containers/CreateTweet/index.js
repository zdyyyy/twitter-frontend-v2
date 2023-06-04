import IconButton from '@components/iconButton';
import TButton from '@components/TButton';
import { useAppContext } from '@utils/context';
import { TextArea } from 'antd-mobile';
import { useState, useEffect } from 'react';
import style from './index.module.scss';


const CreateTweet = () => {
	const [content,setContent] = useState();
    const [store] = useAppContext();
	const onClickCreate = () => {

    }
    const onChangeContent = (v) => {
        setContent(v);
    }
	return (
      <div className = {style.container}>
        <Header>
          <TButton disabled = {content.length === 0} onClick={onClickCreate}>Tweet</TButton>
        </Header>
        <div className={style.content}>
            <div className={style.left}>
                <img className={style.avatar} src = {store.user?.avatar_url} alt = "" />
            </div>
            <div className={style.right}>
                <TextArea row = {5} value = {content} onChange = {onChangeContent} className = {style.
                text} placeholder = "newsfeeds?"/>
                <div className={style.button}>
                    <IconButton />
                </div>
            </div>
        </div>
    </div>
	);
};
	
export default CreateTweet;