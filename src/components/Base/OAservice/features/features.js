import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import SectionHeader from "../Layout/sectionHeader";
import { feature1, feature2 } from "./featuresData";

const Wrapper = styled.div``;

const List = styled.ul`
  list-style: none;
`;

const Icon = styled.i`
  path {
    fill: #2dbfbe;
  }
`;

const Text = styled.span`
  margin-left: 0.5rem;
`;

const features = () => {
  const featureFirst = feature1.map(l => (
    <li key={l} className="pt-2">
      <Icon className="fas fa-check" />
      <Text>{l}</Text>
    </li>
  ));
  const featureSecond = feature2.map(l => (
    <li key={l} className="pt-2">
      <Icon className="fas fa-check" />
      <Text>{l}</Text>
    </li>
  ));

  return (
    <Wrapper className="p-3">
      <SectionHeader
        title="Caratteristiche Tecniche"
        subtitle="Scropri tutte le funzionalità"
      />
      <Row className="mt-2">
        <Col lg={6}>
          <List>{featureFirst}</List>
        </Col>
        <Col lg={6}>
          <List>{featureSecond}</List>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default features;
