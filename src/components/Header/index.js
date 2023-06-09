import { useAppContext } from '@utils/context';
import { useCurMenus, useGoto, useIncludeMenu } from '@utils/hooks';
import { Button } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';
import logo from '../../assets/twitter-logo.svg';
import style from './index.module.scss';
import PropTypes from 'prop-types';
import MyPopup from '@components/MyPop';
import { useState } from 'react';


/**
 * common header
 * @param {*} param0 
 * @returns 
 */
const Header = ({
  children,
}) => {
    const [visible,setVisible] = useState(false);
    const [store] = useAppContext();
    const menu = useCurMenus();
    const go = useGoto();
    const result = [];
    //login status
    if (store.user) {
      if (!menu.hideHeader){
        result.push(
        <div key = "backHeader" className={style.headerWrapper}>
          <svg className={style.back} onClick={() => go()}
          viewBox = '0 0 24 24' aria-hidden = "true"><g><path d="M20 11H7.
          414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414
          0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.
          293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414
          13H20c.553 0 1-.447 1-1s-.447-1-1-1z" /></g></svg>
          {title && (
          <span key = "title" className={style.title}>
              {title}
          </span>
          )}
          {menu.title && (
           <span key = "menutitle" className={style.title}>
            {menu.title}
           </span>
           )}
          {children}
        </div>,      
        );
      }else{
      //   result.push(
      //     <div key = "avatarUrl" className={style.backHeader}>
      //        <img src = {store.user?.avatar_url} className = {style.avatar} alt = "" />
      //     </div>,
      // )
        // result.push(<MyPopup visible={visible} onClose{() => setVisible(false)} />)
        result.push(<MyPopup 
          key = 'myPopup'
          visible={visible} 
          onClose{...() => setVisible(false)} />);
        result.push(
          <div 
            key = "avatarUrl" 
            className={style.backHeader}
            onClick = {
              () => setVisible(true)
            }>
            <img src = {store.user.avatar_url} className = {style.avatar} alt = "" />
          </div>,)
        result.push(
        <span key = "title" className={style.title}>
          {store.title}
        </span>,
      );
      } 
    }
    //login status
    if (store.closeHeaderHandler){
       result.push(
          <CloseOutline 
              className = {style.closeIcon} 
              onClick = {store.closeHeaderHandler}
        />,
        )
       result.push(<img src = {logo} alt = "twitter-logo" className={style.twitterLogo} 
        />);
      }
    return (
      <div className={style.header}>
        {result}
      </div>
      
    );
};

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

Header.defaultProps = {
  children: null,
  title: '',
}

export default Header; 

