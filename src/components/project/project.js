import React, { Component } from "react";
import HoverProject from './hoverProject';
import LargeProject from './largeProject';
import { style, cssRaw } from 'typestyle';


var projectItem = style({
        border: "1px solid #ffc34c",
        height: "auto",
        overflow: "hidden",
        position: "relative",
});

var projectHover = style({
        color: "white",
        position: "absolute",
        padding: "4px",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#3c444b",
        transition: "all 500ms",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        $nest: {
            "button": {
                flexGrow: "1",
                borderRadius: "5px",
                alignSelf: "flex-end",
            },
            "ul": {
                display: "flex",
                flexWrap: "wrap",
                textDecoration: "none",
                justifyContent: "center",
                listStyleType: "none",
                padding: 0, 
            },
            "li":{
                padding: "3px 10px",
                border: "1px solid gray",
                borderRadius: "2px",
                margin: "4px",
              }
        }
});


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
        console.log(this.props)
        return(
            <div className={projectItem} 
                onMouseOver={(e)=>{this.setState({opacity: 1});}}
                onMouseLeave={()=>{this.setState({opacity: 0});}}
            >
                <HoverProject
                    defaultClass={projectHover} 
                    opacity={this.state.opacity}
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