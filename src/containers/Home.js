import React, { Component, Fragment } from "react";
import styled from "styled-components";
import ContentSummary from "./City/Home/ContentSummary/ContentSummary";
import { Container } from "reactstrap";
import Companies from "./City/Home/Companies/CompaniesSection";
import Contracts from "./City/Home/Contracts/ContractsSection";
import CompanyInfo from "../components/Company/Home/companyInfo";
import Main from '../components/Base/Home/main'

const MainContent = styled.div``;
class Home extends Component {
  render() {
    const { base, city, company } = this.props;
    return (
      <Fragment>
        {base && (
          <MainContent>
            <Main />
          </MainContent>
        )}
        {city && (
          <MainContent>
            <ContentSummary />
            <Container>
              <Companies />
              <Contracts />
            </Container>
          </MainContent>
        )}
        {company && (
          <MainContent>
            <CompanyInfo />
          </MainContent>
        )}
      </Fragment>
    );
  }
}

export default Home;
