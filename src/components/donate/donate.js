import React from "react";
import { makeStyles, Typography, Link, Paper} from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator'
import image from '../../assets/donations.jpg';
import imagePortrait from '../../assets/donationsPortrait.jpg';
import { NavItem } from '../navigation/navigation'
import { useSelector } from "react-redux";



const styles = makeStyles(theme=>({
  root: {
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "50% 50%",
      position: "relative",
      fontSize: "calc(1em + 1vw)",
      overflow: "auto",
      [theme.breakpoints.down("sm")]:{
        gridTemplateColumns: "30% 70%"
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
        zIndex: 1,
      [theme.breakpoints.down("sm")]:{
        backgroundImage: `url(${imagePortrait})`
      }
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
      "& span":{
        color: theme.palette.primary.main
      }, 
      "& h3":{
        marginBottom: "3vh",
        [theme.breakpoints.down("sm")]:{
          fontSize: "1.9rem"
        }
      }
  },
  paper:{
    backgroundColor: theme.palette.background.default,
    marginTop: "3vh",
    width: "100%",
    zIndex: -1
  },
  link:{
      fontSize: "1em",
      display: "inline-block",
      fontFamily: "Anton, sans-serif",
      color: theme.palette.primary.main
  },
  donateImages:{
      display: "flex",
      flexDirection: "column",
      width: "40%",
      margin: "0 auto",
      position: "relative",
      marginTop: "5vh", 
      "& a":{
          width: "100%",
          "& img":{
              width: "100%",
              height: "auto"
          }
      },
      [theme.breakpoints.down("sm")]:{
        width: "60%"
      }
  }
}));

const  Donate = (props)=> {
        const appInfos = useSelector((state)=>{
            return state.appInfoAndLinks.contact;
        });
        const classes = styles(); 
        return(
            <div className={classes.root}>
                <div className={classes.left}></div>
                <div className={classes.right}>
                    <Typography variant="h3">Thanks for contributing<span>.</span></Typography>
                    <br />
                    <Typography variant="h6">If you found any of my <NavItem name="Project" url="/projects" className={classes.link}/> helpful please consider <span>donating,</span> which will help me to continue working on these projects. </Typography>
                    <div className={classes.donateImages}>
                    <a href={appInfos.paypal} target="_blank"><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" alt="PayPal" /></a>
                    <a href={appInfos.buyMeACoffe} target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee"/></a>
                    </div>
                </div>
            </div>
      );
}

export default Donate;