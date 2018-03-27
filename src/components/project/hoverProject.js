import React from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';

const HoverProject = ({
    opacity,
    tags,
    title,
    id,
    url,
    toggleModalShow
}) => {
    var tagsLi = _.map(tags, (tag, i)=>{
        return <li key={`${tag}_${i}`}>{tag}</li>
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

HoverProject.PropTypes = {
    opacity:PropTypes.string.isRequired,
    tags:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    toggleModalShow:PropTypes.string.isRequired
}


export default HoverProject;