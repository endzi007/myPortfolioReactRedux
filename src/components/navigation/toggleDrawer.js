import React from 'react';
import { withStyles, makeStyles, useTheme} from '@material-ui/core';

const styles = makeStyles(theme =>{
    return {
        main: (props)=> ({
            width: "60px",
            display: "flex",
            justifyContent: "center",
            alignContent: "flex-start",
            alignItems: "flex-start",
            paddingTop: "10px",
            paddingLeft: "10px",
            height: "100%"
        }),
        span: {
            backgroundColor: theme.palette.primary.main,
            "&:before":{
                backgroundColor: theme.palette.primary.main
            },
            "&:after":{
                backgroundColor: theme.palette.primary.main
            }
        }
    }
});

const ToggleDrawer = ({ show, handleClick})=>{
    const theme = useTheme();
    const classes = styles();
    return (
        <div onClick={handleClick.bind(null, !show)} className={classes.main}>
            <button style={{outline: "none"}} className={`hamburger hamburger--collapse ${show===true?"is-active":""}`} type="button">
                <span className="hamburger-box">
                    <span className={`hamburger-inner ${classes.span}`}></span>
                </span>
            </button> 
        </div>
    ); 
}

export default ToggleDrawer; 