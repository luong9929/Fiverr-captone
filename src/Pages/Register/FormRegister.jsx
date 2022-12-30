import React, { useState } from "react";

import { Button, Form, Input, Select } from "antd";

import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { signupApi } from "../../Redux/Reducer/UserReducer/UserReducer";
import { NavLink } from "react-router-dom";




const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    let newValue ={
        id: 0,
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        birthday: values.birthday,
        gender: values.gender,
        role: "User",
        skill: [
            values.skill
        ],

        certification: [
            values.certification
        ],
    }
    const action = signupApi(newValue);
    dispatch(action);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const dispatch = useDispatch();

  const frm = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: "",

      certification: "",
    },
    onSubmit: (value) => {
      const newValue = {
        id: 0,
        name: value.name,
        email: value.email,
        password: value.password,
        phone: value.phone,
        birthday: value.birthday,
        gender: value.gender,
        role: "User",
        skill: value.skill,

        certification: value.certification,
      };
      const action = signupApi(newValue);
      dispatch(action);
    },
  });

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
      onSubmit={frm.handleSubmit}
    >
      <Form.Item
        name="email"
        label="E-mail"
        id="email"
        onChange={frm.handleChange}
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        id="password"
        onChange={frm.handleChange}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="name"
        label="Name"
        id="name"
        onChange={frm.handleChange}
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        id="phone"
        onChange={frm.handleChange}
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        id="gender"
        onChange={frm.handleChange}
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="true">Male</Option>
          <Option value="false">Female</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="certification"
        label="Certification"
        id="certification"
        onChange={frm.handleChange}
        rules={[
          {
            required: true,
            message: "Please select Certification!",
          },
        ]}
      >
        <Select placeholder="select your Certification">
          <Option value="DIB">DIB</Option>
          <Option value="PYNOW">PYNOW</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="skill"
        label="Skill"
        id="skill"
        onChange={frm.handleChange}
        rules={[
          {
            required: true,
            message: "Please select Skill!",
          },
        ]}
      >
        <Select placeholder="select your Skill">
          <Option value="WED">WED</Option>
          <Option value="DESIGN">DESIGN</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        size={12}
        onChange={frm.handleChange}
        name="birthday"
        label="Birthday"
        id="birthday"
        rules={[
          {
            required: true,
            message: "Please select Birthday!",
          },
        ]}
      >
        <input type="date" name="" id=""  className="px-3 py-1 rounded-md"/>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className="text-gray-500 border-blue-500">
          Register
        </Button>
      </Form.Item>

      <div className="flex justify-center items-center ">
        <p className="m-0 pr-2  ">Already have an account?</p>
        <NavLink to='/login' className="text-xl font-bold text-blue-600"> Login</NavLink>
      </div>
    </Form>
  );
};
export default App;
