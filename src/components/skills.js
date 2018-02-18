import React, { Component } from "react";
import { Row, Col, Media} from 'react-bootstrap';
class Skills extends Component {
    render(){
        return(
        <Row>
            <Col xs={12} id="skillsSection">
              <Col xs={8} xsOffset={2} className="text-center paddingDiv">
                <h2 className="paddingDiv">MY SKILLS</h2>
                <p className="paddingDiv">I'm excited to learn web development  in the first place JavaScript on front and backend. Also I'm gonna learn React, Express and Mongo because my goal is to be full stack Web Develper. </p>
              </Col>
              <Col xs={12} className="center paddingDiv">
                <Col xs={4}>
                  <img src="https://res.cloudinary.com/endzi007/image/upload/v1482348352/html5_gkdhfo.png" alt="HTML and Css level " />
                </Col>
                <Col xs={4}>
                  <img src="https://res.cloudinary.com/endzi007/image/upload/v1482348352/JavaScript_ueumvz.png" alt="JavaScript Level" />
                </Col>
                <Col xs={4}>
                  <img src="https://res.cloudinary.com/endzi007/image/upload/v1482348354/jQuery_neq6ca.png" alt="jQuery level" />
                </Col>
              </Col>
            </Col>
        </Row>
        );
    }
}

export default Skills;