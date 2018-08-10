import React, { Component } from "react";
import { style } from 'typestyle';
import { Doughnut } from 'react-chartjs-2';

const defaultStyle = style({
  display: "flex",
  flexDirection: "column"
});
const skillsStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridGap: "10px"
});

const skillsDiv = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center"
});

class Skills extends Component {
    render(){
        return(
            <div className={`pageSection ${defaultStyle}`}>
              <div className="text-center paddingDiv">
                <h2 className="paddingDiv">MY SKILLS</h2>
                <p className="paddingDiv">I'm excited to learn web development  in the first place JavaScript on front and backend. Also I'm gonna learn React, Express and Mongo because my goal is to be full stack Web Develper. </p>
              </div>
              <div className={`paddingDiv ${skillsStyle}`}>
                <div className={skillsDiv}>
                  <Doughnut data={
                    {
                      labels:["Javascript"],
                      datasets: [{
                      backgroundColor: ['#4285f4', 'rgba(255,255,255,0)'],
                      borderColor: 'rgba(255, 99, 132, 0)',
                      data: [90, 10],
                      }]
                    }
                  } />
                  <h3>Javascript</h3>
                </div>
                <div className={skillsDiv}>
                  <Doughnut data={
                    {
                      labels:["React"],
                      datasets: [{
                      backgroundColor: ['#53c1de', 'rgba(255,255,255,0)'],
                      borderColor: 'rgba(255, 99, 132, 0)',
                      data: [95, 5],
                      }]
                    }
                  } />
                  <h3>React</h3>
                </div>
                <div className={skillsDiv}>
                  <Doughnut data={
                    {
                      labels:["jQuery"],
                      datasets: [{
                      backgroundColor: ['#78cff5', 'rgba(255,255,255,0)'],
                      borderColor: 'rgba(255, 99, 132, 0)',
                      data: [85, 15],
                      }]
                    }
                  } />
                  <h3>jQuery</h3>
                </div>
                <div className={skillsDiv}>
                  <Doughnut data={
                    {
                      labels:["ExpressJS"],
                      datasets: [{
                      backgroundColor: ['rgb(0,255,0)', 'rgba(255,255,255,0)'],
                      borderColor: 'rgba(255, 99, 132, 0)',
                      data: [65, 35],
                      }]
                    }
                  } />
                  <h3>ExpressJS</h3>
                </div>
                <div className={skillsDiv}>
                  <Doughnut data={
                    {
                      labels:["Redux"],
                      datasets: [{
                      backgroundColor: ['rgb(255, 99, 132)', 'rgba(255,255,255,0)'],
                      borderColor: 'rgba(255, 99, 132, 0)',
                      data: [90, 10],
                      }]
                    }
                  } />
                  <h3>HTML5, CSS, SASS</h3>
                </div>
                <div className={skillsDiv}>
                  <Doughnut data={
                    {
                      labels:["Bootstrap"],
                      datasets: [{
                      backgroundColor: ['#6610f2', 'rgba(255,255,255,0)'],
                      borderColor: 'rgba(255, 99, 132, 0)',
                      data: [95, 5],
                      }]
                    }
                  } />
                  <h3>Bootstrap</h3>
                </div>
                <div className={skillsDiv}>
                  <Doughnut data={
                    {
                      labels:["Webpack"],
                      datasets: [{
                      backgroundColor: ['#1c78c0', 'rgba(255,255,255,0)'],
                      borderColor: 'rgba(255, 99, 132, 0)',
                      data: [55, 45],
                      }]
                    }
                  } />
                  <h3>Weback</h3>
                </div>
              </div>
            </div>
        );
    }
}

export default Skills;