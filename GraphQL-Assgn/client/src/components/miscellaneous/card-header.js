import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button } from "antd";

const CardHeader = ({ title, editOnClick, deleteOnClick }) => {
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
        {title}
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Button type="default" onClick={editOnClick}>
          <EditTwoTone key="edit" />
        </Button>
        <Button type="default" onClick={deleteOnClick}>
          <DeleteTwoTone key="delete" twoToneColor="red" />
        </Button>
      </div>
    </div>
  );
};

export default CardHeader;
