import React, { useState } from "react";
import { connect } from 'react-redux';
import { withRouter, useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { creators as actions } from '../../appConfig/appConfigDuck'
import ToggleDrawer from './toggleDrawer';
import { withStyles, Typography, makeStyles } from '@material-ui/core/';
import SvgImage from './svgImage';
import anime from 'animejs';
import { useRef } from "react";
import { useEffect } from "react";


const styles = makeStyles (theme =>{
    return {
    root: (props)=>({
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 999,
        display: "flex",
        height: "100vh",
        width: theme.dimensions.navWidth,
        transform: !props.showDrawer? `translateX(-${theme.dimensions.navWidth-50}px)` : "translateX(0px)",
        transition: "all 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550);"
    }),
    wrapperStyle: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        background: theme.palette.primary.light,
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
    }
});

const Navigation = (props)=> {
    const myRef = useRef(null);
    const location = useLocation();

    const handleClick = (path) => {
        if (props.history.location.pathname === path){
            return;
        }
        props.startPageTransition(true);
        setTimeout(()=>{
            props.showDrawerAndCards(false);
            props.history.push(path);
            props.startPageTransition(false);
        }, props.appConfig.transitionDuration);
    }
     const handleShowDrawer = ()=>{
        props.currentHover(location.pathname);
        props.showDrawerAndCards(!props.appConfig.showDrawerAndCards);
    }

    const onMouseEnterHandler = (path)=>{
        setTimeout(()=>{
            props.currentHover(path);
        },0);
    }
        const  classes  = styles({showDrawer: props.appConfig.showDrawerAndCards});
        return(
            <div className={classes.root}>
                <div 
                ref={myRef}
                style={{
                    width: "100%",
                    height: "100vh", 
                    backgroundColor: "#eb7d4b"
                }}>
                    <div className={classes.wrapperStyle} >
                        <div className={classes.navStyle}>
                            <Typography variant="body1" onMouseEnter={()=>{onMouseEnterHandler("/")}} className={classes.navItemStyle} onClick={()=>{handleClick("/")}}> <SvgImage show={true} name="home"/> Home </Typography>
                            <Typography variant="body1" onMouseEnter={()=>{onMouseEnterHandler("/Skills")}} className={classes.navItemStyle} onClick={()=>{handleClick("/Skills")}}> <SvgImage show={true} name="skills"/> About </Typography>
                            <Typography variant="body1" onMouseEnter={()=>{onMouseEnterHandler("/Projects")}} className={classes.navItemStyle} onClick={()=>{handleClick("/Projects")}}><SvgImage show={true} name="projects"/> Projects</Typography>
                            <Typography variant="body1" onMouseEnter={()=>{onMouseEnterHandler("/Contact")}} className={classes.navItemStyle} onClick={()=>{handleClick("/Contact")}}><SvgImage show={true} name="contact"/> Contact</Typography>
                        </div>
                    </div>

                </div>
                <ToggleDrawer show ={props.appConfig.showDrawerAndCards} handleClick={handleShowDrawer}/>
            </div>
        );
}

function mapStateToProps (state){
    return {
        appConfig: state.appConfig
    }

}

const mapDispatchToProps = {
    startPageTransition: actions.startPageTransition,
    showDrawerAndCards: actions.showDrawerAndCards,
    currentHover: actions.currentHover
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));