import React from 'react';
import { Typography, makeStyles} from '@material-ui/core';


const styles = makeStyles(theme=>({
    root: {
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        position: "relative"
    },
    left: {
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        boxShadow: "0px 0px 10px black",
        borderRadius: "10px"
    },
    right: {
        height:"100%"
    },
    center:{
        position: "absolute",
        top: "100px",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'Anton', sans-serif",
        fontSize: "3.5rem",
        letterSpacing: "20px",
        fontWeight: "bolder"
    }
}));

const HomeText = (props)=>{
    const classes = styles();
    return(
        <div className={classes.root}>
            <div className={classes.center}>Enis Jasarovic</div>
            <div className={classes.left}></div>
            <div className={classes.right}></div>
        </div>
    );

}


export default HomeText;
