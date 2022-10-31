import { Card, Form, Input, InputNumber, Select } from "antd";
import {
  CalendarTwoTone,
  DollarCircleTwoTone,
  CarTwoTone,
} from "@ant-design/icons";

import React from "react";
import EditCardFormCardHeader from "../miscellaneous/edit-car-form-card-header";
import { useSelector } from "react-redux";

const { Option } = Select;

const EditCarForm = ({
  make,
  model,
  year,
  price,
  personId,
  saveOnClick,
  cancelOnClick,
}) => {
  const personsName = useSelector((state) =>
    state.people.persons.map((person) => ({
      id: person.id,
      name: person.firstname + " " + person.lastname,
    }))
  );

  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="car-form"
      initialValues={{
        make,
        model,
        year,
        price,
        personId,
      }}
      onFinish={(values) => saveOnClick(values)}
      onReset={cancelOnClick}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Card type="inner" title={<EditCardFormCardHeader />}>
        <Form.Item
          name="make"
          style={{
            width: "100%",
            marginBottom: "10px",
          }}
          rules={[{ required: true, message: "Please enter car make!" }]}
        >
          <Input placeholder="Make" prefix={<CarTwoTone />} />
        </Form.Item>

        <Form.Item
          name="model"
          style={{
            width: "100%",
            marginBottom: "10px",
          }}
          rules={[{ required: true, message: "Please enter car model!" }]}
        >
          <Input placeholder="Model" prefix={<CarTwoTone />} />
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Form.Item
            name="price"
            style={{
              width: "calc(50% - 8px)",
              marginBottom: "10px",
            }}
            rules={[{ required: true, message: "Please enter car price!" }]}
          >
            <InputNumber
              type={"number"}
              style={{ width: "100%" }}
              min="0.01"
              step="0.01"
              prefix={<DollarCircleTwoTone />}
            />
          </Form.Item>

          <Form.Item
            name="year"
            style={{
              width: "calc(50% - 8px)",
              marginBottom: "10px",
            }}
            rules={[{ required: true, message: "Please enter car year!" }]}
          >
            <InputNumber
              placeholder="Year"
              type={"number"}
              style={{ width: "100%" }}
              min="2000"
              step="1"
              prefix={<CalendarTwoTone />}
            />
          </Form.Item>
        </div>
        <Form.Item
          name={"personId"}
          style={{
            textAlign: "left",
            width: "100%",
            marginBottom: "10px",
          }}
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
      </Card>
    </Form>
  );
};

export default EditCarForm;
