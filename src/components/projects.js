import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import Project from './project';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/projectActions';
import ProjectSectionTags from './projectSectionTags';

const mapStateToProps = (store) =>{
    return{
        projects: store.projects,
        filterTags: store.filterTags
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actions, dispatch)
}

class Projects extends Component {
    getAllTags(){
        var tags = []; 
        this.props.projects.map((project)=>{
            project.tags.map((tag)=>{
                if(tags.indexOf(tag)===-1){
                    tags.push(tag);
                }
            });
        });
        return tags;
    }
    render(){
        console.log(this.props);
        var tags = this.getAllTags();
        var projectsToRender = this.props.projects.map((project, i)=>{
            if(this.props.filterTags.length === 0){
                return <Project key={"project"+i} title={project.title} url={project.picture}  />;
            }

            var counter = 0;
            project.tags.map((tag)=>{
                if(this.props.filterTags.indexOf(tag)!==-1){
                    counter++;
                }
            });
            if(counter === this.props.filterTags.length){
                return <Project key={"project"+i} title={project.title} url={project.picture}  />
            }
            
        });
        return(
            <Row>
                <Col id="projectsSection" xs={12}>
                    <h1>MY PORTFOLIO</h1>
                    <ProjectSectionTags filterProjects={this.props.filterProjects} tags = {tags} />
                    <div id="selectTags"></div>
                    <div id="projectsSectionContent">
                    {projectsToRender}
                    </div>
                </Col>
            </Row>
        );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Projects);