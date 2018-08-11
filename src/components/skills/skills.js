import React, { Component } from "react";
import { withStyles, LinearProgress, Paper, Typography } from "@material-ui/core";
import SingleSkill from './singleSkill';
const styles = theme => ({
  root: {
    color: "red"
  },
  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px"
  },
  skillsGroup:{
    padding: theme.spacing.unit*2
  }
});


class Skills extends Component {
    render(){
      const { classes } = this.props;
        return(
            <div className={`pageSection ${classes.root}`}>
                <h2 className="paddingDiv">MY SKILLS</h2>
                <div className={classes.skillsContainer}>
                  <Paper className={classes.skillsGroup}>
                    <SingleSkill title="REACT" value={95} colorVal="#fff" />
                    <SingleSkill title="JAVASCRIPT" value={90} colorVal="#000" />
                    <SingleSkill title="JQUERY" value={90} colorVal="#000" />
                    <SingleSkill title="REDUX" value={90} colorVal="#000" />
                    <SingleSkill title="FLUX" value={90} colorVal="#000" />
                  </Paper>
                  <Paper className={classes.skillsGroup}>
                    <SingleSkill title="HTML5" value={95} colorVal="#fff" />
                    <SingleSkill title="CSS" value={90} colorVal="#000" />
                    <SingleSkill title="SASS" value={90} colorVal="#000" />
                    <SingleSkill title="BOOTSTRAP 4" value={90} colorVal="#000" />
                    <SingleSkill title="MATERIAL-UI" value={90} colorVal="#000" />
                  </Paper>
                  <Paper className={classes.skillsGroup}>
                    <SingleSkill title="GIT" value={60} colorVal="#fff" />
                    <SingleSkill title="WEBPACK" value={60} colorVal="#000" />
                    <SingleSkill title="PARCEL" value={60} colorVal="#000" />
                    <SingleSkill title="NODE" value={50} colorVal="#000" />
                    <SingleSkill title="EXPRESS" value={65} colorVal="#000" />
                  </Paper>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Skills);