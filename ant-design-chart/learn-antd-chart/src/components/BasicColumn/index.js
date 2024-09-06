import { useEffect, useState } from "react";
import { Column } from "@ant-design/plots";

function BasicColumn() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/basic-line")
      .then((res) => res.json())
      .then((data) => {
        setDataChart(data);
      });
  }, []);

  const config = {
    data: dataChart,
    xField: "date",
    yField: "quantity",
    slider: {
      start: 0,
      end: 1,
    },
    label: {
      style: {
        fill: "red",
        opacity: 0.6,
        fontSize: 24,
      },
      rotate: "0",
    },
  };

  return (
    <>
      <h2>Ví dụ Basic Column</h2>
      <Column {...config} />
    </>
  );
}

export default BasicColumn;
