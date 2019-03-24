import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import './table.css'

const table = props => {
  const { data, columns } = props;
  return (
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns}
      striped
      bootstrap4
    />
  );
};

export default table;
