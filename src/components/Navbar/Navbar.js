import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, NavItem } from 'react-bootstrap';
import { history } from '../../store';

const Navbar = () => (
  <BSNavbar inverse collapseOnSelect>
    <BSNavbar.Header>
      <BSNavbar.Brand>
        <Link to="/">TRAVELS</Link>
      </BSNavbar.Brand>
      <BSNavbar.Toggle />
    </BSNavbar.Header>
    <BSNavbar.Collapse>
      <Nav pullRight>
        <NavItem onClick={() => history.push('/')} eventKey={1}>
          List
        </NavItem>
        <NavItem onClick={() => history.push('/travel')} eventKey={2}>
          Travel
        </NavItem>
      </Nav>
    </BSNavbar.Collapse>
  </BSNavbar>
);

export default Navbar;
