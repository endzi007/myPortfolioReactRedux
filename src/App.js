import React, { Component } from 'react';
import Header from './components/header';
import Contact from './components/contact';
import Skills from './components/skills';
import Projects from './components/projects';
import './App.css';


class App extends Component {
  render() {
    return (
      <div id="page" className="container">
        <Header />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;