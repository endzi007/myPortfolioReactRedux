import React from 'react';
import { Typography, makeStyles} from '@material-ui/core';


const styles = makeStyles(theme=>({
    root: {
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        position: "relative",
        paddingTop: "50px"
    },
    left: {
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        boxShadow: "0px 0px 10px black",
        borderRadius: "10px",
        color: theme.palette.background.default,
        textAlign: "right",
    },
    right: {
        height:"100%",
        color: theme.palette.primary.main,
        textAlign: "left",
    },
    span: {
        fontSize: "9vw",
        letterSpacing: "5px",
        fontFamily: "'Anton', sans-serif",
        letterSpacing: "5px"
    }
}));

const HomeText = (props)=>{
    const classes = styles();
    return(
        <div className={classes.root}>
            <div className={classes.left}><span className={classes.span}>Enis Ja</span><p>Welcome</p></div>
            <div className={classes.right}><span className={classes.span}>sarovic</span></div>
        </div>
    );

}


export default HomeText;
