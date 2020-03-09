import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/helperComponents/theme';
import Navigation from './components/navigation/navigationContainer';
import TransitionOverlay from './transitionOverlay.js';
import CssBaseline from '@material-ui/core/CssBaseline';

/*-----pages------*/
import Contact from './components/contact/contact';
import Skills from './components/skills/skills';
import Projects from './components//project/projects';
import HomeText from './components//home/homeText';
import { useEffect } from 'react';
import { useRef } from 'react';
import anime from 'animejs';

const App = ()=> {
  const myRef= useRef(null);
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
        <div>
        <Navigation />
        <TransitionOverlay />
        <Route path="/" render={({ location }) =>{
          return(
            <div ref= {myRef} style={{transform: `perspective(150vw)`, transformOrigin: "top right", width: "100vw"}}>
              <Switch location = {location}>
                <Route exact path="/" component={HomeText} />
                <Route path="/skills" component={Skills}/>
                <Route exact path="/projects" component={Projects}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
            </div>
          );
        }} />
        </div>
        </Router>
        </MuiThemeProvider>
    );
}

export default App;