import React, { Component } from "react";
import { withStyles, LinearProgress, Paper, Typography } from "@material-ui/core";
import ProgressBar from '../helperComponents/progressbar';
const styles = theme => ({
  root: {
    padding: "60px 100px",
    '@media (max-width: 766px)':{
      padding: "60px 50px"
    }
  },
  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
    position: "relative",
    overflow: "hidden",
    '@media (max-width: 766px)':{
      gridTemplateColumns: "1fr"
    }
  },
  skillsGroup:{
    padding: theme.spacing.unit*2
  },

  devider:{
    position: "absolute",
    height: "150%",
    width: "400px",
    background: theme.palette.background.default,
    border: "2px solid transparent",
    borderLeftColor: theme.palette.primary.main,
    top: 0, 
    left: "50%",
    transformOrigin: "left top",
    transform: "rotate(20deg) translate(-10px, -10px)",
    zIndex: 0

  }
});


class Skills extends Component {
    render(){
      const { classes, theme} = this.props;
        return(
            <div className={classes.root}>
                <h2>MY SKILLS</h2>
                <div className={classes.skillsContainer}>
                <div className={classes.devider}></div>
                <Paper className={classes.skillsGroup}>
                </Paper>
                  <Paper className={classes.skillsGroup} style={{backgroundColor: theme.palette.background.default}}>
                    <ProgressBar label="REACT" value={95} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="JAVASCRIPT" value={90} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="JQUERY" value={90} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="REDUX" value={90} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="FLUX" value={90} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="HTML5" value={95} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="CSS" value={90} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="SASS" value={90} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="BOOTSTRAP 4" value={90} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="MATERIAL-UI" value={90} barColor={theme.palette.primary.dark} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="GIT" value={60} barColor={theme.palette.primary.light} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="WEBPACK" value={60} barColor={theme.palette.primary.light} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="PARCEL" value={60} barColor={theme.palette.primary.light} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="NODE" value={50} barColor={theme.palette.primary.light} backgroundColor={theme.palette.background.paper}/>
                    <ProgressBar label="EXPRESS" value={65} barColor={theme.palette.primary.light} backgroundColor={theme.palette.background.paper}/>
                  </Paper>
                  
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Skills);