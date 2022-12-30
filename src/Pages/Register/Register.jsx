import React from 'react'
import '../../Assets/Scss/Pages/Register/Register.scss'
import { ArrowLeftOutlined,UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import App from './FormRegister';

export default function register() {
  return (
    <div className='register-page'>
<div className="back container pt-3   ">
        <NavLink to='/'>
               <ArrowLeftOutlined className='icon text-blue-200 shadow-inner border-blue-200 border m-0'/>
        </NavLink>
         
      </div>
      <div className="form-register w-2/6 m-auto bg-white  py-5 px-10   shadow-lg " >

        <h1 className='font-bold text-2xl text-center'>REGISTER</h1>
        <div className="register">
            <App/>
    </div>
      </div>



    </div>
  )
}
