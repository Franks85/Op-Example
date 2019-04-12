import React, { Fragment } from "react";

const checkboxes = props => {
  const { data } = props;
  const ceckList = data.map(c => (
    <div className="form-check form-check-inline" key={c.id}>
      <input
        className="form-check-input"
        type="checkbox"
        name="checkForm"
        id={c.id}
        value={c.value}  
      />
      <label className="form-check-label" htmlFor={c.id}>
        {c.label}
      </label>
    </div>
  ));

  return <Fragment>{ceckList}</Fragment>;
};

export default checkboxes;
