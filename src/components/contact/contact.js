import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { style } from 'typestyle';
import { StyleSheet, css } from 'aphrodite'; 

const defaultStyle = StyleSheet.create({
    textAlign: "center",
    margin: "0 auto",
    padding: "20px",
    paddingTop: "40px"
});

const inputStyle={
    width: "70%",
    backgroundColor: "rgba(255,255,255,0.5)",
    marginBottom: "10px"
}

class Contact extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        var name = e.target.name;
        switch (name) {
            case "name":
                this.setState({name: e.target.value})
                break;
            case "email":
                this.setState({email: e.target.value})
                break;
            case "message":
                this.setState({message: e.target.value})
                break;
            default:
                break;
        }
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){

        return(
            
            <div className={`pageSection ${css(defaultStyle)}`}>
                    <h2> Contact me </h2>
                    <TextField
                        hintText="enter your name"
                        errorText=""
                        floatingLabelText="Your name"
                        style={inputStyle}
                    /><br />
                    <TextField
                        hintText="enter your email"
                        errorText=""
                        floatingLabelText="Your email"
                        style={inputStyle}
                    /><br />
                    <TextField
                        hintText="enter your message"
                        errorText=""
                        floatingLabelText="Message"
                        style={{...inputStyle}}
                        multiLine={true}
                        rows={3}
                    /><br />
            </div>
        );
    }
}





export default Contact;