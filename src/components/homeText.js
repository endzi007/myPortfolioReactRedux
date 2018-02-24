import React, { Component } from 'react';
import { Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

export default class HomeText extends Component{
    render(){
        return(
            <div id="headerText" className="col-xs 12">
                <Jumbotron>
                    <Typist avgTypingDelay={40} cursor={{show: false, blink: false, element: "/", hideWhenDone: true, hideWhenDoneDelay: 1000}}>
                        <h3>Hi there! My name is Enis Jasarovic and I am web developer from Montenegro. I am interested for working with PHP-C++
                            <Typist.Backspace count={7} delay={200} />
                            <span>JavaScript - React - jQuery - Node</span>
                        </h3>
                    </Typist>
                    <Link to="/contact" className="btn btn-default">Contact</Link>
                </Jumbotron>
            </div>
        );
    }
}
