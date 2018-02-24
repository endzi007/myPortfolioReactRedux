import React, { Component } from "react";
import { Row, Col, Button } from 'react-bootstrap';

class ProjectSectionTags extends Component {
    render(){
        var tags = this.props.tags.map((tag, i)=>{
            if(this.props.filterTags.indexOf(tag)!==-1){
                return <Button className="active" onClick={()=>{this.props.filterProjects(tag)}} key={tag+"_"+i}>{tag}</Button>
            }
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