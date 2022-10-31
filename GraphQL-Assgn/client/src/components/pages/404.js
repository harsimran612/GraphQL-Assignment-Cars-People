import { Alert } from "antd";

const Error404 = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "9999",
      padding: "100px",
    }}
  >
    <Alert
      message="Error 404"
      description="Page not found"
      type="error"
      showIcon
    />
  </div>
);

export default Error404;
