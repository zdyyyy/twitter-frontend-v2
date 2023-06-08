import { useState, useEffect } from 'react';
import style from './index.module.scss'
import moment from 'moment';
import ImageCard from '@components/ImageCard';
import Bar from '@components/Bar';
import { useGoto } from '@utils/hooks';
import { OBJECT_KEYS } from '@components/Bar/constants';
import PropTypes from 'prop-types';


const TweetCard = ({
    dataSource,
}) => {
    const go = useGoto();
    return (
      <div className={style.container}>
        <div className={style.avatarContainer}>
            <img src = {dataSource.user.avatar_url} alt = 'head image' className = {style.avatar} />
        </div>
        <div className={style.contentContainer}>
            <div className={style.header}>
                <span className = {style.nickname}>
                    {dataSource.user.nickname}
                </span>
                @
                <span className = {style.username}>{dataSource.user.username}</span>
                &nbsp;&nbsp;
                {moment(dataSource.created_at).format('MM minutes')}
            </div>
        </div>
        <div className={style.content} onClick = {() =>go('tweet',{id: dataSource.id})}>
        {dataSource.content}
        </div>
        <div className={style.photo}>
          <ImageCard imgs={dataSource.photo_urls} 
          commentsCount = {dataSource.comments_count} 
          likesCount = {dataSource.likes_count}/>
        </div>
        <div className={style.bar}>
          <Bar 
            id = {dataSource.id} 
            commentsCount={dataSource.comments_count} 
            likesCount={dataSource.likes_count}
            type={OBJECT_KEYS.TWEET}
        />
        </div>
      </div>)
};

TweetCard.propTypes = {
    dataSource: PropTypes.object.isRequired,
}
export default TweetCard ;