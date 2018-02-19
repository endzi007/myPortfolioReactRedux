import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import Project from './project';
import { connect } from 'react-redux';
import ProjectSectionTags from './projectSectionTags';

const mapStateToProps = (store) =>{
    console.log(store, "store");
    return{
        projects: store.projects
    }
}

class Projects extends Component {
    render(){
        var tags = [];
        var arrayToRender = this.props.projects.map((project)=>{
            project.tags.forEach(element => {
                if(tags.indexOf(element) === -1){
                    tags.push(element);
                }
            });
            return <Project title={project.title} url={project.picture}/>
        })
        return(
            <Row>
                <Col id="projectsSection" xs={12}>
                    <h1>MY PORTFOLIO</h1>
                    <ProjectSectionTags tags = {tags}/>
                    <div id="selectTags"></div>
                    <div id="projectsSectionContent">
                    {arrayToRender}
                    </div>
                </Col>
            </Row>
        );
    }
}



export default connect(mapStateToProps)(Projects);