import React, { Component } from 'react';
import Header from './components/header';
import Contact from './components/contact';
import Skills from './components/skills';
import Projects from './components/projects';
import HomePage from './components/homePage';
import HomeText from './components/homeText';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import animateComponent from './components/HOC/animateComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const homeTextAnim = animateComponent(HomeText);
const projectsAnim = animateComponent(Projects);
const skillsAnim = animateComponent(Skills);

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" render={({ location }) =>{
          console.log(location)
          return(
            <div>
            <Header />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout = {300}
                classNames = "fade"
              >
                <Switch location = {location}>
                  <Route exact path="/" component={homeTextAnim} />
                  <Route path="/skills" component={skillsAnim}/>
                  <Route path="/projects" component={projectsAnim}/>
                  <Route path="/contact" component={Contact}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          );
        }} />

        </Router>

    );
  }
}

export default App;