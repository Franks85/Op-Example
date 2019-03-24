import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

const Link = styled.a`
    letter-spacing: .1rem;
    padding: 1rem .5rem;
`;

const linkButton = props => {
    const {text, href} = props;
  return (
    <Row>
      <Col className="text-center pt-3">
        <Link className="btn btn-info" href={href} role="button">
          {text}
        </Link>
      </Col>
    </Row>
  );
};

export default linkButton;
