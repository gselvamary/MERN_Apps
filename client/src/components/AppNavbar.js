import React, { Component } from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink } from 'reactstrap';
import { Container } from 'reactstrap';
class AppNavbar extends Component {
state = {
isOpen:false
};
toggle=()=>{
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
            <NavLink className="text-white" href="http://tlc.krgi.in">TLC</NavLink>
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