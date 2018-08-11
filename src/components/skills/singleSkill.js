import React from 'react';
import { withStyles, LinearProgress, Typography } from '@material-ui/core';
import ProgressBar from '../helperComponents/progressBar';
const styles = theme => ({
    root: {
        width: "100%",
        padding: `${theme.spacing.unit}px 0px`
    },

    
});
export default withStyles(styles)(({ classes, title, value})=>{
    return(
        <div className={classes.root}>
            <ProgressBar value={value} label={title} />
        </div>
    );
});