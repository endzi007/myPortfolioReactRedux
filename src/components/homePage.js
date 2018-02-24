import React, { Component } from "react";
import { Grid, Row, Col, Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

class HomePage extends Component {
    render(){
        return(
         <div id="page">
            <Header />
            {this.props.children}
            <Footer />
          </div>
        );
    }
}

export default HomePage;


