import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const HoverProject = ({
    opacity,
    tags, 
    title,
    id,
    url
}) => {
    console.log(url);
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
            <div className="btn btn-success btn-block"><Link to={`/projects/${id}`}>View project</Link></div>
        </div>
    );
}
class Project extends Component {
    constructor(){
        super();
        this.state = {
            opacity: 0
        }
    }
    render(){
        return(
            <div className={this.props.className} 
                onMouseOver={(e)=>{
                    this.setState({opacity: 1});
                }}
                onMouseLeave={()=>{
                    this.setState({
                        opacity: 0
                    });
                }}
            >
                <HoverProject opacity={this.state.opacity}
                tags={this.props.tags} 
                title={this.props.title}
                id={this.props.id}
                url={this.props.url}
                />
                <img src={this.props.picture} />
            </div>
        );
    }
}


export default Project;