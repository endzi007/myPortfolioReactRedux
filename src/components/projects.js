import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import Project from './project/project';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/projectActions';
import ProjectSectionTags from './projectSectionTags';
import FlipMove from 'react-flip-move';
import fetch from "isomorphic-fetch";

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
    componentDidMount(){
        fetch("http://localhost/portfolioBackend/wp-json/wp/v2/project").then((response)=>{
            console.log(response.json());
        });
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
    render(){
        var tags = this.getAllTags();
        var projectsToRender = this.props.projects.map((project, i)=>{
            if(this.props.filterTags.length === 0){
                return <Project key={"project"+i} className="projectItem" {...project} />;
            }

            var counter = 0;
            project.tags.map((tag)=>{
                if(this.props.filterTags.indexOf(tag)!==-1){
                    counter++;
                }
            });
            if(counter === this.props.filterTags.length){
                return <Project itemHeight={200} key={"project"+i} {...project} className="projectItem" />
            }
            
        });
        return(
            <Col id="projectsSection"  className={`pageSection ${this.props.className}`} xs={12}>
                <h1>MY PORTFOLIO</h1>
                <ProjectSectionTags filterTags = {this.props.filterTags} filterProjects={this.props.filterProjects} tags = {tags} />
                <div id="selectTags"></div>
                <FlipMove id="projectsSectionContent" duration={500} easing="ease-out">
                    {projectsToRender}
                </FlipMove>
            </Col>
        );
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Projects);