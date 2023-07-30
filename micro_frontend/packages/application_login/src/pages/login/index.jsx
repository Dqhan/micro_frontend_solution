import React from "react";
import { Row, Input, Form, Button } from "antd";
import styles from "../../../styles/index.scss";
import { useNavigate } from "react-router-dom";

const LOGIN = (props) => {
  const navigate = useNavigate();
  const { shared } = props;
  const [form] = Form.useForm();

  console.log('shared', shared)

  const handleLogin = async () => {
    const values = await form.getFieldsValue();
    shared.setShared({
      token: values,
    }); 
    navigate(-1);
  };

  const handleRegisterClick = () => {
    // navigate("/");
  };

  return (
    <div className={styles["user-application"]}>
      <div className={styles.title}>Welcome to Micro Frontend Application</div>
      <div className={styles.title}>Please Login</div>
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
          <Button onClick={handleLogin}>Login</Button>
        </Row>
        <div className={styles.message}>
          If you have no account, please click register a account.
        </div>
        <Row>
          <Button onClick={handleRegisterClick}>Register</Button>
        </Row>
      </Form>
    </div>
  );
};

export default LOGIN;
