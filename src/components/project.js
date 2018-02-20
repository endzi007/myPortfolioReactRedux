import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';

class Project extends Component {
    render(){
        console.log("propps",this.props.propss)
        return(
            <div>
                <h3>{this.props.title}</h3>
                <img src={this.props.url}/>
            </div>
        );
    }
}


export default Project;