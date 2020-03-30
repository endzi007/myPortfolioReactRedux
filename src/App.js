import React, { useRef, useEffect, useState} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect, useSelector, useDispatch} from 'react-redux';
import './App.scss';
import { ThemeProvider, makeStyles, useMediaQuery, responsiveFontSizes, useTheme } from '@material-ui/core';
import themeCreator from './components/helperComponents/theme';
import Drawer from './components/navigation/drawer';
import Navigation from './components/navigation/navigation';
import TransitionOverlay from './transitionOverlay.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TimelineMax, Power3 } from 'gsap';
import { creators as appConfigActions } from './appConfig/appConfigDuck';

/*-----pages------*/
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Projects from './components//project/projects'; 
import HomeText from './components//home/homeText';
import Donations from './components/donate/donate';

let storedTheme = "";
try {
  storedTheme = localStorage.getItem("theme");
} catch (error) {
  
}
let newTheme = themeCreator({primaryColor: "#48BCEC", backgroundDefault: "#181718", paletteType: storedTheme === ""? storedTheme : "dark"});

const useStyles = makeStyles(theme => ({
  root:{
    boxSizing: "border-box",
    width: "100vw",
    height: "100vh",
    position: "relative",
    background:`linear-gradient(45deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.background.default} 100%)`,
    backgroundColor: "white",
  },
  innerDiv: (props)=>({
    position: "absolute",
    //transformOrigin: "left",
    overflow: "auto",
    boxShadow: "0 0 5px black",
    display: "flex",
    width: `calc(100% - ${theme.dimensions[props.layout].margins.left} - ${theme.dimensions[props.layout].margins.right})`,
    height: `calc(100% - ${theme.dimensions[props.layout].margins.top} - ${theme.dimensions[props.layout].margins.bottom})`,
    top: `${theme.dimensions[props.layout].margins.top}`,
    left: `${theme.dimensions[props.layout].margins.left}`,
    backgroundColor: theme.palette.background.default,

    transform: "translate(0px, 0px)",
    transformOrigin: "0% 50%"
  })
}));


const App = (props)=> {
  const [theme, setTheme] = useState(newTheme);
  const storeTheme = useSelector(store=> store.appConfig.currentTheme);
  useEffect(()=>{
      setTheme(themeCreator({primaryColor: "#48BCEC", backgroundDefault: "#181718", paletteType: storeTheme}))
  },[storeTheme]);

    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
         <Wrapper>
          <TransitionOverlay />
          <Switch>
            <Route exact path="/" component={HomeText} />             
            <Route path="/skills" component={Skills}/>
            <Route exact path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/donate" component={Donations} />
          </Switch>
          <Navigation />
          </Wrapper>
        </Router>
        </ThemeProvider>
    );
}

const pageTl = new TimelineMax({ paused: true});

const Wrapper = (props)=>{
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const myRef = useRef(null);
  let layout = "desktop"
  if(!matches){
    layout= "desktop"
  } else {
    layout="mobile";
  }

  const classes = useStyles({ layout });
    return <div className={classes.root}>
      <Drawer layout={layout}/>
      <div className={`${classes.innerDiv}`} ref={myRef} >
        {props.children}
        </div>
      </div>
}

export default App;