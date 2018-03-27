import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/projectActions'

class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    handleClick(path){
        if (this.props.history.location.pathname === path){
            return;
        }

        this.props.startPageTransition(true);

        setTimeout(()=>{
            this.props.startPageTransition(false);
            this.props.history.push(path)
        }, this.props.appConfig.transitionDuration);
    }
    render(){
        return(
        <Navbar id="headerNavbar" fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                <button className="btn btn-link" onClick={this.handleClick.bind(this, "/")}> Endzi </button>
                </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <ul className="nav navbar-nav">
                    <li><button onClick={this.handleClick.bind(this, "/Skills")}className="btn btn-link">Skills</button></li>
                    <li><button onClick={this.handleClick.bind(this, "/Projects")}className="btn btn-link">Projects</button></li>
                    <li><button onClick={this.handleClick.bind(this, "/Contact")}className="btn btn-link" >Contact</button></li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}
function mapStateToProps (state){
    return {
        appConfig: state.appConfig
    }
}
function mapDispatchToProps (dispatch){
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));