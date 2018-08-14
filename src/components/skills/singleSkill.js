import React from 'react';
import { withStyles, LinearProgress, Typography } from '@material-ui/core';
import ProgressBar from '../helperComponents/progressBar';
const styles = theme => ({
    root: {
        width: "100%",
        padding: `${theme.spacing.unit}px 0px`
    },

    
});
export default withStyles(styles)(({ classes, title, value, barColor})=>{
    return(
        <div className={classes.root}>
            <ProgressBar value={value} barColor={barColor} label={title} />
        </div>
    );
});