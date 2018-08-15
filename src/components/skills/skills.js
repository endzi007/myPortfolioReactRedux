import React, { Component } from "react";
import { withStyles, LinearProgress, Paper, Typography, Avatar} from "@material-ui/core";
import ProgressBar from '../helperComponents/progressbar'; 
import avatarImg from '../../assets/images/enisjasarovic.jpg';
const styles = theme => ({
  root: {
    padding: "60px 100px",
    minHeight: "80vh",
    '@media (max-width: 766px)':{
      padding: "70px 50px"
    }
  },
  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "4fr 3fr",
    gridGap: "20px",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    '@media (max-width: 766px)':{
      gridTemplateColumns: "1fr"
    }
  },
  skillsGroup:{
    padding: theme.spacing.unit*2
  },
  leftSide:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: "150px",
    paddingLeft: "10px",
    justifyContent: "center",
    textAlign: "center",
    '@media (max-width: 766px)':{
      padding: "10px",
      'img': {
        width: "100px",
        height: "100px"
      }
    }
  },
  devider:{
    position: "absolute",
    height: "150%",
    width: "400px",
    background: theme.palette.background.default,
    border: "2px solid transparent",
    borderLeftColor: theme.palette.primary.main,
    top: 0, 
    left: "57%",
    transformOrigin: "left top",
    transform: "rotate(20deg) translate(-10px, -10px)",
    zIndex: 0,
    '@media (max-width: 766px)':{
      display: "none"
    }
  },
  avatar: {
    width: "130px",
    height: "130px"
  }
});


class Skills extends Component {
    render(){
      const { classes, theme} = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.skillsContainer}>
                <div className={classes.devider}></div>
                <Paper className={`${classes.leftSide}`}>
                  <Avatar className={classes.avatar} src={avatarImg} alt="enis-jasarovic"/>
                  <Typography variant="display2" component="h5">Enis Jašarović</Typography>
                  <Typography variant="title">web developer</Typography>
                  <Typography variant="title">I'm web developer from Montenegro with few years of experience as freelancer.</Typography>                
                </Paper>
                  <Paper className={classes.skillsGroup} style={{backgroundColor: theme.palette.background.default}}>
                    <ProgressBar label="REACT" value={85} />
                    <ProgressBar label="JAVASCRIPT" value={85}/>
                    <ProgressBar label="JQUERY" value={80}/>
                    <ProgressBar label="REDUX" value={85}/>
                    <ProgressBar label="HTML5" value={85}/>
                    <ProgressBar label="CSS, SASS" value={90}/>
                    <ProgressBar label="BOOTSTRAP 4" value={90}/>
                    <ProgressBar label="MATERIAL-UI" value={85}/>
                    <ProgressBar label="GIT" value={55} />
                    <ProgressBar label="WEBPACK, PARCEL" value={55} />
                    <ProgressBar label="NODE" value={50} />
                    <ProgressBar label="EXPRESS" value={50} />
                    <ProgressBar label="PHOTOSHOP" value={80} />
                    <ProgressBar label="ILLUSTRATOR" value={50} />
                  </Paper>
                  
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Skills);