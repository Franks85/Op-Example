import React from "react";
import { Cell } from "recharts";
import BarChart from "../../../../UI/charts/barChart";
import PieChart from "../../../../UI/charts/pieChart";
import { contractsWin, amountPie } from "./data";

const COLORS = [
  "#dd7766",
  "#0088FE",
  "#2dbfbe",
  "#fad548",
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
    barColor="#2dbfbe"
  />
);

export const amountChart = (
  <PieChart data={amountPie} pieDataKey="value" outerRadius={150}>
    {amountPie.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
    ))}
  </PieChart>
);
