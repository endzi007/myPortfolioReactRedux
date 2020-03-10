import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/helperComponents/theme';
import Navigation from './components/navigation/navigationContainer';
import TransitionOverlay from './transitionOverlay.js';
import CssBaseline from '@material-ui/core/CssBaseline';

/*-----pages------*/
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Projects from './components//project/projects'; 
import HomeText from './components//home/homeText';
import anime from 'animejs';


const useStyles = makeStyles( theme => ({
  root:{
    padding: "10vw",
    backgroundColor: theme.palette.primary.main
  }
}));
const App = ()=> {
  const myRef= useRef(null);
  const classes = useStyles();
  useEffect(()=>{
    anime({
      targets: myRef.current,
      duration: 500,
      keyframes:[
        {
          rotateY: -14,
          easing: "easeOutQuad",
          delay: 500
        }
      ],

  }); 
  }, []);
    return (
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className={classes.root}>
        <Navigation />
        <TransitionOverlay />
          <div ref= {myRef} style={{transformOrigin: "top right", width: "100vw"}}>
            <Switch>
              <Route exact path="/" component={HomeText} />
              <Route path="/skills" component={Skills}/>
              <Route exact path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
        </div>
        </Router>
        </MuiThemeProvider>
    );
}

export default App;

/* 



*/