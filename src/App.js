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

const generalStyles = {
  header: 0,
  content: 0,
  footer: 0

};

class App extends Component {
  componentWillMount(){
    generalStyles.header = 40;
    generalStyles.footer = 20;
    generalStyles.content = window.innerHeight-40-20;
  }
  render() {
    return (
      <Router>
        <div>
        <Header style={generalStyles.header} />
        <Route path="/" render={({ location }) =>{
          return(
            <div>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout = {500}
                  classNames = {{
                    enter: "animated",
                    enterActive: "flipInX",
                    exit: "animated",
                    exitActive: "fadeOut"
                  }}
                  appear = {true}
                >
                  <Switch location = {location}>
                    <Route exact path="/" component={HomeText} />
                    <Route path="/skills" component={Skills}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              
          </div>
          );
        }} />
        <Footer style ={generalStyles.footer}/>
        </div>
        </Router>

    );
  }
}

export default App;