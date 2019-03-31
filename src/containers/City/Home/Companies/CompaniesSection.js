import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Layout from "../../../../components/City/Home/Layout/mainLayout";
import {
  awardedChart,
  amountChart
} from "../../../../components/City/Home/Companies/charts";
import {
  awardedTable,
  amountTable,
  successRateTable
} from "../../../../components/City/Home/Companies/tables";

const Section = styled.div`
  padding-top: 2rem;
`;

class CompaniesSection extends Component {
  render() {
    return (
      <Fragment>
        <Section className="text-center">
          <h3>Companies</h3>
        </Section>
        <Layout
          title="Winning More Contracts"
          bg="#f8f8f8"
          contentLeft={awardedTable}
          contentRight={awardedChart}
          chart
          buttonHref="/"
          buttonText="Show all"
        />
        <Layout
          title="Winning More Money"
          bg="#fff"
          contentLeft={amountChart}
          contentRight={amountTable}
          chart
          buttonHref="/"
          buttonText="See all"
        />
        <Layout
          title="Highest Winning Ratio"
          bg="#f8f8f8"
          contentLeft={successRateTable}
          tableOnly
          buttonHref="/"
          buttonText="See all"
        />
      </Fragment>
    );
  }
}

export default CompaniesSection;
