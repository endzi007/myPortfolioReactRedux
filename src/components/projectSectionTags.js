import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';

class ProjectSectionTags extends Component {
    render(){
        var tags = this.props.tags.map((tag)=>{
            return <Button>{tag}</Button>
        });
        return(
            <Col xs={12}>
                {tags}
            </Col>
        );
    }
}


export default ProjectSectionTags;