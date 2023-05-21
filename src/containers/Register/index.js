import { useState } from 'react';
import Header from '@components/Header';
import OneStep from './components/OneStep';
import TwoStep from './components/TwoStep';

// steps
const STEP = {
    ONE: 1,
    TWO: 2
}
//Registration page

const Register = () =>{

    const [step, setStep] = useState(STEP.ONE);
    const [userInfo,setUserInfo] = useState();
    
    const gotoNextStepHandler = (data) => {
        setUserInfo(data);
        setStep(STEP.TWO);
    };

    const confirmRegisterHandler = (password) => {
        console.log({
            password,
            ...userInfo,
        })

    };

    return (
      <div>
        <Header />
        {step === STEP.ONE && <OneStep gotoNextStepHandler = {gotoNextStepHandler}/>}
        {step === STEP.TWO && <TwoStep userInfo={userInfo} confirmRegisterHandler = {confirmRegisterHandler}/>}
      </div>);
    };

    export default Register;