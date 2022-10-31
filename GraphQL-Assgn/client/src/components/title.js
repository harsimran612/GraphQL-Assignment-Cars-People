import { Typography } from "antd";

const { Title: AntDesignTitle } = Typography;

const Title = ({ text, level = 1 }) => {
  return (
    <AntDesignTitle level={level} style={style.title}>
      {text}
    </AntDesignTitle>
  );
};

export default Title;

const style = {
  title: {
    textAlign: "center",
    margin: "20px 0",
  },
};
