import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';

class ProjectSectionTags extends Component {
    render(){
        var tags = this.props.tags.map((tag, i)=>{
            return <Button onClick={()=>{this.props.filterProjects(tag)}} key={tag+"_"+i}>{tag}</Button>
        });
        return(
            <Col xs={12}>
                {tags}
            </Col>
        );
    }
}


export default ProjectSectionTags;