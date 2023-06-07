import { useState, useEffect } from 'react';
import style from './index.module.scss';
import createTweetSvg from '@assets/createTweet.svg';
import IconButton from '@components/iconButton';
import { fileByBase64 } from '@utils/';

const ImageUpload = ({
    onChange,
}) => {
  const onChangeUpFile = (e) => {
    const { files } = e.target;
    const fls = Object.values(files);
    const flss = fls.map((f) => new Promise((r) => {
        fileByBase64(f).then((res) => {
            r({
                key: f.name,
                content: res,
            });
        });
    }));
    Promise.all(flss).then((res) => {
        const result = {};
        res.forEach((item) => {
            result[item.key] = item.content;
        })
        onChange(res);
    });
  };
  return (
    <div className = {style.container}>
      <input type = 'file' encType = 'multipart/form-data' 
      accept = "image/gif.image/jpg" 
      className = {style.upFile}
      multiple = "multiple"
      onChange = {onChangeUpFile} />
      <IconButton 
      src={createTweetSvg} 
      svgClass={style.ImageUpload}
      className={style.imageButton} />
    </div>);
};

export default ImageUpload;