import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions'
import NavigationDrawer from './navigationDrawer';
import ToggleDrawer from './toggleDrawer';
import { withStyles } from '@material-ui/core/';


const styles = theme =>({
    root:{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 999,
        display: "flex",
    }
});

class Navigation extends Component {

    constructor(){
        super();
        this.state = {
            showDrawer: false,
        }
    }

    toggleShowDrawer(show){
        this.setState({
            showDrawer: show
        });
    }

    handleClick(path){
        if (this.props.history.location.pathname === path){
            return;
        }
        this.props.startPageTransition(true);
        this.toggleShowDrawer(false);
        setTimeout(()=>{
            this.props.history.push(path);
            this.props.startPageTransition(false);

        }, this.props.appConfig.transitionDuration);
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div 
                className="drawer"
                style={{width: "25vw", height: "100vh", display: this.state.showDrawer? "block": "none"}}></div>
                <ToggleDrawer show ={this.state.showDrawer} handleClick={this.toggleShowDrawer.bind(this)}/>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation)));