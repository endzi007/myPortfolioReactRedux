import React, { Component } from "react";
import HoverProject from './hoverProject';
import LargeProject from './largeProject';

class Project extends Component {
    constructor(){
        super();
        this.state = {
            opacity: 0,
            showModal: false
        }
    }
    toggleModalShow (arg){
        let opacity;
        if(arg === false){
            opacity = 0;
        }
        this.setState({ opacity: opacity, showModal: arg});
    }
    render(){
        return(
            <div className={this.props.className} 
                onMouseOver={(e)=>{this.setState({opacity: 1});}}
                onMouseLeave={()=>{this.setState({opacity: 0});}}
            >
                <HoverProject opacity={this.state.opacity}
                {...this.props}
                toggleModalShow ={this.toggleModalShow.bind(this, true)}
                />
                <img src={this.props.picture} alt={this.props.title}/>
                <LargeProject show={this.state.showModal} toggleModalShow ={this.toggleModalShow.bind(this, false)} {...this.props} />
            </div>
        );
    }
}


export default Project;