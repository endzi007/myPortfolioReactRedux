import React, { Component } from 'react';
import { Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

export default class HomeText extends Component{
    render(){
        return(
            <div id="headerText" className="pageSection col-xs 12">
                <Jumbotron>
                    <Typist avgTypingDelay={40} cursor={{show: false, blink: false, element: "/", hideWhenDone: true, hideWhenDoneDelay: 1000}}>
                        <h3>Hi there! My name is Enis Jasarovic and I am front-end web developer. Technologies I'm working with  PHP-C++
                            <Typist.Backspace count={7} delay={150} />
                            <span>JavaScript - React - jQuery - Node</span>
                        </h3>
                        <h4> I'm passionate about programming. You can check some of my current projects in the projects section.</h4>
                        <h4> I'm married and father of two kids. Currently I'm living in Montenegro. </h4>

                    </Typist>
                    <Link to="/contact" className="btn btn-default">Contact</Link>
                </Jumbotron>
            </div>
        );
    }
}
