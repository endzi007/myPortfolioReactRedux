import React from "react";
import { makeStyles, Typography, Link, Paper} from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator'
import ProgressBar from '../helperComponents/progressbar'; 
import image from '../../assets/Enis-Jasarovic.jpg'


const styles = makeStyles(theme=>({
  root: {
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "50% 50%",
      position: "relative",
      fontSize: "calc(1em + 1vmax)",
      //overflow: "auto",
      [theme.breakpoints.down("sm")]:{
        gridTemplateColumns: "30% 70%"
      },
      [theme.breakpoints.up("lg")]:{
        fontSize: "calc(1em + 2vmax)",
      }
  },
  left: (props)=>({
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      textAlign: "right",
      paddingTop: "30vh",
      position: "relative",
      "&::before":{
        content: '""',
        display: "block",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundOrigin: "center",
        backgroundPosition: "center center",
        opacity: "0.8",
        top: 0,
        left: 0,
        zIndex: 1
      },
      "&::after":{
        content: '""',
        display: "block",
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: "1",
        top: 0,
        left: 0,
        zIndex: 2,
        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, ${fade(theme.palette.background.default, 0.5)} 80%,${theme.palette.background.default} 100%)`
      }

  }),
  right: {
      height:"100%",
      color: theme.palette.primary.main.contrastText,
      textAlign: "left",
      padding: "20px",
      alignContent: "strech",
      justifyItems: "center",
      fontSize: "1em",
      "& span":{
        color: theme.palette.primary.main
      }, 
      "& h4":{
        marginBottom: "3vh",
      },
  },
  paper:{
    backgroundColor: theme.palette.background.default,
    marginTop: "3vh",
    width: "100%",
    zIndex: -1
  }
}));

const  Skills = (props)=> {
        const classes = styles(); 
        return(
            <div className={classes.root}>
                <div className={classes.left}></div>
                <div className={classes.right}>
                  <div>
                    <Typography variant="h4">Hi<span>,</span> I'm Enis<span>,</span> web developer from Montenegro<span>.</span></Typography>
                    <Typography variant="body2">
                      I'm passionate about building excellent <span>web, mobile</span> and <span>desktop</span> apps. 
                      I am also developer of <Link href="https://github.com/endzi007/desktopDownloader/releases" target="_blank">Dedex Video downloader software</Link> for Windows platform.
                      <br /> Currently I work in company DeCom from Montenegro. 
                      <br />Below you you can see technologies I'm currently working with.
                    </Typography>
                  </div>
                  <div className={classes.paper}>
                      <ProgressBar label="REACT | JAVASCRIPT | JQUERY " color="success" value={98} />
                      <ProgressBar label="NODE | EXPRESS | ELECTRONJS" color="success" value={93} />
                      <ProgressBar label="MONGODB | SQL" color="success" value={93} />
                      <ProgressBar label="REDUX | FLUX" color="success" value={98}/>
                      <ProgressBar label="WORDPRESS | PHP" color="success" value={93} />
                      <ProgressBar label="HTML5, CSS, SASS" color="info" value={98}/>
                      <ProgressBar label="MATERIAL-UI | BOOTSTRAP" color="info" value={93}/>
                      <ProgressBar label="GSAP | ANIMEJS" color="info" value={93}/>
                      <ProgressBar label="WEBPACK, PARCEL" color="warning" value={93} />
                      <ProgressBar label="GIT" color="warning" value={93} />
                      <ProgressBar label="PHOTOSHOP | ILLUSTRATOR | INKSCAPE" color="info" value={93} />
                      <ProgressBar label="VBA" color="error" value={93} />
                      <ProgressBar label="WORD, EXCEL, POWERPOINT" color="error" value={95} />
                      <ProgressBar label="OTHER SOFTWARES FOR 3D/2D DRAWING, VIDEO EDITING..." color="info" value={93} />
                    </div>
                </div>
            </div>
      );
}

export default Skills;