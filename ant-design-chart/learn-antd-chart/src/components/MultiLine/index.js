import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

function MultiLine() {
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
    // autoFit: false,
    // width: 400,
    // height: 200
    // shape: "smooth",
    // point: true,
    colorField: "category",
    // legend: { size: false },
    sizeField: "value",
    // shapeField: 'trail',
    slider: {
      start: 0,
      end: 1,
    },
  };

  return (
    <>
      <h2>Ví dụ Multi Line</h2>
      <Line {...config} />
    </>
  );
}

export default MultiLine;
