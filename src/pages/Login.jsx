
import '../Styles/Register.css'
import {Link} from 'react-router-dom'
import React from 'react';
import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';





const Login = () => {
    
        // const [showPassword, setShowPassword] = useState(false);
      
        // const handleTogglePassword = () => {
        //   setShowPassword(!showPassword);
        // };
      
//   const navigate=useNavigate();
//   const dispatch=useDispatch();
//   const onfinishHandler=async(values)=>{
//   try {
//     dispatch(showLoding());
//     const res=await axios.post('/api/v1/user/login',values)
//      window.location.reload();
//      dispatch(hideLoding());
//     if(res.data.success){   
//       localStorage.setItem('token',res.data.token);
//       message.success('Login successfully');
//       navigate('/');
//     }
//     else{
//       message.error(res.data.message)
//     }
    
//   } catch (error) {
//     dispatch(hideLoding());
//     console.log(error)
//     message.error('somthing went wrong')
    
//   }
    
// }
const onfinishHandler=()=>{

}
  return (
    <div>
        
       <div className="from-container">
       <Form layout="vertical" onFinish={onfinishHandler} className='register-from '>
        <h3 className='text-center'>OHSM</h3>
        <p className='text'>Sing in to OHSM</p>
        
         <Form.Item label="Email" name='email' rules={[{ required: true, message: 'Enter your email' }]}>
            <Input type='email' required/>
      </ Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          placeholder="Enter your password"
          visibilityToggle
        />
      </Form.Item>
        <button className=" btn btn-success " type='submit'>

           Login
     </button>
    

    <div>
  <div className="link">
    <div className="google">
      
    </div>
  </div>
  <div className="singup">Don't have account?
    
    <Link to='/Register' className='m-2'>Sing up</Link>
  </div>
</div>

      </Form>
      </div>
    
        </div>
  )
}

export default Login