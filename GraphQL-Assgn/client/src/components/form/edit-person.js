import { UserOutlined, SaveFilled, CloseOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

const EditPersonForm = ({
  firstname,
  lastname,
  saveOnClick,
  cancelOnClick,
}) => {
  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="person-form"
      onFinish={(values) => saveOnClick(values)}
      onFinishFailed={onFinishFailed}
      onReset={cancelOnClick}
      autoComplete="off"
      initialValues={{
        firstname,
        lastname,
      }}
      layout="inline"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Form.Item
          name="firstname"
          style={{
            width: "300px",
          }}
          rules={[{ required: true, message: "Please enter first name!" }]}
        >
          <Input
            placeholder="First Name"
            prefix={
              <UserOutlined
                style={{
                  color: "#1890ff",
                }}
              />
            }
          />
        </Form.Item>

        <Form.Item
          name="lastname"
          rules={[{ required: true, message: "Please enter last name!" }]}
          style={{
            width: "300px",
          }}
        >
          <Input
            placeholder="Last Name"
            prefix={
              <UserOutlined
                style={{
                  color: "#1890ff",
                }}
              />
            }
          />
        </Form.Item>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button type="primary" htmlType="submit" title="Save">
          <SaveFilled key="save" />
        </Button>
        <Button type="primary" danger htmlType="reset" title="Cancel">
          <CloseOutlined key="cancel" twoToneColor="red" />
        </Button>
      </div>
    </Form>
  );
};

export default EditPersonForm;
