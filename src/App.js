import React, { Component } from 'react';
import Header from './components/header';
import Contact from './components/contact';
import Skills from './components/skills';
import Projects from './components/projects';
import HomeText from './components/homeText';
import Footer from './components/footer';
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
          return(
            <div>
            <Header />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout = {1000}
                classNames = {{
                  enter: "animated",
                  enterActive: "flipInX",
                  exit: "animated",
                  exitActive: "flipOutX"
                }}
              >
                <Switch location = {location}>
                  <Route exact path="/" component={HomeText} />
                  <Route path="/skills" component={Skills}/>
                  <Route path="/projects" component={Projects}/>
                  <Route path="/contact" component={Contact}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <Footer />
          </div>
          );
        }} />

        </Router>

    );
  }
}

export default App;