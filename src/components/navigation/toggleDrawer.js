import React from 'react';
import { makeStyles, useTheme} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { useSelector } from 'react-redux';

const styles = makeStyles(theme =>{
    return {
        main: (props)=> ({
            width: "60px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingTop: "20px",
            paddingLeft: "10px",
            paddingBottom: theme.dimensions.desktop.margins.bottom,
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between"
        }),
        span:(props)=> ({
            backgroundColor: theme.palette.background.default,
            transition: "transform 0.3 ease-in",
            "&:before":{
                backgroundColor: theme.palette.background.default,
                transform: `scaleX(${props.scale})`,
                transition: "transform 0.3 ease-in",
            },
            "&:after":{
                backgroundColor: theme.palette.background.default,
                transform: `scaleX(${props.scale})`,
                transition: "transform 0.3 ease-in",
            },
            
        }),
        hamburgerBox: {
            "&:hover>span:after":{
                transform: "scaleX(1)",
                transition: "transform 0.2s ease-in"
            },
            "&:hover>span:before":{
                transform: "scaleX(1.1)",
                transition: "transform 0.2s ease-in"
            }
        },
        links:{
            display: "flex",
            flexDirection: "column",
            "& a":{
                marginTop: "10px",
                color: theme.palette.background.default
            }
        },
        logo:{
            width:"60px",
            fill: theme.palette.primary.contrastText
        }
    }
});

const ToggleDrawer = ({ show, handleClick})=>{
    const theme = useTheme();
    const classes = styles({scale: 0.8});
    const appInfoAndLinks = useSelector((store)=>{
        return store.appInfoAndLinks;
    });
    return (
        <div className={classes.main}>
            <a href={appInfoAndLinks.contact.homePage} className={classes.logo} >
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="80px" height="80px" viewBox="0 0 50 50">
                <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"/>
                <path class={"fil0" + classes.logo} d="M9.27489 42.2878c-1.16937,0 -2.33871,-0.161276 -3.50808,-0.483865 -1.17743,-0.322589 -2.28226,-0.806453 -3.32259,-1.45161l1.70162 -2.95163c0.806453,0.499994 1.66936,0.90323 2.58872,1.19356 0.919359,0.290311 1.81452,0.435476 2.67743,0.435476 1.78227,0 3.34678,-0.427412 4.70162,-1.27419 1.35485,-0.854842 2.16131,-2.0726 2.41131,-3.66131 0.0644993,-0.346783 0.0967582,-0.774195 0.0967582,-1.27421 0,-0.508059 0,-0.935489 0,-1.28225l0 -25.113 3.73389 0 0 25.0727c0,0.645159 -0.0161294,1.27419 -0.0483883,1.88711 -0.0322589,0.6129 -0.0967766,1.13709 -0.193553,1.58065 -0.217729,1.13711 -0.637094,2.14516 -1.24999,3.04033 -0.6129,0.887101 -1.39518,1.65323 -2.34678,2.29841 -0.951618,0.645159 -2.04034,1.13709 -3.25003,1.47581 -1.21774,0.338718 -2.5484,0.508059 -3.99194,0.508059zm15.8791 -3.68548l21.7581 0 0 3.14517 -21.734 0 -0.0241942 -3.14517zm0.0241942 -16.5565l20.863 0 0 3.1613 -20.863 0 0 -3.1613zm0 -15.621l21.734 0 0 3.14517 -21.734 0 0 -3.14517z"/>
                </g>
            </svg>
            </a>
            <button onClick={handleClick.bind(null, !show)}  style={{outline: "none"}} className={`hamburger hamburger--collapse ${show===true?"is-active":""}`} type="button">
                <span className={`${classes.hamburgerBox} hamburger-box`}>
                    <span className={`hamburger-inner ${classes.span}`}></span>
                </span>
            </button> 
            <div className={classes.links}>
                <a href={appInfoAndLinks.contact.github} target="_blank"><GitHubIcon /></a>
                <a href={appInfoAndLinks.contact.linkedIn} target="_blank"><LinkedInIcon /></a>
                <a href={appInfoAndLinks.contact.github} target="_blank"><PictureAsPdfIcon /></a>
            </div>
        </div>
    ); 
}

export default ToggleDrawer; 