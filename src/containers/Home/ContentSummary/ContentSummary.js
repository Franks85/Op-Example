import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import whatOp from "../../../Util/img/what_openappalti.jpg";
import CountBox from "../../../components/Home/ContentSummary/countBox";

const WhatImgBox = styled.div`
  background: url('${props => props.bgUrl}') no-repeat left/contain;
  height: 18rem;
  margin-top: 1rem;
`;

const SummaryBox = styled.div`
  height: 18rem;
`;

class ContentSummary extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="6">
            <WhatImgBox bgUrl={whatOp} />
          </Col>
          <Col lg="6">
            <SummaryBox>
              <Row style={{ height: "30%" }} className="align-items-center">
                <Col xs="6" md="5">
                  <CountBox link count="7.943" name="Companies" right />
                </Col>
                <Col xs="6" md="5" className="mx-auto">
                  <CountBox link count="13.929" name="Contracts" right />
                </Col>
              </Row>
              <Row
                style={{ height: "70%" }}
                className="text-center justify-content-center "
              >
                <Col lg="3" xs="4">
                  <Row
                    style={{ height: "50%" }}
                    className="align-items-center justify-content-center"
                  >
                    <CountBox
                      text
                      count="443K €"
                      name="Awarded"
                      noBorder
                      vertical
                    />
                  </Row>

                  <Row
                    style={{ height: "50%" }}
                    className="align-items-center justify-content-center"
                  >
                    <CountBox
                      text
                      count="31.9K €"
                      name="Average"
                      noBorder
                      vertical
                    />
                  </Row>
                </Col>
                <Col xs="3" className="align-self-center">
                  <h4 className="text-dark">Amounts</h4>
                </Col>
                <Col lg="3" xs="4">
                  <Row
                    style={{ height: "50%" }}
                    className="align-items-center justify-content-center"
                  >
                    <CountBox
                      text
                      count="238K €"
                      name="Payed"
                      noBorder
                      vertical
                    />
                  </Row>

                  <Row
                    style={{ height: "50%" }}
                    className="align-items-center justify-content-center"
                  >
                    <CountBox
                      text
                      count="17.1K €"
                      name="Average"
                      noBorder
                      vertical
                    />
                  </Row>
                </Col>
              </Row>
            </SummaryBox>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContentSummary;
