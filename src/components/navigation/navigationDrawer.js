import React from 'react';
import { Drawer } from '@material-ui/core';
import { withStyles, Typography } from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import SvgImage from './svgImage';


const styless = makeStyles(theme => ({
    wrapperStyle: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        maxHeight: "100vh",
        background: theme.palette.primary.dark,
    },
    navStyle :{
        width: "210px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        overflowY: "hidden",
        display: "none"
    },
    navItemStyle:{
        display: "flex",
        padding: "10px",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        alignContent: "center",
        borderRight: theme.palette.secondary.main,        
        "&:hover":{
            backgroundColor: "gray",
            cursor: "pointer"
        }
    }
    
}));

const NavigationDrawer = ({show, handleClick}) =>{
    const classes = styless();
    return(
        <Drawer style={{overflow: "hidden", zIndex: 100}} open={show}>
            <div className={classes.wrapperStyle}>
                <div className={classes.navStyle}>
                    <Typography variant="body1" className={classes.navItemStyle} onClick={handleClick.bind(null, "/")}> <SvgImage show={show} name="home"/> Home </Typography>
                    <Typography variant="body1" className={classes.navItemStyle} onClick={handleClick.bind(null, "/Skills")}> <SvgImage show={show} name="skills"/> About </Typography>
                    <Typography variant="body1" className={classes.navItemStyle} onClick={handleClick.bind(null, "/Projects")}><SvgImage show={show} name="projects"/> Projects</Typography>
                    <Typography variant="body1" className={classes.navItemStyle} onClick={handleClick.bind(null, "/Contact")}><SvgImage show={show} name="contact"/> Contact</Typography>
                </div>
            </div>
        </Drawer>
    );
}

export default NavigationDrawer;

