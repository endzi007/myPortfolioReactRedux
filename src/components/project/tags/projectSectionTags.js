import React, { Component } from "react";
import { Col, Button, Row } from 'react-bootstrap';
import { style } from 'typestyle';

var tagStyle = style({
    padding: "5px 13px",
    color: "black",
    textTransform: "uppercase",
    marginLeft: "5px",
    userSelect: "none",
    $nest: {
        "&:hover": {
            cursor: "pointer",
            textDecoration: "none",
        },
        "&:focus":{
            textDecoration: "none",
            color: "black"
        }
    }
});

var activeTag = style({
    backgroundColor: "gray",
    fontWeight: "bold",
    borderRadius: "5px",
    color: "white",
    $nest: {
        "&:focus":{
            textDecoration: "none",
            color: "white"
        }
    }

});
class ProjectSectionTags extends Component {
    render(){
        var tags = this.props.tags.map((tag, i)=>{
            if(this.props.filterTags.indexOf(tag)!==-1){
                return <div className={`${activeTag} ${tagStyle}`} onClick={()=>{this.props.filterProjects(tag)}} key={tag+"_"+i}>{tag}</div>
            }
            return <div className={tagStyle} onClick={()=>{this.props.filterProjects(tag)}} key={tag+"_"+i}>{tag}</div>
        });
        return(
            <div style={{padding: "12px", display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap"}}>
                {tags}
            </div>
        );
    }
}


export default ProjectSectionTags;