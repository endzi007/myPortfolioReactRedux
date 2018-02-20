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
    constructor(){
        super();
        this.state = {
            projects: [],
            tags: [], 
            filterTags: []
        }
    }

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
    componentWillMount(){
        var fetchProjects = this.props.projects;
        var fetchTags = this.getAllTags();
        var filterTagsArr = this.props.filterTags;
        this.setState({projects: fetchProjects, tags: fetchTags, filterTags: filterTagsArr});
    }
    render(){
        var projectsToRender = this.state.projects.map((project, i)=>{
            return <Project key={"project"+i} title={project.title} url={project.picture}  />
        })

        return(
            <Row>
                <Col id="projectsSection" xs={12}>
                    <h1>MY PORTFOLIO</h1>
                    <ProjectSectionTags filterProjects={this.props.filterProjects} tags = {this.state.tags} />
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