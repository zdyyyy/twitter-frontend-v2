import Bar from '@components/Bar';
import { useState, useRef } from 'react';
import style from './index.module.scss';
import { PropTypes } from 'prop-types';
import { Image, ImageViewer } from 'antd-mobile';
import classNames from 'classnames';

//image representation components
//max 4 pic
// 1 fill
// 2 one left one right
// 3 one left two right
// 4 two left two right

const ImageCard = ({
    imgs,
    likesCount,
    commentsCount
}) => {
    const imageViewRef = useRef();
    const [visible, setVisible] = useState(false);
    const getWrapper =() => {
        switch (imgs.length) {
            case 1:
                return style.wrapper1;
            case 2:
                return style.wrapper2;
            case 3:
                return style.wrapper3;
            case 4:
                return style.wrapper4;
            default:
                return style.wrapper;
        }
    };
    const onClickImage = (index) => {
        setVisible(true);
        imageViewRef.current.swipeTo(index);
    }

    return (
    <div className={style.container}>
        <div className={classNames(style.wrapper,getWrapper())}>
            {imgs.map((img,index) => (<Image onClick = {() => onClickImage(index)} fir = "cover" className={classNames(style.img,`img${index}`)} key = {classNames(img, index)} src = {img} alt="" />))}
        </div>
        <ImageViewer.Multi
            ref = {imageViewRef}
            images={imgs}
            visible={visible}
            defaultIndex={1}
            onClose={() => {
                setVisible(false)
            }}
        />
        {visible && <Bar isBottom likesCount={likesCount} commentsCount={commentsCount}/>}
        </div>
    )
};

ImageCard.propTypes = {
    imgs: PropTypes.arrayOf(PropTypes.string),
    commentsCount: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
}

ImageCard.defaultProps = {
    imgs: []
}

export default ImageCard;