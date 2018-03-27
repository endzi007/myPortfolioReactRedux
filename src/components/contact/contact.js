import React, { Component } from 'react';
import { Col, Form, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Contact extends Component {
    static propTypes = {
        appConfig: PropTypes.shape({
            pageTransition: PropTypes.bool.isRequired, 
            transitionDuration: PropTypes.func.isRequred
        }).isRequired,
    }

    constructor(){
        super();
        this.state = {
            name:"",
            email: "",
            message:""
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
        console.log(this.props, "contact");
        return(
                <Col id="contactSection" xs={12}  className={`paddingDiv pageSection ${this.props.className}`}>
                <h1>Contact me</h1>
                    <Col xs={6}  className="align">
                        <Form onSubmit={this.onFormSubmit}>
                        <FormGroup>
                            <ControlLabel> Name </ControlLabel>
                            <FormControl 
                                type="text"
                                placeholder="enter name"
                                onChange = {this.handleChange}
                                name="name"
                                value={this.state.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel> Email </ControlLabel>
                            <FormControl 
                                type="text"
                                value={this.state.email}
                                placeholder="enter email"
                                onChange = {this.handleChange.bind(this)}
                                name="email"
                            />
                        </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Message</ControlLabel>
                    <FormControl onChange={this.handleChange} name="message" componentClass="textarea" placeholder="textarea" value={this.state.message} />
                      </FormGroup>
                        <FormGroup>
                            <ControlLabel> Submit </ControlLabel>
                            <FormControl 
                                type="submit"
                                value="Send"
                            />
                        </FormGroup>

                        </Form>
                    </Col>
                    <Col xs={4} xsOffset={1} className="align">
                        <img id="myImage" src="http://localhost:3000/src/assets/images/enis-jasarovic.jpg" alt="Author Enis Jasarovic" className="img img-responsive img-thumbnail" />
                    </Col>
                </Col>
        );
    }
}





export default Contact;