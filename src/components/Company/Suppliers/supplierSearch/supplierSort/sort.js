import React from "react";
import styled from "styled-components";
import { labels } from "./sortLabels";

const SortBox = styled.div`
`;
const Label = styled.span`
  margin-left: .5rem;
`;

const dropDown = props => {
  const { orderBy, order, doOrderBy, doOrder } = props;
  const checked = <Label><i className="fas fa-check"></i></Label>
  const output = labels.map(item => {
    return (
      <li key={item[0]}>
        <a
          href="/suppliers/"
          className="dropdown-item"
          onClick={doOrderBy}
          data-value={item[0]}
        >
          {item[1]} {orderBy === item[0] ? checked : null}
        </a>
      </li>
    );
  });

  return (
    <SortBox>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Ordina per
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {output}
          <div className="dropdown-divider" />
          <a
            href="/suppliers/"
            className="dropdown-item"
            onClick={doOrder}
            data-value="asc"
          >
            ascending {order === "asc" ? checked : null}
          </a>
          <a
            href="/suppliers/"
            className="dropdown-item"
            onClick={doOrder}
            data-value="desc"
          >
            descending {order === "desc" ? checked : null}
          </a>
        </div>
      </div>
    </SortBox>
  );
};

export default dropDown;
