import React from 'react'
// import axios from 'axios'

import {Form,Input} from 'antd'
import {Link} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'

const Register = () => {
    // const navigate=useNavigate();
    
   const onFinishHandler=async(values)=>{
    // try {
        
    //     const res=await axios.post('/api/v1/user/register',values)
       
    //     if(res.data.success){
    //         message.success('Register successfully')
    //         navigate('/login')
    //     }
    //     else{
    //        message.error(res.data.message);

    //     }
    // } catch (error) {
        
    //     console.log(error)
    //     message.error('somthing went wrong')
    // }

    }
  return (
    <>
    <div className="from-container">
      <Form layout="vertical" onFinish={onFinishHandler} className='register-from'>
        <h3 className='text-center'>OHSM</h3>
        <p className='text'> Create an account</p>
        <Form.Item label="Name" name='name' rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input type='text' />
        </Form.Item>
        <Form.Item label="Email" name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input type='email' />
        </Form.Item>
        <Form.Item label="Password" name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        
        <button className="btn btn-success" type='submit'>

          Register
        </button>
        <div className="singup">Already a user?
    
        <Link to='/Login' className='m-2 '>Sing in</Link>
      </div>
        
      </Form>
    </div>
    </>
  )
}

export default Register