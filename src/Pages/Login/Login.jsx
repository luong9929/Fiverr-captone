import React from "react";
import "../../Assets/Scss/Pages/Login/Login.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { LoginApi } from "../../Redux/Reducer/UserReducer/UserReducer";

export default function Login() {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
      
    },
    // validationSchema: yup.object().shape({
    //   email: yup.string().email("Email không đúng định dạng !").required('Vui lòng nhập email của bạn'),
    //   password: yup
    //     .string()
    //     .required("Vui lòng nhập mật khẩu của bạn")
    //     .matches(
    //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //       "Phải chứa 8 ký tự, một chữ hoa, một chữ thường, một số và một ký tự đặc biệt"
    //     )
    // }),
    onSubmit: (values) => {
      
      const action = LoginApi(values);
      dispatch(action);
    },
  });

  return (
    <div className="login-page">
      <div className="back container py-10   ">
        <NavLink to="/">
          <ArrowLeftOutlined className="icon text-blue-200 shadow-inner border-blue-200 border" />
        </NavLink>
      </div>
      <div className="form-login w-2/6 m-auto bg-white  py-12 px-16  mt-20 shadow-lg ">
        <div className="w-2/4 m-auto px-12 pb-5">
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
        </div>
        <form action="" onSubmit={frm.handleSubmit}>
          <div className="form-group">
            <h4 className="ml-2 text-sm">Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={frm.handleChange}
              placeholder="Email"
              className="py-3 border w-full rounded-xl px-2"
            />
            <span></span>
          </div>

          <div className="form-group mt-3">
            <h4 className="text-sm ml-2">Password</h4>
            <input
              type="password"
              name="password"
              id="password"
              onChange={frm.handleChange}
              placeholder="Password"
              className="py-3 border w-full rounded-xl px-2"
            />
            <span></span>
          </div>

          <button
            type="submit"
            className="w-full mt-5 border py-2 rounded-full bg-blue-700 text-white"
          >
            {" "}
            Login
          </button>
          <p className="text-center mt-3 hover:text-blue-500 ">
            <NavLink to="/register" className="font-normal">
              register now!
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
