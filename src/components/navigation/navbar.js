import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import {
  cityNavLinkLeft,
  cityNavLinkRight,
  companyNavLinkLeft,
  companyNavLinkRight
} from "./navLinkConfig";

import "./navbar.css";

export default class Navigation extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const cityNavLeft = cityNavLinkLeft.map(i => {
      return (
        <NavItem key={i.title}>
          <NavLink href={i.href}>{i.title}</NavLink>
        </NavItem>
      );
    });
    const cityNavRight = cityNavLinkRight.map(i => {
      return (
        <NavItem className="nav-link-right" key={i.title}>
          <NavLink href={i.href}>{i.title}</NavLink>
        </NavItem>
      );
    });
    const companyNavLeft = companyNavLinkLeft.map(i => {
      return (
        <NavItem key={i.title}>
          <NavLink href={i.href}>{i.title}</NavLink>
        </NavItem>
      );
    });
    const companyNavRight = companyNavLinkRight.map(i => {
      return (
        <NavItem className="nav-link-right" key={i.title}>
          <NavLink href={i.href}>{i.title}</NavLink>
        </NavItem>
      );
    });
    const { city, company, rightLink } = this.props;
    return (
      <div style={{ marginTop: ".7rem" }}>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              {city && cityNavLeft}
              {company && companyNavLeft}
            </Nav>
          </Collapse>
          {rightLink && city
            ? cityNavRight
            : rightLink && company
            ? companyNavRight
            : null}
        </Navbar>
      </div>
    );
  }
}
