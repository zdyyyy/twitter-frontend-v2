
import { Button,Input,Form,Dialog } from 'antd-mobile';
import { login } from '../../services/login';
import style from './index.module.scss';
import Header from '@components/Header';
import TInput from '@components/TInput';

const Login = () => {
  const [form] = Form.useForm();

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
        return;
      }
      Dialog.alert({
      content: 'fail',
    });
    } 
  };

  return (
    <>
    <Header />
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
          <a href = "/"
             target = "_blank"
          >
            Register!
          </a>
        </div>
    </div>
    </>
  );
}

export default Login;
