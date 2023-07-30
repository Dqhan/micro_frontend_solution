import React from "react";
import { Row, Input, Form, Button } from "antd";
import styles from "../../../styles/index.scss";
import { useNavigate, Outlet } from "react-router-dom";

const LOGIN = (props) => {
  const navigate = useNavigate();
  const { shared } = props;
  const [form] = Form.useForm();

  const handleLogin = async () => {
    const values = await form.getFieldsValue();
    shared.setShared({
      userInfo: values,
    });
  };

  const handleRegisterClick = () => {};

  return (
    <div className={styles["user-application"]}>
      <Form form={form}>
        <Row>
          <label>User Name</label>
        </Row>
        <Row>
          <Form.Item name="username">
            <Input></Input>
          </Form.Item>
        </Row>
        <Row>
          <label>Password</label>
        </Row>
        <Row>
          <Form.Item name="password">
            <Input></Input>
          </Form.Item>
        </Row>
        <Row>
          <Button onClick={handleRegisterClick}>Register</Button>
        </Row>
      </Form>
    </div>
  );
};

export default LOGIN;
