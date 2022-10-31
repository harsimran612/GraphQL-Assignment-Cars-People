import { Button, Form, Input } from "antd";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";

import { addPerson } from "../../store/person";
import { ADD_PERSON } from "../../queries";

const AddPersonForm = () => {
  const dispatch = useDispatch();
  const [createPersonMutation] = useMutation(ADD_PERSON);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    const newPersonId = uuidv4();
    dispatch(
      addPerson({
        id: newPersonId,
        firstname: values.firstname,
        lastname: values.lastname,
        cars: [],
      })
    );
    createPersonMutation({
      variables: {
        id: newPersonId,
        firstname: values.firstname,
        lastname: values.lastname,
      },
    });
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="person-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style= {{ display: "flex", justifyContent: "space-evenly" }}
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
          />
      </Form.Item>

      <Form.Item
        style={{
          width: "300px",
        }}
      >
        <Button type="primary" htmlType="submit" style={{ backgroundColor:"#acafb5", border:"#acafb5" }}>
          Add Person
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddPersonForm;
