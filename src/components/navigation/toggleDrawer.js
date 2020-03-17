import React from 'react';
import { withStyles, makeStyles, useTheme} from '@material-ui/core';

const styles = makeStyles(theme =>{
    return {
        main: (props)=> ({
            width: "60px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingTop: "10px",
            paddingLeft: "10px",
            height: "100%"
        }),
        span:(props)=> ({
            backgroundColor: theme.palette.primary.main,
            boxShadow: "0px 0px 2px black",
            transition: "transform 0.3 ease-in",
            "&:before":{
                backgroundColor: theme.palette.primary.main,
                boxShadow: "0px 0px 2px black",
                transform: `scaleX(${props.scale})`,
                transition: "transform 0.3 ease-in",
            },
            "&:after":{
                backgroundColor: theme.palette.primary.main,
                boxShadow: "0px 0px 2px black",
                transform: `scaleX(${props.scale})`,
                transition: "transform 0.3 ease-in",
            },
            "&:hover":{
                transform: "scaleX(1.2)",
                transition: "transform .5s ease-in"
            }
        })
    }
});

const ToggleDrawer = ({ show, handleClick})=>{
    const theme = useTheme();
    const classes = styles({scale: 0.8});
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