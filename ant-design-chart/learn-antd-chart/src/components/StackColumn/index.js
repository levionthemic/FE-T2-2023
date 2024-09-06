import { useEffect, useState } from "react";
import { Column } from "@ant-design/plots";

function StackColumn() {
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
    connectedArea: true,
    isStack: true,
    slider: {
      start: 0,
      end: 1,
    },
  };

  return (
    <>
      <h2>Ví dụ Stack Column</h2>
      <Column {...config} />
    </>
  );
}

export default StackColumn;
