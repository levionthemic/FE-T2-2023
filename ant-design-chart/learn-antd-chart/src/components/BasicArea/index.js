import { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";

function BasicArea() {
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
    smooth: true,
    point: true,
    slider: {
      start: 0,
      end: 1
    }
  }

  return (
    <>
      <h2>Ví dụ Basic Area</h2>
      <Area {...config}/>
    </>
  )
}

export default BasicArea;