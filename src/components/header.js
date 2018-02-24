import React, { Component } from "react";
import { Grid, Row, Col, Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
        <Navbar id="headerNavbar" fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                <Link to="/"> Endzi </Link>
                </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem>
                    <Link to="Skills">Skills</Link>
                    </NavItem>
                    <NavItem>
                    <Link to="Projects">Projects</Link>
                    </NavItem>
                    <NavItem>
                    <Link to="Contact">Contact</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Header;