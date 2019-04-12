import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../../../components/Company/Suppliers/Layout/layout";
import Main from './SuppliersSearch/SuppliersSearch'

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

class Suppliers extends Component {
  render() {
    
    return (
      <Wrapper>
        <Layout main={<Main />}/>
      </Wrapper>
    );
  }
}

export default Suppliers;
