import React, { Component } from 'react';
import { Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class HomeText extends Component{
    render(){
        return(
            <div id="headerText" className="col-xs 12">
                <Jumbotron>
                    <h3>Hi there! My name is Enis Jasarovic and I am web developer from Montenegro. I am interested for working with JavaScript - React - jQuery - Node</h3>
                    <Link to="/contact" className="btn btn-default">Contact</Link>
                </Jumbotron>
            </div>
        );
    }
}
