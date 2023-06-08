import { post,get } from '../utils/request';

//create tweet
export const createTweet = (params) => post('/api/comments',params);

//get newsfeeds
export const getFeeds = () => get('/api/newsfeeds').then((res) => {
    if (res.data && res.data.length > 0) {
        return res.data.map((item) => ({...item.tweet}));
    }
    return [];
});