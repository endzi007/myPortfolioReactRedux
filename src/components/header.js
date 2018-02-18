import React, { Component } from "react";
import { Grid, Row, Col, Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


class Header extends Component {
    render(){
        return(
                <Row>
                    <div id="headerSection" className="container">
                    <Col xs={10} xsOffset={1}>
                        <Navbar id="headerNavbar" fixedTop>
                            <Navbar.Header>
                                <Navbar.Brand>
                                <a href="#page">Endzi</a>
                                </Navbar.Brand>
                            <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <NavItem eventKey={1} href="#skillsSection">
                                    Skills
                                    </NavItem>
                                    <NavItem eventKey={2} href="#projectsSection">
                                    Projects
                                    </NavItem>
                                    <NavItem eventKey={2} href="#contactSection">
                                    Contact
                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                            <div id="headerText" className="col-xs 12">
                            <h3>Hi there! My name is Enis Jasarovic and I am web developer from Montenegro. I am interested for working with JavaScript - React - jQuery - Node</h3>
                            <a href="#contactSection" className="btn btn-default">Contact</a>
                            </div>
                    </Col>
                    </div>
                </Row>
        );
    }
}

export default Header;