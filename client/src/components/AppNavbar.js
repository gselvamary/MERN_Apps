import React, { Component } from 'react';

import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

} from 'reactstrap';
import { Container } from 'reactstrap';
class AppNavbar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" className="mb-5" expand="sm">
          <Container>
            <NavbarBrand href="/" className="text-white"> My Page</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="text-white" to="/EditUser" >Profile</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

      </div>
    );
  }
}

export default AppNavbar;