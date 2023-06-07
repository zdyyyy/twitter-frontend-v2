import IconButton from '@components/iconButton';
import TButton from '@components/TButton';
import { useAppContext } from '@utils/context';
import { TextArea, Toast } from 'antd-mobile';
import { useState, useEffect } from 'react';
import style from './index.module.scss';
import createTweetIcon from '@assets/createTweet.svg';
import ImagePreview from '@components/ImagePreview';
import { createTweet } from '@services/tweets';
import { useGoto } from '@utils/hooks';
import Header from '@components/Header';
import ImageUpload from '@components/imageUpload';


const CreateTweet = () => {
	const [content,setContent] = useState();
    const [imgs, setImgs] = useState([]);
    const [store] = useAppContext();
    const go = useGoto();

	const onClickCreate = () => {
        createTweet({
            content,
            files: Object.values(imgs),
        }).then((res) => {
            // console.log('res',res.success);
            if (res.success) {
                Toast.show('create tweet successfully');
                go();
                return;
            }
            Toast.show('fail to create tweet');
        });
    }
    const onChangeContent = (v) => {
        setContent(v);
    }

    const onChangeFile = (v) => {
        if (v && Object.keys(v).length < 5){
          setImgs((oldV) => ({
            ...oldV,
            ...v,
          }));
          return;
        }
        Toast.show('only four images')
    }
    const handleDelImg = (index) => {
        const key = Object.keys(imgs).find((item,idx) => idx === index);
        setImgs((item) => {
            const newItem = { ...item };
            delete newItem[key]
            return newItem;
        })
    };
	return (
      <div className = {style.container}>
        <Header>
          <TButton 
            //{/* disabled = {content.length === 0} */}
            onClick={onClickCreate}>
            Tweet
          </TButton>
        </Header>
        <div className={style.content}>
            <div className={style.left}>
                <img className={style.avatar} src = {store.user?.avatar_url} alt = "" />
            </div>
            <div className={style.right}>
                <TextArea row = {5} 
                value = {content} 
                onChange = {onChangeContent} 
                className = {style.text} 
                placeholder = "newsfeeds?"/>
                <ImagePreview imgs = {Object.values(imgs)} handleDelImg = {handleDelImg}/>
                <div className={style.button}>
                    <ImageUpload onChange = {onChangeFile}/>
                </div>
            </div>
        </div>
    </div>
	);
};
	
export default CreateTweet;