import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import animateComponent from './components/HOC/animateComponent';

import Header from './components/header';
import Footer from './components/footer';

/*-----pages------*/
import Contact from './components/contact/contact';
import Skills from './components/skills/skills';
import Projects from './components//project/projects';
import HomeText from './components//home/homeText';


class App extends Component {
  render() {
    const homeTextAnim = animateComponent(HomeText);
    const projectsAnim = animateComponent(Projects);
    const skillsAnim = animateComponent(Skills);
    const contactAnim = animateComponent(Contact);
    return (
      <Router>
        <div>
        <Header />
        <Route path="/" render={({ location }) =>{
          return(
            <div>
              <Switch location = {location}>
                <Route exact path="/" component={homeTextAnim} />
                <Route path="/skills" component={skillsAnim}/>
                <Route exact path="/projects" component={projectsAnim}/>
                <Route path="/Contact" component={contactAnim}/>
              </Switch>
            </div>
          );
        }} />
        </div>
        </Router>

    );
  }
}

export default App;