import './index.css';
import { Button,Input,Form,Dialog } from 'antd-mobile';
import { loginService } from '../../services/login';

const initialValues = {
  username: 'hhhhhh',
  password: '12345'
}
const Login = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = form.getFieldsValue()
    const res = await loginService(values.username,values.password);
    if (res && res.length > 0){
      Dialog.alert({
        content: 'success',
      });
      return;
    }
    Dialog.alert({
      content: 'fail',
    });
    
  };

  return (
    <div className="login">
        <Form 
          form = {form}
          layout='horizontal' mode='card' initialValues={initialValues}
          footer={
            <Button block color = 'primary' onClick={onSubmit} size = 'large'>
              Login
            </Button>
          }
        >
          <Form.Item label = 'username' name = 'username'>
            <Input placeholder='Please enter username' clearable />
          </Form.Item>
          <Form.Item label = 'password' name = 'password'>
            <Input placeholder='Please enter password' clearable />
          </Form.Item>
        </Form>
    </div>
  );
}

export default Login;
