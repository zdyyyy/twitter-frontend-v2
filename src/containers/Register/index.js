import { Button } from 'antd-mobile';
import { Input } from 'antd-mobile';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';
import style from './index.module.css';


//Registration page

const Register = () =>{
    console.log('>>>')
    return (
      <div>
        <Header />
        <div className={style.form}>
            <div className = {style.formTitle}>Create your account</div>
            <Input placeholder='name' className = {style.input}/>
            <Input placeholder='telephone' className = {style.input}/>
            <div className={style.changeTypeButton}>change to email </div>
            <div className={style.birthdayTitle}>birthday </div>
            <div>This will not show up</div>
            <DatePickerInput />
        </div>
        <div className={style.footer}>
            <Button className={style.footerButton}>next</Button>
        </div>
        </div>)
    }

    export default Register;