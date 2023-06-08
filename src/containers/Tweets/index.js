import TweetCard from '@components/TweetCard';
import { getFeeds } from '@services/tweets';
import { PullToRefresh } from 'antd-mobile';
import { useState, useEffect } from 'react';
import { CellMeasurer, CellMeasurerCache, List, WindowScroller } from 'react-virtualized';
import style from './index.module.scss';

const tweet1 = {
  "id":1, // tweet_id
  "user": {
      "id":2, // tweet_user_id
      "username": "EpiGaming", // tweet_user_name
      "nickname": "EpiGaming", // tweet_user_nickname
      "avatar_url": "https://images.alphacoders.com/131/1311951.jpg" // tweet_user_avatar_address
  }, // tweet_user_info
  "comments": [
      {
          "id":1, //comment_id
          "tweet_id":1, //comment_tweet_id
          "user":{
              "id":1, //comment_tweet_user_id
              "username":"admin", //comment_tweet_username
              "nickname":null, //comment_tweet_user_nickname
              "avatar_url":'https://images6.alphacoders.com/131/1311352.png',//comment_tweet_user_avatar_address
          }, //comment_tweet_user_info
          "content":"I am sorry",//comment_content
          "created_at":"2021-12-22T15:03:52.662052Z",//comments_created_at
          "Likes_count":10, //comment_likes_count
          "has_liked":false //current_user_like_or_not
      }
  ], //this tweet's comment set
  "created_at": "2021-12-18T07:38:01.699129Z", //tweet_created_at
  "content": "This is a test",
  "likes": [], //which user like this tweet
  "likes_count": 100, // this tweet like count
  "comments_count": 100, // this tweet comment count
  "has_liked":false, // current user likes or not 
  "photo_urls":[
                // 'https://images.alphacoders.com/131/1311951.jpg',
                // 'https://images6.alphacoders.com/131/1311352.png',
                'https://images5.alphacoders.com/131/1311353.jpeg',
                'https://images6.alphacoders.com/131/1311965.jpg'] //tweet image address
}

const tweet = {
  "id":1, // tweet_id
  "user": {
      "id":2, // tweet_user_id
      "username": "EpiGaming", // tweet_user_name
      "nickname": "EpiGaming", // tweet_user_nickname
      "avatar_url": "https://images.alphacoders.com/131/1311951.jpg" // tweet_user_avatar_address
  }, // tweet_user_info
  "comments": [
      {
          "id":1, //comment_id
          "tweet_id":1, //comment_tweet_id
          "user":{
              "id":1, //comment_tweet_user_id
              "username":"admin", //comment_tweet_username
              "nickname":null, //comment_tweet_user_nickname
              "avatar_url":'https://images6.alphacoders.com/131/1311352.png',//comment_tweet_user_avatar_address
          }, //comment_tweet_user_info
          "content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",//comment_content
          "created_at":"2021-12-22T15:03:52.662052Z",//comments_created_at
          "Likes_count":10, //comment_likes_count
          "has_liked":false //current_user_like_or_not
      }
  ], //this tweet's comment set
  "created_at": "2021-12-18T07:38:01.699129Z", //tweet_created_at
  "content": "This is a test",
  "likes": [], //which user like this tweet
  "likes_count": 100, // this tweet like count
  "comments_count": 100, // this tweet comment count
  "has_liked":false, // current user likes or not 
  "photo_urls":[
                'https://images.alphacoders.com/131/1311951.jpg',
                'https://images6.alphacoders.com/131/1311352.png',
                'https://images5.alphacoders.com/131/1311353.jpeg',
                'https://images6.alphacoders.com/131/1311965.jpg'] //tweet image address
}

const defaultData = [];

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 200,
})

const noRowsRenderer = () => 'Loading...';

const Tweets = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const init = async () => {
        const res = await getFeeds();
        setData(res);
      }
      init();
    },[]);
    
    
    const rowRenderer = ({ key,style:sy,index, parent }) => (
    <div style = {sy} key = {key}>
      <CellMeasurer
        cache = {cache}
        columnIndex = {0}
        key = {key}
        rowIndex = {index}
        parent = {parent}
      >      
      {({ registerChild }) => (
        <div style = {sy} key = {key} ref = {registerChild}>
          <TweetCard dataSource={data[index]}/>
        </div>
        )}
      </CellMeasurer>
      
    </div>);
    return (
      <div className={style.container}>
        <PullToRefresh
          onRefresh={async ()=> {
             const res = await getFeeds();
             setData((d) => [...d,...res]);
          }}
        ></PullToRefresh>
        <WindowScroller>
            {({
              height,width,isScrolling, registerChild,onChildScroll, scrollTop,
              }) => (
              <div ref = {registerChild}>
                <List 
                  isScrolling = {isScrolling}
                  onScroll = {onChildScroll}
                  scrollTop = {scrollTop}
                  autoHeight
                  height = {height}
                  deferredMeasurementCache = {cache}
                  rowHeight = {cache.rowHeight}
                  overscanRowCount = {2}
                  noRowsRenderer = {noRowsRenderer}
                  rowCount = {data.length}
                  rowRenderer = {rowRenderer}
                  width = {width}
              />
              </div>
            )}
            </WindowScroller>
        
      </div>)
};
export default Tweets;