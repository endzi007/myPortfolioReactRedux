import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import animateComponent from './components/HOC/animateComponent';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/helperComponents/theme';
import Navigation from './components/navigation/navigationContainer';
import Footer from './components/footer';

/*-----pages------*/
import Contact from './components/contact/contact';
import Skills from './components/skills/skills';
import Projects from './components//project/projects';
import HomeText from './components//home/homeText';

const homeTextAnim = animateComponent(HomeText);
const projectsAnim = animateComponent(Projects);
const skillsAnim = animateComponent(Skills);
const contactAnim = animateComponent(Contact);




const generalStyles = {
  header: 0,
  content: 0,
  footer: 0
};

class App extends React.Component {
  componentWillMount(){
    generalStyles.header = 40;
    generalStyles.footer = 20;
    generalStyles.content = window.innerHeight-40-20;
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Router>
        <div>
        <Navigation style={generalStyles.header} />
        <Route path="/" render={({ location }) =>{
          return(
            <div>
              <Switch location = {location}>
                <Route exact path="/" component={homeTextAnim} />
                <Route path="/skills" component={skillsAnim}/>
                <Route exact path="/projects" component={projectsAnim}/>
                <Route path="/contact" component={contactAnim}/>
              </Switch>
            </div>
          );
        }} />
        </div>
        </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;