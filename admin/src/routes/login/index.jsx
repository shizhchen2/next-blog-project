
import { Form, Input, Button, Space } from 'antd'
import { useState } from 'react'
import './index.css'
const layout = {
    labelAlign: 'left',
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
function Login() {
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')
    const onFinish = ()=>{
        // 登录校验逻辑
    }
    const onFinishFailed = () => {
        console.log('finish faid')
    }
    return <div className="container">
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input onChange={e=>setName(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="验证码"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password onChange={e=>setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button size="normal">获取验证码</Button>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button className="login" type="primary">
                    登录
                </Button>
            </Form.Item>
        </Form>
    </div>
}
export default Login