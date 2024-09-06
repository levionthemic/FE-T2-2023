import { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";

function BasicLine() {
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
    smooth: true,
    point: true,
    slider: {
      start: 0,
      end: 1
    }
  }

  return (
    <>
      <h2>Ví dụ Basic Line</h2>
      <Line {...config}/>
    </>
  )
}

export default BasicLine;