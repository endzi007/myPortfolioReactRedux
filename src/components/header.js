import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { style } from "typestyle";
import * as actions from '../actions/projectActions'
import { Drawer, MenuItem, RaisedButton, MuiThemeProvider  } from 'material-ui';


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

const ShowDrawerButton = ({handleClick}) => {
        return (
        <svg onClick={ handleClick }fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>);
}

const CloseDrawerButton = ({handleClick})=>{
    return(
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    );
}

class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(){
        super();
        this.state = {
            showDrawer: false
        }
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
                <MuiThemeProvider>
                    <ShowDrawerButton handleClick={()=>{
                        console.log("clik");
                        this.setState({showDrawer: !this.state.showDrawer})
                    }}/>
                    <Drawer open={this.state.showDrawer}>
                    <ShowDrawerButton />
                            <MenuItem onClick={this.handleClick.bind(this, "/")}> Home
                            {
                                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            }
                            </MenuItem>
                            <MenuItem onClick={this.handleClick.bind(this, "/Skills")}>Skills</MenuItem>
                            <MenuItem onClick={this.handleClick.bind(this, "/Projects")}>Projects</MenuItem>
                            <MenuItem onClick={this.handleClick.bind(this, "/Contact")}>Contact</MenuItem>
                    </Drawer>
                </MuiThemeProvider>
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