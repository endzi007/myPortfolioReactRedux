import React, { useState } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions'
import ToggleDrawer from './toggleDrawer';
import { withStyles, Typography } from '@material-ui/core/';
import SvgImage from './svgImage';
import anime from 'animejs';
import { useRef } from "react";
import { useEffect } from "react";


const styles = theme =>({
    root:{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 999,
        display: "flex",
    },
    wrapperStyle: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        maxHeight: "100vh",
        background: theme.palette.background.paper,
    },
    navStyle :{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        overflowY: "hidden",
    },
    navItemStyle:{
        display: "flex",
        padding: "10px",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        alignContent: "center",
        borderRight: theme.palette.primary.main,        
        "&:hover":{
            backgroundColor: "gray",
            cursor: "pointer"
        },
        width: "100%"
    }
});

const Navigation = (props)=> {

    const [showDrawer, setShowDrawer ] = useState(false);
    const myRef = useRef(null);
    const handleClick = (path) => {
        if (props.history.location.pathname === path){
            return;
        }

        props.history.push(path);
        setShowDrawer(false);
        //props.startPageTransition(false);
       /*  props.startPageTransition(true);
        setShowDrawer(false);
        setTimeout(()=>{
            props.history.push(path);
            props.startPageTransition(false);

        }, props.appConfig.transitionDuration); */
    }
     
        const { classes } = props;
        return(
            <div className={classes.root}>
                <div 
                ref={myRef}
                className={showDrawer? "drawer": "drawer"}
                style={{
                    width: "20vw", 
                    height: "100vh", 
                    backgroundColor: "#eb7d4b",
                }}>
                    <div className={classes.wrapperStyle}>
                        <div className={classes.navStyle}>
                            <Typography variant="body1" className={classes.navItemStyle} onClick={()=>{handleClick("/")}}> <SvgImage show={true} name="home"/> Home </Typography>
                            <Typography variant="body1" className={classes.navItemStyle} onClick={()=>{handleClick("/Skills")}}> <SvgImage show={true} name="skills"/> About </Typography>
                            <Typography variant="body1" className={classes.navItemStyle} onClick={()=>{handleClick("/Projects")}}><SvgImage show={true} name="projects"/> Projects</Typography>
                            <Typography variant="body1" className={classes.navItemStyle} onClick={()=>{handleClick("/Contact")}}><SvgImage show={true} name="contact"/> Contact</Typography>
                        </div>
                    </div>

                </div>
                <ToggleDrawer show ={showDrawer} handleClick={()=>{
                    setShowDrawer(!showDrawer)
                }}/>
            </div>
        );
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