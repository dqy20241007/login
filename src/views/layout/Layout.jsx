
import { Form, Input, Button, message } from 'antd';
import { useNavigate  } from 'react-router-dom';
import '../Login/Login.css';
import { $post } from '../../api/post'
 import {mock} from "mockjs";
function Layout() {
  //
  let [form]=Form.useForm();
  const history = useNavigate();//
  //表单提交成功
  //表单提交成功
  const onFinish = async (values) => {
    console.log('Success:', values);
    let msg= await $post({...values})
    if(msg){
      history(`/Login`)
      message.success('注册成功');
    }
  };
  // const onFinish = (values) => {
  //   console.log('Success:', values);
  //   axios.post('https://lianghj.top:8888/api/private/v1/Layout',{
  //     password:values.password,
  //     username:values.username
  //   })
  //   .then(res=>{
  //     let {meta,data} = res.data;
  //     if(meta.status==200){
  //       message.success(meta.msg);
  //       sessionStorage.token = data.token;
  //       history('/home');//
  //     }else{
  //       message.warning(meta.msg);
  //     }
  //   })
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  //   message.error('校验失败');
  // };
  const onReset=()=>
  { 
    history(`/Login`)}
  return (
    <div className="Login">
      <div className='content'>
      
          <h2>注册页</h2>
         
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
        <Input  placeholder="邮箱格式账号"/>
      </Form.Item>

        <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请确认密码!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入密码不一致，请确认!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            确认
          </Button>
          <Button htmlType="submit"onClick={()=>{form.resetFields();}}style={{marginLeft:'10px'}}>
            取消
          </Button>
         </Form.Item>
      </Form>
      </div>
    </div>
  );
}

export default Layout;
