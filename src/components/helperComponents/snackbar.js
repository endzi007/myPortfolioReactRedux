import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';




const Snackbar = ({ classes, theme, show, message})=>{
    const defaultStyle = (state)=> ({
        transition: `all 0.5s ease-in`,
        opacity: state==="entered"? 1: 0,
        minWidth: "100px", 
        height: "20px",
        padding: "10px 20px",
        borderRadius: "3px",
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",
        bottom: state === "entered"? "5px" : "0px",
        left: "50%",
        transform: 'translateX(-50%)',
        zIndex: 1000,
      });
    
    return (
        <Transition 
            in={show}
            timeout={500}
            unmountOnExit
        >{(state) =>{
            return (
            <div style={{...defaultStyle(state)}}>
                <Typography variant="subheading" color="inherit">Thank you..</Typography>
            </div>
            );
        }}
        </Transition>
    );
}

export default withStyles({}, {withTheme: true})(Snackbar);