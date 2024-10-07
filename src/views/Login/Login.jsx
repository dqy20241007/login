
import { Form, Input, Button, Checkbox,message } from 'antd';
import { useNavigate  } from 'react-router-dom';
import './Login.css';
// import link from 'react-router-dom';
import { $login } from '../../api/adminApi'
 import {mock} from "mockjs";
function Login() {
  let [form]=Form.useForm();
  const history = useNavigate();//
  //表单提交成功
  const onFinish = async (values) => {
    console.log('Success:', values);
    let msg= await $login(values)
    if(msg=='登录成功'){
      history(`/Home`)
      message.success(msg);
    }else{
      message.error(msg);
    }
   console.log(msg)
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  //   message.error('校验失败');
  // };
  const onReset=()=>
  { 
    history(`/Layout`)}
  const chenggong=()=>
  { 
    history(`/Home`)}
  return (
    <div className="Login">
      <div className='content'>
             <h2>登录页</h2>
      <Form
        name="basic"
        form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        initialValues={{
          remember: true,
          username:'',
          password:''
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
        <Form.Item
        name="username"
        label="账号"
        rules={[
          {
            type: 'email',
            message: '当前输入不是邮箱格式!',
          },
          {
            required: true,
            message: '请输入您的邮箱账号!',
          },
        ]}
      >
        <Input placeholder="邮箱格式账号" />
      </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          <Button htmlType="submit"onClick={()=>{form.resetFields();}}style={{marginLeft:'10px'}}>
            取消
          </Button>
          <Button onClick={onReset}style={{marginLeft:'10px'}}>注册</Button>
        </Form.Item>
      </Form>

      
        
    
      </div>
    </div>
  );
}

export default Login;
