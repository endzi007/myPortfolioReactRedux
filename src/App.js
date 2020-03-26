import React, { useRef, useEffect } from 'react';
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
import { useState } from 'react';

let newTheme = themeCreator({primaryColor: "#48BCEC", backgroundDefault: "#181718", paletteType: "dark"});

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
    transformOrigin: "left",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none"
    },
    "-ms-overflow-style": "none",
    boxShadow: "0 0 5px black",
    display: "flex",
    width: `calc(100% - ${theme.dimensions[props.layout].margins.left} - ${theme.dimensions[props.layout].margins.right})`,
    height: `calc(100% - ${theme.dimensions[props.layout].margins.top} - ${theme.dimensions[props.layout].margins.bottom})`,
    top: `${theme.dimensions[props.layout].margins.top}`,
    left: `${theme.dimensions[props.layout].margins.left}`,
    backgroundColor: theme.palette.background.default,
    borderTopLeftRadius: "80px"
  })
}));


const App = (props)=> {
  const myRef= useRef(0);
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
  const pageTransition = useSelector(store=>store.appConfig.pageTransition);
  const currentTheme = useSelector(store=>store.appConfig.currentTheme)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!pageTransition){
      pageTl.fromTo(myRef.current, {scaleX: 0}, {scaleX: 1, duration: 0.7, ease: Power3.easeOut});
      pageTl.play();
    }
  }, [pageTransition]);

  let layout = "desktop"
  if(!matches){
    layout= "desktop"
  } else {
    layout="mobile";
  }


  const classes = useStyles({ layout });
    return <div className={classes.root}>
      <Drawer layout={layout}/>
      <div onClickCapture={(e)=>{ 

        dispatch(appConfigActions.currentTheme(currentTheme==="dark"? "light": "dark"))
        }} className={`${classes.innerDiv}`} ref={myRef} >
        {props.children}
        </div>
      </div>
}

export default App;