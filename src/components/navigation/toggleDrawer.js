import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme =>({
    main: {
        position: "fixed",
        zIndex: 10000000,
        left: 0,
        top: "0px",
        width: "50px",
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: "20px",
        paddingLeft: "15px"
    },
    span: {
        backgroundColor: theme.palette.primary.main,
        "&:before":{
            backgroundColor: theme.palette.primary.main
        },
        "&:after":{
            backgroundColor: theme.palette.primary.main
        }
    }
});

const ToggleDrawer = ({ show, handleClick, classes})=>{
    return (
        <div onClick={handleClick.bind(null, !show)} className={classes.main}>
            <button className={`hamburger hamburger--collapse ${show===true?"is-active":""}`} type="button">
                <span className="hamburger-box">
                    <span className={`hamburger-inner ${classes.span}`}></span>
                </span>
            </button> 
        </div>
    ); 
}

export default withStyles(styles)(ToggleDrawer); 