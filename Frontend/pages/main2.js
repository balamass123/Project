import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  
  Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }

  NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        
        <Navbar color="danger" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Button color="rgb(255, 0, 0)">
                <NavLink href="http://localhost:3000/bloodrequest">Blood Request</NavLink></Button>

              </NavItem>
              <NavItem>
              <Button color="rgb(255, 0, 0)">
                <NavLink href="http:">View Request</NavLink></Button>

              </NavItem>
              <NavItem>
              <Button  color="">
                <NavLink href="http://localhost:3000/donorregister">Donor Register</NavLink></Button>
              </NavItem>
              <NavItem>
              <Button color="">
                <NavLink href="http://localhost:3000/searchblood">Search</NavLink></Button>
              </NavItem>
              <NavItem>
              <Button color="rgb(255, 0, 0)">
                <NavLink href="http:">Log out</NavLink></Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}