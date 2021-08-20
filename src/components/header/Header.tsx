import { right } from '@popperjs/core';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';import './header.css';

const NavigationBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div >
      <Navbar light expand="md" >
        <NavbarBrand href="/">Terminal</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={{justifyContent:"end"}}>
          <Nav className="mr-auto" navbar>
            {/* <NavItem >
              <NavLink href="/">Components</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="https://github.com/saivk7" target="_blank" >Projects</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://linkedin.com/in/saikadiyala" target="_blank">
                  LinkedIn
                </DropdownItem>
                <DropdownItem href="https://github.com/saivk7/portfolio-website" target="_blank">
                   Github
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/">
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default NavigationBar;