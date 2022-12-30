import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../Assets/Scss/Components/HeaderHome/HeaderHome.scss";
import { UserOutlined } from "@ant-design/icons";

import { Button, Dropdown } from "antd";
import { ACCESSTOKEN, settings, USER_LOGIN, USER_PROFILE } from "../../util/Config";

import { Input, Space } from 'antd';
import { searchCongViecApi } from "../../Redux/Reducer/ProductReducer/ProductReducer";
import App from "./menuCongViec/menuCongViec";
import { userProfileApi } from "../../Redux/Reducer/UserReducer/UserReducer";


import { Avatar } from 'antd';
const { Search } = Input;



export default function HeaderHome() {
  const { userLogin } = useSelector((state) => state.UserReducer);
  const { userProfile } = useSelector((state) => state.UserReducer);
  console.log(userProfile)
  const dispatch = useDispatch()
  const onSearch = (value) => {
 
        
    const action = searchCongViecApi(value)
    dispatch(action)

};


















  const renderLogin = () => {
    if (userLogin.user) {
      if(userProfile == ''){
        const action = userProfileApi(userLogin.user.id)
          dispatch(action)
      }
      const renderAvatar = () =>{
        if(userProfile.avatar !== ''){
          return  <img src={userProfile.avatar} alt="" className="w-40 h-40 rounded-full"/>
        }
        return  <Avatar size={40} icon={<UserOutlined />} />
     }
      return (
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow
        >
          <Button className="rounded-full border-none p-0 mb-1">
              {renderAvatar()}
          </Button>
        </Dropdown>
      );
    } 
      return (
        <div className="items-center flex-shrink-0 hidden lg:flex item text-gray-500">
          <button className="self-center px-8 py-3  signIn">
            {" "}
            <NavLink className="" to="login">
              Sign in
            </NavLink>
          </button>
          <button className="self-center px-4  py-2 font-medium rounded border border-gray-500  join hover:bg-green-700 hover:border-green-700 hover:text-white">
          <NavLink className="" to="register">
              John
            </NavLink>
          </button>
        </div>
      );
    
  };

  const items = [
    {
      key: "1",
      label: (
      
        
            <NavLink to='profile' >Profile</NavLink>
          
       
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
          onClick={() => {
            settings.eraseCookie(ACCESSTOKEN, 0);
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(USER_PROFILE);
            localStorage.removeItem(ACCESSTOKEN);
            window.location.href = "login";
          }}
        >
          <span className="text-red-500">Logout</span>
        </a>
      ),
    },
  ];


  return (
    <>
      <header className="p-1  dark:text-gray-100 header">
        <div className="container flex justify-between h-16 mx-auto items-center">
          <NavLink
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#404145">
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </NavLink>
        <div>
          
        <Space direction="horizontal">
    <Search
      placeholder=" search "
      onSearch={onSearch}
      style={{
        width: 400,
      }}
    />
    
  </Space>
        </div>
          <div className="items-center flex-shrink-0 hidden lg:flex item ">
            {renderLogin()}
          </div>

          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>


        </div>
      </header>
      <div className="menuCongViec">
        <App/>
      </div>
    </>
  );
}
