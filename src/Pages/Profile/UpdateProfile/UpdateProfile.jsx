import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useDispatch } from "react-redux";
import { updateProfileApi } from "../../../Redux/Reducer/UserReducer/UserReducer";
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
const UpdateProfile = (props) => {
  const dispatch = useDispatch()

  const [form] = Form.useForm();
  const onFinish = (values) => {
    
    let newValue ={
      id: 1789,
      name: values.name,
      email: values.email,
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
  
  const action = updateProfileApi(props.userProfile.id,newValue);
  dispatch(action);
  };
 

  
 
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
      
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        
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
        name="name"
        label="Name"
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
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
         
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

    

     
      <Form.Item
        size={12}
       
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
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="skill"
        label="Skill"
        rules={[
          {
            required: true,
            message: "Please select skill!",
          },
        ]}
      >
        <Select placeholder="select your skill">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="certification"
        label="Certification"
        rules={[
          {
            required: true,
            message: "Please select certification!",
          },
        ]}
      >
        <Select placeholder="select your certification">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
    

      <Form.Item {...tailFormItemLayout}>
        <Button type="default" htmlType="submit"   onClick={()=>{
            
        }}>
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};
export default UpdateProfile;
