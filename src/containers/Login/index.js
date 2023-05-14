import './index.css';
import { useState } from 'react';
import { Button,Input,Form,Dialog } from 'antd-mobile';
// import { Form } from 'antd-mobile/es/components/form/form';
const initialValues = {
  username: 'hhhh',
  password: '123'
}
const Login = () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: JSON.stringify(values),
    })
  }
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
