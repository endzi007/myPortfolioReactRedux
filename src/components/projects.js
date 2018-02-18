import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import Project from './project';
import { connect } from 'react-redux';

const mapStateToProps = (store) =>{
    console.log(store, "store");
    return{
        projects: store.projects
    }
}

class Projects extends Component {
    render(){
        var arrayToRender = this.props.projects.map((project)=>{
            return <Project title={project.title} url={project.picture}/>
        })
        return(
            <Row>
                <Col id="projectsSection" xs={12}>
                    <h1>MY PORTFOLIO</h1>
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