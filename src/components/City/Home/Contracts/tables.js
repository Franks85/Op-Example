import React from "react";
import Table from "../../../../UI/table/table";
import { richest, richestColumns, waitingStart, waitingStartColumns,
notCompleted, notCompletedColumns } from "./data";

export const contractsAmountTable = (
  <Table data={richest} columns={richestColumns} />
);

export const waitingStartTable = (
  <Table data={waitingStart} columns={waitingStartColumns} />
);

export const notCompletedTable = (
  <Table data={notCompleted} columns={notCompletedColumns} />
);


