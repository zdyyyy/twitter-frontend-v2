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
    const [form] = Form.useForm(); //get form object
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

    const onClickNextStep = () => {
        const validate = form.validateFields();
        if (validate) {
            const data = form.getFieldValue();
            console.log(data);
        }
        console.log(validate);
        
    }

    return (
      <div>
        <Header />
        <div className={style.form}>
            <div className = {style.formTitle}>Create your account</div>
            <Form form = {form} initialValues={formData} className = {style.formContainer}>
                <Form.Item 
                    name='name'
                    rules = {[{required:true, message:"Name should not be empty"}]}
                    >
                    <Input placeholder='name' className = {style.input}/>
                </Form.Item>
                
                {accountType === ACCOUNT_TYPE.TEL && (
                <Form.Item 
                    name = 'tel'
                    rules = {[{required:true, message:"Tel should not be empty"}]}>
                    <Input placeholder='telephone' className = {style.input}/>
                </Form.Item>)}
                {accountType === ACCOUNT_TYPE.EMAIL && (
                <Form.Item 
                    name = 'email'
                    rules = {[{required:true, message:"Email should not be empty"}]}>
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
            <Button className={style.footerButton} onClick={onClickNextStep}>next</Button>
        </div>
        </div>)
    }

    export default Register;