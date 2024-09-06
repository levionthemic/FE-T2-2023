import { useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";

function PieChart() {
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
    angleField: "value",
    colorField: "type",
  };

  return (
    <>
      <h2>Ví dụ Pie Chart</h2>
      <Pie {...config} />
    </>
  );
}

export default PieChart;
