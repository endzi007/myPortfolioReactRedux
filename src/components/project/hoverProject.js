import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const HoverProject = ({
    opacity,
    tags, 
    title,
    id,
    url, 
    toggleModalShow
}) => {
    var tagsLi = _.map(tags, (tag)=>{
        return <li>{tag}</li>
    });
    return(
        <div className="projectHover" style={{
            opacity: opacity
        }}>
            <h3>{title}</h3>
            <ul>
                {tagsLi}
            </ul>
            <div className="btn btn-success btn-block" onClick={toggleModalShow}>View project</div>
        </div>
    );
}


export default HoverProject;