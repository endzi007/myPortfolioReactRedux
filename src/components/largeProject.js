import React, { Component } from 'react';
import { Match } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";

const LargeProject = ({ match, projects })=>{
    
    //not correct navigation
    //var project = projects[match.params.projectId];

    return (
    <div className="largeProject"> 
        <div className="LPHeader">{project.title}</div>
        <div className="LPContent">
            <div className="LPMain"></div>
            <div className="LPLink">
                <Button bsClass="btn-success btn-block"> Go to original project </Button>
            </div>
        </div>
    </div>)
}

function mapStateToProps(store){
    return {
        projects: store.projects
    }
}
export default connect (mapStateToProps)(LargeProject); 
