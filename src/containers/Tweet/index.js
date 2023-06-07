import Bar from "@components/Bar";
import { OBJECT_KEYS } from "@components/Bar/constants";
import Header from "@components/Header";
import ImageCard from "@components/ImageCard";
import moment from "moment";
import { useState, useEffect } from "react";
import style from './index.module.scss';

const tweet = {
    id:1, // tweet_id
    user: {
        id:2, // tweet_user_id
        username:'EpiGaming', // tweet_user_name
        nickname: 'EpiGaming', // tweet_user_nickname
        avatar_url: 'https://images.alphacoders.com/131/1311951.jpg', // tweet_user_avatar_address
    }, // tweet_user_info
    comments: [
        {
            id:1, //comment_id
            tweet_id:1, //comment_tweet_id
            user:{
                id:1, //comment_tweet_user_id
                username:'admin', //comment_tweet_username
                nickname:null, //comment_tweet_user_nickname
                avatar_url:'https://images6.alphacoders.com/131/1311352.png',//comment_tweet_user_avatar_address
            }, //comment_tweet_user_info
            content:'Test!',//comment_content
            created_at:'2021-12-22T15:03:52.662052Z',//comments_created_at
            Likes_count:10, //comment_likes_count
            has_liked:false //current_user_like_or_not
        }
    ], //this tweet's comment set
    created_at: '2021-12-18T07:38:01.699129Z', //tweet_created_at
    content: 'This is a test',
    likes: [], //which user like this tweet
    likes_count: 100, // this tweet like count
    comments_count: 100, // this tweet comment count
    has_liked:false, // current user likes or not 
    photo_urls:['https://images.alphacoders.com/131/1311951.jpg',
                  'https://images6.alphacoders.com/131/1311352.png',
                  'https://images5.alphacoders.com/131/1311353.jpeg',
                  'https://images6.alphacoders.com/131/1311965.jpg'] //tweet image address
}

const Tweet = () => {
    const [data, setDate] = useState(tweet);
    useEffect(() => {
        setDate(tweet);
    },[]);
    return (
        <div className={style.container}>
             <Header />
             <div className={style.contentContainer}>
                <div className={style.header}>
                <img src={data.user.avatar_url} alt = "" className = {style.avatar} />
                <div className = {style.right}>
                  <div className={style.nickname}>
                      {data.user.nickname}
                  </div>
                  <div className={style.username}>
                    @
                    {data.user.username}
                  </div>
                </div>
             </div>
        
        <div className={style.content}>
            {data.content}
        </div>
        <div className={style.photo}>
            <ImageCard
              imgs={data.photo_urls}
              likesCount={data.likes_count}
              commentsCount={data.comments_count}
            />
        </div>
        </div>
        <div className={style.timeline}>
            {moment(data.created_at).format('A h:m . YYYY/MM/DD')}
            Twitter for iPhone
        </div>
        <div className={style.bar}>
            <Bar 
              id = {data.id}       
              likesCount = {data.likes_count}
              commentsCount = {data.comments_count}
              type = {OBJECT_KEYS.TWEET}
            />
        </div>
    </div>
        
    );
};

export default Tweet;