import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";

import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/client";

import { addCar } from "../../store/person";
import { ADD_CAR } from "../../queries";

const { Option } = Select;

const AddCarForm = () => {
  const dispatch = useDispatch();
  const [createCarMutation] = useMutation(ADD_CAR);
  const [form] = Form.useForm();
  const personsName = useSelector((state) =>
    state.people.persons.map((person) => ({
      id: person.id,
      name: person.firstname + " " + person.lastname,
    }))
  );

  const onFinish = (values) => {
    console.log("Success:", values);
    const newCarId = uuidv4();
    dispatch(
      addCar({
        id: newCarId,
        make: values.make,
        model: values.model,
        price: values.price,
        year: values.year,
        personId: values.personId,
      })
    );
    createCarMutation({
      variables: {
        id: newCarId,
        make: values.make,
        model: values.model,
        price: values.price.toString(),
        year: values.year.toString(),
        personId: values.personId,
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
      name="car-form"
      initialValues={{
        year: new Date().getFullYear(),
        price: "100.00",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ display: "flex", justifyContent:"space-evenly",  }}
    >
      <Form.Item
        name="make"
        style={{
          width: "300px",
          justifyContent: "flex-start",
        }}
        rules={[{ required: true, message: "Please enter car make!" }]}
      >
        <Input placeholder="Make" />
      </Form.Item>

      <Form.Item
        name="model"
        style={{
          width: "300px",
        }}
        rules={[{ required: true, message: "Please enter car model!" }]}
      >
        <Input placeholder="Model" />
      </Form.Item>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          width: "300px",
        }}
      >
        <Form.Item
          name="price"
          style={{
            width: "142px",
          }}
          rules={[{ required: true, message: "Please enter car price!" }]}
        >
          <InputNumber
            type={"number"}
            style={{ width: "100%" }}
            min="0.01"
            step="0.01"
          />
        </Form.Item>

        <Form.Item
          name="year"
          style={{
            width: "142px",
          }}
          rules={[{ required: true, message: "Please enter car year!" }]}
        >
          <InputNumber
            placeholder="Year"
            type={"number"}
            style={{ width: "100%" }}
            min="2000"
            step="1"
            
          />
        </Form.Item>
      </div>

      
      <Form.Item
        style={{
          textAlign: "left",
          width: "300px",
        }}
        name="personId"
        rules={[{ required: true, message: "Please enter car Owner!" }]}
      >
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
        >
          {personsName.map((person) => (
            <Option key={person.id} value={person.id}>
              {person.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        style={{
          width: "300px",
        }}
      >
        <Button type="primary" htmlType="submit" style={{ backgroundColor:"#acafb5", border:"#acafb5" }}>
          Add Car
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCarForm;
