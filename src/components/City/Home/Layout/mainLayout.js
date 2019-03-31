import React, { Fragment } from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { media } from "../../../../Util/StyledComponent/mediaQueryHelper";
import LinkButton from "../../../../UI/button/linkButton";

const Wrapper = styled.div`
  background-color: ${props => props.bg};
  padding: 2rem;
  ${media.lessThan("phone")`
      padding: .5rem;
    `};
`;

const Title = styled.div`
  padding: 1rem 0;
  h5 {
    font-style: italic;
  }
`;

const companiesLayout = props => {
  const {
    title,
    bg,
    contentLeft,
    contentRight,
    chart,
    tableOnly,
    buttonHref,
    buttonText
  } = props;
  const buttonLink = <LinkButton href={buttonHref} text={buttonText} />;
  return (
    <Wrapper bg={bg}>
      <Title className="text-center text-secondary">
        <h5>{title}</h5>
      </Title>
      {chart && (
        <Fragment>
          <Row style={{ overflow: "hidden" }}>
            <Col lg="6">{contentLeft}</Col>
            <Col lg="6">{contentRight}</Col>
          </Row>
          {buttonLink}
        </Fragment>
      )}
      {tableOnly && (
        <Fragment>
          <Row style={{ overflow: "hidden" }}>
            <Col>{contentLeft}</Col>
          </Row>
          {buttonLink}
        </Fragment>
      )}
    </Wrapper>
  );
};

export default companiesLayout;
