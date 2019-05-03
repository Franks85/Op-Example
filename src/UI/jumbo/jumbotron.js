import React from "react";

const jumbo = props => {
  const { title, subTitle, text, bHref, bText } = props;
  return (
    <div className="jumbotron mt-5">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{subTitle}</p>
      <hr className="my-4" />
      <p>{text}</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href={bHref} role="button">
          {bText}
        </a>
      </p>
    </div>
  );
};

export default jumbo;
