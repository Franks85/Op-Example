import React from "react";
import { Row, Col, Container } from "reactstrap";
import styled from 'styled-components'

const Main = styled.div`
  min-height: 10rem;
  h5 {
      letter-spacing: .15rem;
  }
`;

const Aside = styled.div`
  min-height: 10rem;
`;

const layout = props => {
  const {main, aside} = props;
  return (
    <Container fluid>
      <Row>
        <Col lg={9}>
          <Main>
          <h5 className='text-secondary'><span>Fornitori trovati:</span> 1436</h5>
            {main}
          </Main>
        </Col>
        <Col lg={3}>
          <Aside>
            {aside}
          </Aside>
        </Col>
      </Row>
    </Container>
  );
};

export default layout;
