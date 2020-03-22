import React from 'react';
import { Typography, makeStyles} from '@material-ui/core';


const styles = makeStyles(theme=>({
    root: {
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        position: "relative",
        "& h4":{
            letterSpacing: "10px",
            marginLeft: "10px"
        },
        "& h6":{
            letterSpacing: "10px",
            marginLeft: "5px",
            marginTop: "4rem"
        }
    },
    left: {
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
        textAlign: "right",
        paddingTop: "30vh"
    },
    right: {
        height:"100%",
        color: theme.palette.primary.main,
        textAlign: "left",
        paddingTop: "30vh"
    },
    span: {
        fontSize: "9vw",
        letterSpacing: "5px",
        fontFamily: "'Anton', sans-serif",
        letterSpacing: "5px",
        justifySelf: "center",
        transform: "translateY(-50%)"
    }
}));

const HomeText = (props)=>{
    const classes = styles();
    return(
        <div className={classes.root}>
            
            <div className={classes.left}>
            <Typography variant="h6">Web</Typography>
                <span className={classes.span}>Enis Ja</span>
                <Typography variant="h4">Welcome</Typography>
            </div>
            <div className={classes.right}>
                <Typography variant="h6">Developer</Typography>
                <span className={classes.span}>sarovic</span>
                <Typography variant="h4">.</Typography>

            </div>
        </div>
    );

}


export default HomeText;
