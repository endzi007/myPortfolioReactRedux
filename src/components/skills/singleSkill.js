import React from 'react';
import { withStyles, LinearProgress, Typography } from '@material-ui/core';
const styles = theme => ({
    root: {
        width: "100%",
        padding: `${theme.spacing.unit}px 0px`
    },
    text: {
        marginBottom: "10px"
    }, 
    bar: {
        '& barColorPrimary': {
            backgroundColor: theme.palette.error.main
        }
    },
    span: {
        color: theme.palette.primary.main,
        fontWeight: "bold",
        marginRight: "10px"
    }
    
});
export default withStyles(styles)(({colorVal, classes, title, value})=>{
    return(
        <div className={classes.root}>
            <Typography className={classes.text} variant="title">
            <span className={classes.span}>{`${value}%`}</span>
            {title}
            </Typography>
            <LinearProgress className={classes.bar} variant="determinate" value={value} valueBuffer={10} />
        </div>
    );
});