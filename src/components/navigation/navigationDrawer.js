import React from 'react';
import { Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import SvgImage from './svgImage';


const styless = theme => ({
    wrapperStyle: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        maxHeight: "100vh",
        background: theme.palette.background.paper,
    },
    navStyle :{
        width: "210px",
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
        }
    }
    
});

const NavigationDrawer = ({show, handleClick, classes}) =>{
    
    return(
        <Drawer style={{overflow: "hidden", zIndex: 100}} open={show}>
            <div className={classes.wrapperStyle}>
                <div className={classes.navStyle}>
                    <div className={classes.navItemStyle} onClick={handleClick.bind(null, "/")}> <SvgImage show={show} name="home"/> Home </div>
                    <div className={classes.navItemStyle} onClick={handleClick.bind(null, "/Skills")}> <SvgImage show={show} name="skills"/> About </div>
                    <div className={classes.navItemStyle} onClick={handleClick.bind(null, "/Projects")}><SvgImage show={show} name="projects"/> Projects</div>
                    <div className={classes.navItemStyle} onClick={handleClick.bind(null, "/Contact")}><SvgImage show={show} name="contact"/> Contact</div>
                </div>
            </div>
        </Drawer>
    );
}

export default withStyles(styless)(NavigationDrawer);

