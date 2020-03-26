import React, { useState } from "react";
import { connect } from 'react-redux';
import { withRouter, useLocation } from 'react-router-dom';
import { creators as actions } from '../../appConfig/appConfigDuck'
import ToggleDrawer from './toggleDrawer';
import { makeStyles } from '@material-ui/core/';
import { useRef } from "react";



const styles = makeStyles (theme =>{
    return {
    root: (props)=>({
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 999,
        display: "flex",
        height: props.layout === "desktop" ? "100vh": "60px",
        width: props.layout === "desktop"? "60px": "100vw",
        flexDirection: props.layout === "desktop"? "column": "row"
    }),
    }
});

const Drawer = (props)=> {
    const myRef = useRef(null);
    const location = useLocation();
    const handleShowDrawer = ()=>{
        props.currentHover(location.pathname);
        props.showDrawerAndCards(!props.appConfig.showDrawerAndCards);
    }
        const  classes  = styles({showDrawer: props.appConfig.showDrawerAndCards, layout: props.layout});
        return(
            <div className={classes.root}>
                <ToggleDrawer layout={props.layout} show ={props.appConfig.showDrawerAndCards} handleClick={handleShowDrawer}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Drawer));