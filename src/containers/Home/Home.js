import React, { Component } from "react";
import styled from "styled-components";
import ContentSummary from "./ContentSummary/ContentSummary";
import { Container } from "reactstrap";
import Companies from "./Companies/CompaniesSection";
import Contracts from "./Contracts/ContractsSection";

const Wrapper = styled.div``;
class Home extends Component {
  render() {
    return (
      <Wrapper>
        <ContentSummary />
        <Container>
          <Companies />
          <Contracts />
        </Container>
      </Wrapper>
    );
  }
}

export default Home;
