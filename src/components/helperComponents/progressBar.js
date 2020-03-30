import React, { useEffect, useState } from 'react';
import { withStyles, Typography, withWidth, makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
    root: {
        width: "100%",
        position: "relative",
        height: "1.2rem",
        marginTop: "8px",
        overflow: "hidden"
    },
    background: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 0,
        borderRadius: "5px"
    },
    bar:(props)=>({
        left: "0",
        width: "100%", 
        height: "98%",
        backgroundColor: theme.palette[props.color]["main"],
        position: "absolute",
        zIndex: "1",
        transformOrigin: "left",
        transition: `transform 500ms ease-in`,
        borderRadius: "3px"
    }),
    label: {
        position: "absolute",
        top: "50%",
        zIndex: 3,
        transform: "translateY(-50%)",
        display: "block",
        minWidth: "150px",
        padding: "6px 3px 6px 6px",
        '& p': {
            color: theme.palette.background.default,
            fontSize: "0.65rem",
            fontWeight: "bold"
        },
        [theme.breakpoints.down("sm")]:{
            "& p":{
                fontSize: "0.5rem"
            }
        }
    },
}));
const ProgressBar = (props)=> {

    const [ state, setState ] = useState({
        value: 1,
        barColor: "",
        backgroundColor: "",
        duration: 500,
        height: 8,
        label: "",
    })
    const classes = styles({color: props.color});
    useEffect(()=>{
        setTimeout(()=>{
            setState({...state,
                value: props.value,
                label: props.label,
            });
        }, 0);
    })
        return(
            <div className={classes.root}>
                <div className={classes.label}> 
                <Typography variant="body1">{state.label} </Typography>
                </div>
                <div>
                    <div className={classes.background}></div>
                    <div className={classes.bar} style={{ transform: `scalex(${state.value/100})`}} ></div>
                </div>
            </div>
        );

}

export default ProgressBar;