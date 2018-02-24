import React, { Component } from 'react';
import Header from './components/header';
import Contact from './components/contact';
import Skills from './components/skills';
import Projects from './components/projects';
import HomePage from './components/homePage';
import HomeText from './components/homeText';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/">
          <HomePage onWheel = {(e)=>{console.log(e)}}>
            <Route exact path="/" component={HomeText} />
            <Route path="/skills" component={Skills}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </HomePage>
        </Route>
      </Router>
    );
  }
}

export default App;