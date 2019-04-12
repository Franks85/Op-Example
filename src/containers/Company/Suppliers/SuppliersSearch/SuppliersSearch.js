import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import _ from "lodash";
import SortDropdown from "../../../../components/Company/Suppliers/supplierSearch/supplierSort/sort";
import SuppliersList from "../SuppliersList/SuppliersList";
import { supplier } from "../../../../components/Company/Suppliers/supplierData";
import SupplierFilter from "../../../../components/Company/Suppliers/supplierSearch/supplierFilter/supplierFilter";

class Search extends Component {
  state = {
    data: supplier,
    orderBy: "name",
    order: "asc"
  };

  doOrderBy = e => {
    e.preventDefault();
    const newOrderBy = e.target.getAttribute("data-value");
    this.setState({ orderBy: newOrderBy });
  };

  doOrder = e => {
    e.preventDefault();
    const newOrder = e.target.getAttribute("data-value");
    this.setState({ order: newOrder });
  };

  onFilter = e => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  render() {
    const { orderBy, order } = this.state;
    let sorted = this.state.data;
    sorted = _.orderBy(
      sorted,
      item => {
        return item[orderBy];
      },
      order
    );

    return (
      <Container>
        <Row className='p-3'>
          <Col lg={4} sm={6} className='mt-2'>
            <SupplierFilter submit={this.onFilter} />
          </Col>
          <Col lg={4} sm={6} className='mt-3'>
            <SortDropdown
              doOrderBy={this.doOrderBy}
              doOrder={this.doOrder}
              orderBy={this.state.orderBy}
              order={this.state.order}
            />
          </Col>
        </Row>
        <div>
          <SuppliersList data={sorted} />
        </div>
      </Container>
    );
  }
}

export default Search;
