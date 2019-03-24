import React from "react";
import { Cell } from "recharts";
import BarChart from "../../../UI/charts/barChart";
import PieChart from "../../../UI/charts/pieChart";
import { contractsWin, amount } from "./data";

const COLORS = [
  "#dd7766",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8"
];

export const awardedChart = (
  <BarChart
    width={360}
    height={360}
    data={contractsWin}
    xAxis="name"
    barDataKey="contracts"
    barColor="#3366cc"
  />
);

export const amountChart = (
  <PieChart data={amount} pieDataKey="value" outerRadius={150}>
    {amount.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
    ))}
  </PieChart>
);
