import { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";

function StackArea() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/multi-line")
      .then((res) => res.json())
      .then((data) => {
        setDataChart(data);
      });
  }, []);

  const config = {
    data: dataChart,
    xField: "year",
    yField: "value",

    seriesField: "category",
    slider: {
      start: 0,
      end: 1,
    },
  };

  return (
    <>
      <h2>Ví dụ Stack Area</h2>
      <Area {...config} />
    </>
  );
}

export default StackArea;
