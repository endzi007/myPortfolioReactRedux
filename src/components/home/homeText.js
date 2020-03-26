import React from 'react';
import { Typography, makeStyles} from '@material-ui/core';


const styles = makeStyles(theme=>({
    root: {
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        position: "relative",
        alignItems: "center",
        "& h4":{
            letterSpacing: "0.2rem",
            fontSize: "3vw",
            marginTop: "2vh"
        },
        "& h6":{
            letterSpacing: "0.2rem",
            marginLeft: "5px",
            marginTop: "1vw",
            fontSize: "3.5vw"
        },
        "& h1":{
            fontSize: "7.5vw",
            letterSpacing: "5px",
            letterSpacing: "5px",
            justifySelf: "center"
        }
    },
    left: {
        height: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    right: {
        height:"100%",
        color: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    }
}));

const HomeText = (props)=>{
    const classes = styles();
    return(
        <div className={classes.root}>
            
            <div className={classes.left}>
            <Typography variant="h6">Web</Typography>
                <Typography variant="h1">Enis Ja</Typography>
                <Typography variant="h4">Welcome</Typography>
            </div>
            <div className={classes.right}>
                <Typography variant="h6">Developer</Typography>
                <Typography variant="h1">sarovic</Typography>
                <Typography variant="h4">.</Typography>

            </div>
        </div>
    );

}


export default HomeText;
