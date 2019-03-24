import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Layout from "../../../components/Home/Layout/mainLayout";
import {
  contractsAmountTable,
  waitingStartTable,
  notCompletedTable
} from "../../../components/Home/Contracts/tables";
import { statusChart } from "../../../components/Home/Contracts/charts";

const Section = styled.div`
  padding-top: 3rem;
`;

class ContractsSection extends Component {
  render() {
    return (
      <Fragment>
        <Section className="text-center">
          <h3>Contracts</h3>
        </Section>
        <Layout
          title="Richest"
          bg="#fff"
          contentLeft={contractsAmountTable}
          tableOnly
          buttonHref="/"
          buttonText="See all"
        />
        <Layout
          title="Waiting to start"
          bg="#f8f8f8"
          contentLeft={waitingStartTable}
          contentRight={statusChart}
          chart
          buttonHref="/"
          buttonText="See all"
        />
        <Layout
          title="Not Completed"
          bg="#fff"
          contentLeft={notCompletedTable}
          tableOnly
          buttonHref="/"
          buttonText="See all"
        />
      </Fragment>
    );
  }
}

export default ContractsSection;
