import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
const { Item } = Form;

const LoginForm = () => {
  const [loginData, setLoginData] = useState(null);
  const onFinish = (values) => {
    setLoginData([values]);
  };

  return (
    <div className="login-form">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError
      >
        <Item
          label="Username"
          name="username"
          rules={[
            {
              type: 'string',
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input autoFocus />
        </Item>

        <Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Item>

        <div className="div-remember-return">
          <Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Item>
          <Item name="remember" valuePropName="checked">
            <span>you don't have Account? </span>
            <Link to="/signup"> Sign up</Link>
          </Item>
        </div>

        <Item>
          <Button className="btn-form" type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
      <Button
        className="btn-form"
        type="default"
        style={{ border: "1px solid #ddd" }}
      >
        <Link to="/">Return to Home page</Link>
      </Button>
    </div>
  );
};

export default LoginForm;