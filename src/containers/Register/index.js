import { Button } from 'antd-mobile';
import { Input } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons';
import logo from '../../assets/twitter-logo.svg';
import datepickerIcon from '../../assets/datepicker-icon.svg';
import style from './index.module.css';


//Registration page

const Register = () =>{
    console.log('>>>')
    return (
      <div>
        <div  className={style.header}>
            <CloseOutline className={style.closeIcon}/>
            <img src = {logo} alt = "twitter-logo" className={style.twitterLogo}/>

        </div>
        <div className={style.form}>
            <div className = {style.formTitle}>Create your account</div>
            <Input placeholder='name' className = {style.input}/>
            <Input placeholder='telephone' className = {style.input}/>
            <div className={style.changeTypeButton}>change to email </div>
            <div className={style.birthdayTitle}>birthday </div>
            <div>This will not show up</div>
            <div className={style.birthdayInput}>
              <div className={style.birthdayTitleItem}>birthday</div>
              <div>
                <span className={style.birthdayPlaceholder}>Year/Month/Day </span>
                <img className = {style.datepickerIcon} src = {datepickerIcon} alt = "datepickerIcon"></img>
              </div>
            </div>
        </div>
        <div className="footer">
            <Button>next</Button>
        </div>
        </div>)
    }

    export default Register;