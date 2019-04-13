import React, { Component, Fragment } from "react";
import SupplierDetail from "../../../../../components/Company/Suppliers/main/supplierDetail/supplierDetail";

class SuppliersList extends Component {
  render() {
    const {data} = this.props;
    const suppliers = data.map(s => (
      <SupplierDetail
        name={s.name}
        nameHref={s.nameHref}
        pIva={s.pIva}
        stazApp={s.stazApp}
        stazAppHref={s.stazAppHref}
        protocol={s.protocol}
        protocolDate={s.protocolDate}
        category={s.category}
        key={s.id}
      />
    ));
    return <Fragment>{suppliers}</Fragment>;
  }
}

export default SuppliersList;
