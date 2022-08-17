import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
// import CartSummay from '../cart/CartSummay';

export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="ligth" light expand="md">
          <NavbarBrand href="/">React e-commerce project</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Erendevv">
                  GitHub
                </NavLink>
              </NavItem>
              {/* <CartSummay /> */}
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
