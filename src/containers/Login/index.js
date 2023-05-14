import './index.css';
import { useState } from 'react';
// import { Button } from 'antd-mobile';

const Login = () => {
  const [name,setName] = useState(''); 
  const [pwd,setPwd] = useState(''); 
  console.log(name);
  const clickHandler = () => {
    alert('login successfully' + name + ',' + pwd);
  }
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }
  const onChangePwHandler = (e) => {
    setPwd(e.target.value);
}
  return (
    <div className="login">
        <div>username: <input onChange = {onChangeNameHandler}/></div>
        <div>password: <input type = "password" onChange = {onChangePwHandler}/></div>
        <div><button onClick={clickHandler}>Login</button></div>
    </div>
  );
}

export default Login;
