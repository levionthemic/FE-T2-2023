import { useEffect, useState } from "react";
import { Rose } from "@ant-design/plots";

function BasicRose() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/pie-chart")
      .then((res) => res.json())
      .then((data) => {
        setDataChart(data);
      });
  }, []);

  const config = {
    data: dataChart,
    xField: "type",
    yField: "value",
    seriesField: "type"
  };

  return (
    <>
      <h2>Ví dụ Basic Rose</h2>
      <Rose {...config} />
    </>
  );
}

export default BasicRose;
