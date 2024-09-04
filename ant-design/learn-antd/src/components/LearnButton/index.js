import { Button } from "antd";
import { useState } from "react";
import { ArrowsAltOutlined } from "@ant-design/icons";

function LearnButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      const result = {
        code: 200,
        data: [],
      };
      if (result && result.code === 200) {
        setLoading(false);
      }
    }, 3000);
  };
  return (
    <>
      <Button
        type="dashed"
        loading={loading}
        onClick={handleClick}
        danger={loading}
      >
        Nội dung
      </Button>
      <Button icon={<ArrowsAltOutlined spin />}>Button</Button>{" "}
    </>
  );
}

export default LearnButton;
