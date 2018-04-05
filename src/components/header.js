import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { style } from "typestyle";
import * as actions from '../actions/projectActions'


var defaultStyle = style({
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 999,
    display: "flex",
    $nest: {
        "p": {
            color: "white",
            fontSize: "1em",
            background: "lightgray"
        }
    }
});

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
            <div className={defaultStyle}>
                <ul className="nav navbar-nav">
                    <li><p onClick={this.handleClick.bind(this, "/Skills")}className="btn btn-link">Skills</p></li>
                    <li><p onClick={this.handleClick.bind(this, "/Projects")}className="btn btn-link">Projects</p></li>
                    <li><p onClick={this.handleClick.bind(this, "/Contact")}className="btn btn-link" >Contact</p></li>
                </ul>
            </div>
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