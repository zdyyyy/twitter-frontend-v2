import { useState, useEffect } from 'react';
import style from './index.module.scss'
import moment from 'moment';

const tweet = {
    "id":1, // tweet_id
    "user": {
        "id":2, // tweet_user_id
        "username": "EpiGaming", // tweet_user_name
        "nickname": "EpiGaming", // tweet_user_nickname
        "avatar_url": "/test1.jpg" // tweet_user_avatar_address
    }, // tweet_user_info
    "comments": [
        {
            "id":1, //comment_id
            "tweet_id":1, //comment_tweet_id
            "user":{
                "id":1, //comment_tweet_user_id
                "username":"admin", //comment_tweet_username
                "nickname":null, //comment_tweet_user_nickname
                "avatar_url":null,//comment_tweet_user_avatar_address
            }, //comment_tweet_user_info
            "content":"Test!",//comment_content
            "created_at":"2021-12-22T15:03:52.662052Z",//comments_created_at
            "Likes_count":0, //comment_likes_count
            "has_liked":false //current_user_like_or_not
        }
    ], //this tweet's comment set
    "created_at": "2021-12-18T07:38:01.699129Z", //tweet_created_at
    "content": "This is a test",
    "likes": [], //which user like this tweet
    "likes_count": 0, // this tweet like count
    "comments_count": 1, // this tweet comment count
    "has_liked":false, // current user likes or not 
    "photo_urls":['https://img.moegirl.org.cn/common/thumb/1/14/%E5%BD%A9%E5%9B%BE%E6%98%9F%E9%87%8E%E7%88%B1.jpg/800px-%E5%BD%A9%E5%9B%BE%E6%98%9F%E9%87%8E%E7%88%B1.jpg'] //tweet image address
}
const TweetCard = () => {
    const [data,setDate] = useState();
    useEffect(() => {
        console.log('data',data);
        setDate([]);
    },[]);
    return (
      <div className={style.container}>
        <div className={style.avatarContainer}>
            <img src = {tweet.user.avatar_url} alt = 'head image' className = {style.avatar} />
        </div>
        <div className={style.contentContainer}>
            <div className={style.header}>
                <span className = {style.nickname}>
                    {tweet.user.nickname}
                </span>
                @
                <span className = {style.username}>{tweet.user.username}</span>
                &nbsp;&nbsp;
                {moment(tweet.created_at).format('MM minutes')}
            </div>
        </div>
        <div className={style.content}>
        {tweet.content}
        </div>
        <div className={style.photo}>
          {}
        </div>
        <div className={style.bar}>
          {}
        </div>
      </div>)
};
export default TweetCard ;