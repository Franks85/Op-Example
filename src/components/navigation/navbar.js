import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { navLinkLeft, navLinkRight } from "./navLinkConfig";

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
    const navLeft = navLinkLeft.map(i => {
      return (
        <NavItem key={i.title}>
          <NavLink href={i.href}>{i.title}</NavLink>
        </NavItem>
      );
    });
    const navRight = navLinkRight.map(i => {
      return (
        <NavItem className="nav-link-right" key={i.title}>
          <NavLink href="/login">Area S.A.</NavLink>
        </NavItem>
      );
    });
    const { rightLink } = this.props;
    return (
      <div style={{ marginTop: ".7rem" }}>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>{navLeft}</Nav>
          </Collapse>
          {rightLink && navRight}
        </Navbar>
      </div>
    );
  }
}
