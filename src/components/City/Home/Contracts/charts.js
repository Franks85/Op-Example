import React from "react";
import { Cell } from "recharts";
import PieChart from "../../../../UI/charts/pieChart";
import { statusPie } from "./data";

const COLORS = [
  "#2dbfbe",
  "#0088FE",  
  "#fad548",
];

export const statusChart = (
  <PieChart data={statusPie} pieDataKey="value" outerRadius={150}>
    {statusPie.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
    ))}
  </PieChart>
);
