import React, { useEffect } from "react";
import { Row, Input, Form } from "antd";

const INfO = (props) => {
  const [form] = Form.useForm();
  const { shared } = props;

  useEffect(() => {
    const { token } = shared.getShared();
    const { username, password } = token || {};
    form.setFieldsValue({
      username,
      password,
    });
  }, []);

  return (
    <div>
      <Form form={form}>
        <Row>
          <label>User Name</label>
        </Row>
        <Row>
          <Form.Item name="username">
            <Input disabled></Input>
          </Form.Item>
        </Row>
        <Row>
          <label>Password</label>
        </Row>
        <Row>
          <Form.Item name="password">
            <Input disabled></Input>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
};

export default INfO;
