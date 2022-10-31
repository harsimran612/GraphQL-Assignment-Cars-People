import { CloseOutlined, SaveFilled } from "@ant-design/icons";
import { Button } from "antd";

const EditCardFormCardHeader = ({ title, editOnClick, deleteOnClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          textTransform: "capitalize",
        }}
      >
        Edit Car Details
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Button type="primary" htmlType="submit" title="Save">
          <SaveFilled key="save" />
        </Button>
        <Button type="primary" danger htmlType="reset" title="Cancel">
          <CloseOutlined key="cancel" twoToneColor="red" />
        </Button>
      </div>
    </div>
  );
};

export default EditCardFormCardHeader;
