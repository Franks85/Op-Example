import React from "react";
import Table from "../../../UI/table/table";
import { contractsWin, contractsColumns, amount, amountColumns, successRate, successRateColumns } from "./data";

export const awardedTable = (
  <Table data={contractsWin} columns={contractsColumns} />
);

export const amountTable = (
  <Table data={amount} columns={amountColumns} />
);

export const successRateTable = (
  <Table data={successRate} columns={successRateColumns} />
);