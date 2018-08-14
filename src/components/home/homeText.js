import React, { Component } from 'react';
import Typist from 'react-typist';
import { Typography, Paper, withStyles} from '@material-ui/core';
import ej from '../../assets/images/ej.svg';
import picture from '../../assets/images/enisjasarovic.jpg';



const styles = (theme)=>({
    root:{
        fontWeight: "100",
        letterSpacing: "3px",
        lineHeight: 1.15,
        alignItems: "center",
        textAlign: "center",
        '@media (max-width: 766px)': {
            "& h1, h2, h3, h4":{
                fontSize: "1rem",
            }
        }
    },
    paper: {
        color:`${theme.palette.primary.light}!important`,
        "$ h1":{
            textDecoration: "underline",
            marginBottom: "10px"
        }

    },
    leftSide: {
        backgroundColor: theme.palette.background.default,
        position: "absolute",
        left: 0, 
        height: "100vh",
        width: "50vw",
        '@media (max-width: 766px)':{
            fontSize: "0.7em",
            width: "100vw",
            height: "50vh",
            border: "nones"
        }
    },
    rightSide: {
        backgroundColor: theme.palette.background.paper,
        position: "absolute",
        right: 0, 
        height: "100vh",
        width: "50vw",
        display: "block",
        borderLeft: `2px solid ${theme.palette.primary.main}`,
        '@media (max-width: 766px)':{
            top: "50vh",
            height: "50vh",
            width: "100vw",
            border: "none",
            borderTop: `2px solid ${theme.palette.primary.main}`,
            
        }
    },
    center: {
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        position: "absolute",
        border: `2px solid transparent`,
        top: "50%",
        left: "50%",
        backgroundColor: theme.palette.background.default,
        borderTopColor:theme.palette.primary.main,
        borderRightColor: theme.palette.primary.main,
        transformOrigin: "left",
        transform: "translate(-50%, -50%) translateX(16px) rotate(45deg)",
        zIndex: "3",
        textAlign: "center",
        display: "flex",
        alignItems: "right",
        justifyItems: "left",
        '@media(max-width: 766px)':{
            width: "60px",
            height: "60px",
            border: "2px solid transparent",
            transform: "translate(0, -50%) translateY(-13px) rotate(45deg)",
            borderBottomColor: theme.palette.primary.main,
            borderRightColor: theme.palette.primary.main

        }
    },
    svg:{
        fill: theme.palette.primary.main, 
        position: "absolute",
        width: "80px",
        transform: "translate(10px, -30px)",
        '@media(max-width:766px)':{
            width: "40px",
            transform: 'translate(7px, -65px) rotate(0)'
        }
    },
    textDiv:{
        maxWidth: "100%",
        height: "100%",
        display: "block",
        padding: "20px 60px",
        letterSpacing: "1px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        '@media (max-width: 766px)':{
            padding: "35px 35px", 
        }
    },
    underlinedH1:{
        borderBottom: `1px solid ${theme.palette.primary.main}`, 
        lineHeight: "50px",
        marginBottom: "10px",
        paddingLeft: "20px",
        paddingRight: "20px"
    },
    typist: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    }
});

class HomeText extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div className={`${classes.leftSide} ${classes.typist}`}>
                <div className={`${classes.typist} ${classes.h1}`} >
                        <Typography className={`${classes.h1} ${classes.underlinedH1}`} variant="headline">Enis Jasarovic</Typography>
                        <Typography className={classes.h1} variant="subheading">web developer</Typography>
                </div>
                </div>

                <div className={`${classes.rightSide} ${classes.typist}`}>
                    <div className={classes.textDiv}>
                    <Typography  className={`${classes.h1} ${classes.underlinedH1}`} variant="headline">Welcome to my Portfolio site</Typography>
                        <Typography variant="body1"> 
                            You can check some of my current projects in the projects section.
                        </Typography>
                    </div>
                </div>

                <div className={classes.center}>
                <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" width="50mm" height="50mm" viewBox="0 0 50 50">
                    <g id="Layer_x0020_1">
                    <metadata/>
                    <path d="M9.27489 42.2878c-1.16937,0 -2.33871,-0.161276 -3.50808,-0.483865 -1.17743,-0.322589 -2.28226,-0.806453 -3.32259,-1.45161l1.70162 -2.95163c0.806453,0.499994 1.66936,0.90323 2.58872,1.19356 0.919359,0.290311 1.81452,0.435476 2.67743,0.435476 1.78227,0 3.34678,-0.427412 4.70162,-1.27419 1.35485,-0.854842 2.16131,-2.0726 2.41131,-3.66131 0.0644993,-0.346783 0.0967582,-0.774195 0.0967582,-1.27421 0,-0.508059 0,-0.935489 0,-1.28225l0 -25.113 3.73389 0 0 25.0727c0,0.645159 -0.0161294,1.27419 -0.0483883,1.88711 -0.0322589,0.6129 -0.0967766,1.13709 -0.193553,1.58065 -0.217729,1.13711 -0.637094,2.14516 -1.24999,3.04033 -0.6129,0.887101 -1.39518,1.65323 -2.34678,2.29841 -0.951618,0.645159 -2.04034,1.13709 -3.25003,1.47581 -1.21774,0.338718 -2.5484,0.508059 -3.99194,0.508059zm15.8791 -3.68548l21.7581 0 0 3.14517 -21.734 0 -0.0241942 -3.14517zm0.0241942 -16.5565l20.863 0 0 3.1613 -20.863 0 0 -3.1613zm0 -15.621l21.734 0 0 3.14517 -21.734 0 0 -3.14517z"/>
                    </g>
                </svg>
                </div>
            </div>
        );
    }
}

/*
                    <Typist className={`${classes.typist} ${classes.h1}`} avgTypingDelay={20} cursor={{show: false, blink: true, element: "|", hideWhenDoneDelay: 1000}}>
                        <Typography className={classes.h1} variant="display1">Enis Jasarovic</Typography>
                        <Typography className={classes.h1} variant="body1">web developer</Typography>
                        <Typography className={classes.h1} variant="display2">Welcome to my Portfolio site</Typography>
                        <Typography className={classes.h1} variant="display1">I'm front-end web developer. Technologies I'm working with  PHP-C++
                            <Typist.Backspace count={7} delay={150} />
                            <span>JavaScript - React - Redux - jQuery - Node</span>
                        </Typography>
                        <Typography variant="display1"> You can check some of my current projects in the projects section.</Typography>
                        <Typography variant="display1"> I'm married and father of two kids. Currently I'm based in Montenegro. </Typography>
                    </Typist>
*/

export default withStyles(styles)(HomeText);
