import { Button,Form,Dialog } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { login } from '../../services/login';
import style from './index.module.scss';
import TInput from '@components/TInput';
import { useAppContext } from '@utils/context';
import { useEffect } from 'react';
// import Cookies from 'js-cookie';

const Login = () => {
  const [form] = Form.useForm();

  const [, setStore] = useAppContext();
  useEffect(() => {
    setStore({
        closeHeaderHandler: null,
    });
  },[])

    
  const onSubmit = async () => {
    const values = await form.getFieldsValue()
    // const values = await form.validateFields()
    if (values) {
      const res = await login(values.username,values.password);
      console.log('>>',res);
      if (res.success && res.data.length > 0){
        Dialog.alert({
          content: 'success',
        });
        // Cookies.set('userId',res.data[0].id);
        return;
      }
      Dialog.alert({
      content: 'fail',
    });
    } 
  };

  return (
    <>
    <div className={style.login}>
        <div className={style.formTitle}>Twitter Login</div>
        <Form 
          form = {form}
          className = {style.formContainer}
        >
          <Form.Item name = 'username' rules = {[
            { required: true, message: 'username cannot be empty'}
          ]}>
            <TInput label = 'username' />
          </Form.Item>
          <Form.Item name = 'password' rules = {[
            { required: true, message: 'password cannot be empty'}
          ]}>
            <TInput label = 'password' type = 'password' />
          </Form.Item>
          <Button className = {style.footerButton} onClick={onSubmit}>
              Next Step
          </Button>
        </Form>
        <div className={style.goToRegister}>
          Do not have an account? 
          <Link
            to = "/register"
          >
            Register!
          </Link>
        </div>
    </div>
    </>
  );
}

export default Login;
