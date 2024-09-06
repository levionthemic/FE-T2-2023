import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

function StepLine() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/basic-line")
      .then(res => res.json())
      .then(data => {
        setDataChart(data);
      })
  }, []);

  const config = {
    data: dataChart,
    xField: "date",
    yField: "quantity",
    // autoFit: false,
    // width: 400,
    // height: 200
    // shape: "smooth",
    // point: true,
    slider: {
      x: {
        start: 0,
        end: 1
      }
    },
    stepType: "hv",
    point: true
  }

  return (
    <>
      <h2>Ví dụ Step Line</h2>
      <Line {...config}/>
    </>
  )
}

export default StepLine;