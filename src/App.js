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

const App = ()=> {
    return (
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
        <Navigation />
        <TransitionOverlay />
        <Route path="/" render={({ location }) =>{
          return(
            <div style={{transform: `perspective(150vw) rotateY(-14deg)`, transformOrigin: "top right", width: "100vw"}}>
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