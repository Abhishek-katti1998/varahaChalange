import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Date", "Survey"],
  ["23 May", 1000],
  ["24 May", 1170],
  ["25 May", 660],
  ["26 May", 1030],
  ["27 May", 1030],
  ["28 May", 1030],
];

export const options = {
  chart: {
    title: "Survey Done per Day",
   
  },
};

const BarChart=()=> {
    return (
    <Chart
      chartType="Bar"
      width="500px"
      height="400px"
      data={data}
    options={options}
    style={{backgroundColor:"black"}}
    />
    )
}
export default BarChart;