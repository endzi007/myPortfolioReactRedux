import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Grid, Row, Col, Nav, Navbar, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/projectActions'

class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    handleClick(e){
        var link = e.target.attributes.link.value;
        this.props.pageTransition(true)
        this.context.router.history.push(link);
    }
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
                    <li><Link to="/Skills">Skills</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);