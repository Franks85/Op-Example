import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";

const Link = styled.a`
  color: #2dbfbe;
  &:hover {
    text-decoration: none;
    color: #c3bb5e;
  }
`;

const Text = styled.p``;

const Icon = styled.span`
  margin: 0 0.5rem;
`;

const footer = () => {
  return (
    <Container fluid className="mt-5 pb-3 pt-3 bg-light">
      <small>
        <Row className="text-center">
          <Col>
            <Link href="http://www.informaetica.it" target="_blank">
              Informaetica
            </Link>
          </Col>
          <Col>
            <Text>
              <Icon>
                <i className="far fa-hand-point-left" />
              </Icon>
              ramo IT Consorzio Solidarietà soc. coop.
            </Text>
          </Col>
          <Col>
            <Text>
              <Icon>
                <i className="fas fa-briefcase" />
              </Icon>
              C.F. e P.IVA: 01370630426
            </Text>
          </Col>
          <Col>
            <Text>
              <Icon>
                <i className="fas fa-phone" />
              </Icon>
              071/793.82.39
            </Text>
          </Col>
          <Col>
            <Text>
              <Icon>
                <i className="fas fa-print" />
              </Icon>
              071/793.82.43
            </Text>
          </Col>
          <Col>
            <Link href="mailto:info@openappalti.it">
              <Icon>
                <i className="fas fa-envelope" />
              </Icon>
              info@openappalti.it
            </Link>
          </Col>
          <Col>
            <Link href="mailto:info@openappalti.it">
              <Icon>
                <i className="fas fa-eye" />
              </Icon>
              Privacy
            </Link>
          </Col>
        </Row>
      </small>
    </Container>
  );
};

export default footer;
