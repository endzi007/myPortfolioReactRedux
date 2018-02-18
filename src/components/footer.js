import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render(){
        return(
        <Row className="row">
            <Col id="footerSection" className="col-xs-12 text-center">
            <p> <span></span>Made by Enis<span></span></p>
            </Col>
        </Row>
        );
    }
}

export default Footer;