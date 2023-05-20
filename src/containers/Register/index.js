import { useState } from 'react';
import Header from '@components/Header';
import OneStep from './components/OneStep';
import TwoStep from './components/TwoStep';

//step sign
const STEP = {
    ONE: 1,
    TWO: 2,
}
//Registration page

const Register = () =>{

    const [step, setStep] = useState(STEP.ONE);
    const [userInfo,setUserInfo] = useState();
    
    const gotoNextHandler = (data) => {
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
        {step === STEP.ONE && <OneStep gotoNextHandler = {gotoNextHandler}/>}
        {step === STEP.TWO && <TwoStep userInfo={{}} confirmRegisterHandler = {confirmRegisterHandler}/>}
        <TwoStep
            userInfo={userInfo}
            confirmRegisterHandler = {confirmRegisterHandler}
        />
      </div>);
    };

    export default Register;