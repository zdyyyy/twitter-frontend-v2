import { Steps, TextArea, Toast } from 'antd-mobile';
import { useState, useEffect } from 'react';
import moment from 'moment';
import style from './index.module.scss';
import { useAppContext } from '@utils/context';
import TButton from '@components/TButton';
import Header from '@components/Header';
import { createComment } from '@services/comments'
import { useParams } from 'react-router-dom';
import { useGoto } from '@utils/hooks';

const { Step } = Steps;

const defaultTweet = {
        id:1, // tweet_id
        user: {
            id:2, // tweet_user_id
            username: "EpiGaming", // tweet_user_name
            nickname: "EpiGaming", // tweet_user_nickname
            avatar_url: "https://images.alphacoders.com/131/1311951.jpg" // tweet_user_avatar_address
        }, // tweet_user_info
        comments: [
            {
                id:1, //comment_id
                tweet_id:1, //comment_tweet_id
                user:{
                    id:1, //comment_tweet_user_id
                    username:"admin", //comment_tweet_username
                    nickname:null, //comment_tweet_user_nickname
                    avatar_url:'https://images6.alphacoders.com/131/1311352.png',//comment_tweet_user_avatar_address
                }, //comment_tweet_user_info
                content:"Test!",//comment_content
                created_at:"2021-12-22T15:03:52.662052Z",//comments_created_at
                Likes_count:10, //comment_likes_count
                has_liked:false //current_user_like_or_not
            }
        ], //this tweet's comment set
        created_at: "2021-12-18T07:38:01.699129Z", //tweet_created_at
        content: "This is a test",
        likes: [], //which user like this tweet
        likes_count: 100, // this tweet like count
        comments_count: 100, // this tweet comment count
        has_liked:false, // current user likes or not 
        photo_urls:['https://images.alphacoders.com/131/1311951.jpg',
                      'https://images6.alphacoders.com/131/1311352.png',
                      'https://images5.alphacoders.com/131/1311353.jpeg',
                      'https://images6.alphacoders.com/131/1311965.jpg'] //tweet image address
    }


const Comments = () => {
    const [store] = useAppContext();
    const [data, setDate] = useState(defaultTweet);
    const [text, setText] = useState('');
    const params = useParams();
    const go = useGoto();
    // console.log('params',params.id)
    useEffect(() => {
        setDate(defaultTweet);
    },[])

    const onClickReply = () => {
      createComment({
        content: text,
        tweet_id: params.id,
      }).then((res) => {
        if (res?.success) {
          Toast.show('Response Successfully');
          go();
          return;
        }
        Toast.show('fail to response');
      })

    };
    const onChangeText = (v) => {
      setText(v);
    }
    return (
     <div className={style.container}>
        <Header>
          <TButton disabled = {text.length === 0} onClick={onClickReply}>Response</TButton>
        </Header>
        <Steps
           direction='vertical'
           current={1}
        >
         <Step
          icon = {<img className = {style.icon} src = {data.user.avatar_url} alt = "" />}
          title = {(
            <div className={style.stepContent}>
              <div className={style.header}>
                <span className={style.nickname}>
                {data.user.nickname}</span>
                @
                <span className={style.username}>
                {data.user.username}</span>
                &nbsp;&nbsp;
                <span>{moment(data.created_at).format
                ('MM DD')}</span>
              </div>
              <div className={style.content}>
                {data.content}
              </div>
              <div className={style.response}>
                Response
                <span className = {style.responseName}>
                    @
                    {data.user.username}
                </span>
              </div>
            </div>  
          )}
          description = 'Description'
          
         />
         <Step
           icon = {
             <img className = {style.icon} src = {store.user?.avatar_url} alt = "" />
           }
           title = {(
            <div>
                <TextArea value = {text} onChange={onChangeText} className = {style.text} placeholder = "Your Response"/>
            </div>
           )}
           description = {(
            <div>Description</div>
           )}
           
         />
        </Steps>
      </div>
    );
};

export default Comments;