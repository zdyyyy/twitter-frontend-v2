import style from '../index.module.scss';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { Input } from 'antd-mobile';
import { useState } from 'react';


//第二步 添加密码
const TwoStep = ({
    confirmRegisterHandler,
    userInfo,
}) => {
    const [password,setPassword] = useState();
    const [disabled,setDisabled] = useState(true);
    const onConfirmRegister = () => {
        confirmRegisterHandler(password);
    };
    const onChangePwd = (val) => {
        setPassword(val);
    };

    const onChangeConfirmPwd = (val) => {
        if (val === password){
            setDisabled(false);
            return;
        }
        setDisabled(true);
    };
    return (
   <div className={style.TwoStep}> 
      <div className={style.form}> 
        <div className={style.formTitle}>Create your account</div>
          <div className={style.showLabelContainer}>
            <div className={style.showLabel}>
              name:
              <span>{userInfo.name}</span>
            </div>
            {userInfo.email && (
            <div className={style.showLabel}>
              email:
            <span>{userInfo.email}</span>
            </div>
             )}
            {userInfo.tel && (
            <div className={style.showLabel}>
              tel:
              <span>{userInfo.tel}</span>
            </div>
            )}
            <div className={style.showLabel}>
              birthday:
              <span>{userInfo.birthday}</span>
            </div>
         </div>
    <div className={style.showLabel}>Please enter password</div>
    <Input className = {style.input} onChange={onChangePwd}/>
    <div className={style.showLabel}>Comfirm password</div>
    <Input className = {style.input} onChange={onChangeConfirmPwd} type = "password"/>
    {disabled && <div className={style.showTip}>Two passwords should be the same</div>}
      </div>
        <Footer disabled = {disabled} label= "comfirmed registered" onClickNextStep={onConfirmRegister}/>
    </div>
);
};

TwoStep.propTypes = {
    confirmRegisterHandler: PropTypes.func.isRequired,
    userInfo: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        tel: PropTypes.string,
        birthday: PropTypes.string,
    }).isRequired,
};

export default TwoStep;
