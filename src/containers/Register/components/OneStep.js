import { Button, Form} from 'antd-mobile';
import { useState } from 'react';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';
import style from '../index.module.scss';
import TInput from '@components/TInput'; 
import Footer from './Footer';
import PropTypes from 'prop-types';

const ACCOUNT_TYPE = {
    TEL: 'TEL',
    EMAIL: 'EMAIL'
}
//Registration page

const OneStep = ({gotoNextStepHandler,}) =>{
    // form data 
    const [form] = Form.useForm(); //get form object
    const [formData] = useState({
        name: '',
        tel:'',
        email:'',
        birthday:'',
        
    });
    const [accountType,setAccountType] = useState(ACCOUNT_TYPE.TEL);
    const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);
    const onAccountTypeChange = () => {
        if (accountType === ACCOUNT_TYPE.TEL){
            setAccountType(ACCOUNT_TYPE.EMAIL);
            return;
        } 
        setAccountType(ACCOUNT_TYPE.TEL);
        
    };

    const onClickNextStep = async () => {
        
        const validate = await form.validateFields();
        if (validate) {
            // const data = form.getFieldValue();
            console.log(data);
            gotoNextStepHandler();
        }
        console.log(validate);
        
    }

    const onValuesChange = async () => {
        try{
            const validate = await form.validateFields();
            if (validate){
                setFooterButtonDisabled(false);
                return;
            }
        } catch (e){
            if (e.errorFields.length === 0){
                setFooterButtonDisabled(false);
                return;
            }
            setFooterButtonDisabled(true);
        }
        
    };

    return (
      <div>
        {/* <Header /> */}
        <div className={style.form}>
            <div className = {style.formTitle}>Create your account</div>
            <Form form = {form} initialValues={formData} onValuesChange={onValuesChange} className = {style.formContainer}>
                <Form.Item name='name' rules = {[{required:true, message:"Name should not be empty"}]}>
                    <TInput length = {5} label = 'name'/>
                </Form.Item>
                
                {accountType === ACCOUNT_TYPE.TEL && (
                <Form.Item 
                    name = 'tel'
                    rules = {[{required:true, message:"Please enter a valid phone number", pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/g }]}>
                    <TInput length = {11} label = 'tel'/>
                </Form.Item>)}
                {accountType === ACCOUNT_TYPE.EMAIL && (
                <Form.Item 
                    name = 'email'
                    rules = {[{required:true, message:"Please enter a valid email", pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g}]}>
                    <TInput label = 'email'/>
                </Form.Item>)}
                
                <span className={style.changeTypeButton} onClick = {onAccountTypeChange}>
                    {accountType === ACCOUNT_TYPE.EMAIL ? 'change to telephone': 'change to email'}
                </span>
                <div className={style.birthdayTitle}>birthday </div>
                <div>This will not show up</div>
                <Form.Item name = 'birthday'>
                    <DatePickerInput/>
                </Form.Item>
            </Form>
        </div>
        <Footer label = "Next Step" disabled = {footerButtonDisabled} onClickNextStep = {onClickNextStep}/>
        </div>)
    }

OneStep.propTypes = {
    gotoNextStepHandler: PropTypes.func.isRequired,
}
export default OneStep;
