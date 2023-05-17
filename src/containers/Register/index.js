import { Button, Form, Input } from 'antd-mobile';
import { useState } from 'react';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';
import style from './index.module.scss';

const ACCOUNT_TYPE = {
    TEL: 'TEL',
    EMAIL: 'EMAIL'
}
//Registration page

const Register = () =>{
    // form data
    const [formData] = useState({
        name: '',
        tel:'',
        email:'',
        birthday:'',
        
    });
    const [accountType,setAccountType] = useState(ACCOUNT_TYPE.TEL);
    const onAccountTypeChange = (e) => {
        if (accountType === ACCOUNT_TYPE.TEL){
            setAccountType(ACCOUNT_TYPE.EMAIL);
            return;
        } else {
            setAccountType(ACCOUNT_TYPE.TEL);
        }
    }
    return (
      <div>
        <Header />
        <div className={style.form}>
            <div className = {style.formTitle}>Create your account</div>
            <Form initialValues={formData} className = {style.formContainer}>
                <Form.Item name='name'>
                    <Input placeholder='name' className = {style.input}/>
                </Form.Item>
                
                {accountType === ACCOUNT_TYPE.TEL && (
                <Form.Item name = 'tel'>
                    <Input placeholder='telephone' className = {style.input}/>
                </Form.Item>)}
                {accountType === ACCOUNT_TYPE.EMAIL && (
                <Form.Item name = 'email'>
                    <Input placeholder='email' className = {style.input}/>
                </Form.Item>)}
                
                <div className={style.changeTypeButton} onClick = {onAccountTypeChange}>
                    {accountType === ACCOUNT_TYPE.EMAIL ? 'change to telephone': 'change to email'}
                </div>
                <div className={style.birthdayTitle}>birthday </div>
                <div>This will not show up</div>
                <Form.Item name = 'birthday'>
                    <DatePickerInput />
                </Form.Item>
            </Form>
        </div>
        <div className={style.footer}>
            <Button className={style.footerButton}>next</Button>
        </div>
        </div>)
    }

    export default Register;