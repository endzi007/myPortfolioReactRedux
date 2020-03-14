import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import Skills from '../skills/skills';
import Contact from '../contact/contact';
import Projects from '../project/projects'; 
import HomeText from '../home/homeText';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const styles = makeStyles(theme => ({
    root: (props)=>({
        width: "100%",
        display: "flex",
        position: "relative",
        display: props.show? "block": "none",
        transform: "perspective(100vw) rotateY(-45deg) scale(0.5)"
    }),
    child: (props)=>({
        position: "absolute",
        top: 0,
        width:"100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.default
    })
}));

export default ({ show })=>{
    const [ showPage, setShowPage ] = useState({ 
        "/Contact": <Contact />,
        "/Skills": <Skills />,
        "/Projects": <Projects />,
        "/": <HomeText />
    });
    const state = useSelector(state => state.appConfig);
    console.log(state, "state");

    const location = useLocation();
    const classes = styles({ show: show});
    return <div className={classes.root}>
        <div className={classes.child} style={{left: 0}}>{showPage[`${location.pathname}`]}</div>
    </div>
}