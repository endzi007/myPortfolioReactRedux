import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';

const HoverProject = ({
    opacity
}) => {
    return(
        <div className="projectHover" style={{
            opacity: opacity
        }}>
            <h3>Project name</h3>
            <ul>
                <li>tagName</li>
                <li>tagName</li>
                <li>tagName</li>
                <li>tagName</li>
                <li>tagName</li>
                <li>tagName</li>
                <li>tagName</li>
            </ul>
            <div className="btn btn-success btn-block">View project</div>
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
                <HoverProject opacity={this.state.opacity}/>
                <img src={this.props.url} />
            </div>
        );
    }
}


export default Project;