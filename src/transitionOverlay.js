import React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';




const TransitionOverlay = ({ classes, appConfig, theme})=>{
    const defaultStyle = (state)=> ({
        transition: `opacity ${appConfig.transitionDuration/8}ms ease-in-out`,
        opacity: state==="entered"? 1: 0,
        width: "100vw", 
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        position: "fixed",
        top: 0, 
        zIndex: 1000,
      });
      
      const lines = (prop, state)=>({
            position: "absolute",
            [prop]: 0,
            width: "100%",
            height: "10px",
            backgroundColor: theme.palette.primary.main,
            transition: `transform ${appConfig.transitionDuration/4}ms ease-in`,
            transform: "scaleX(0)",
            transformOrigin: prop==="top"? "left": "right",
            transitionDelay: prop==="top"? "0": `200ms`,
            transform: state==="entered"? `scaleX(1)`: "scaleX(0)"
      });

      const logoDiv = (state)=>({
            fill: theme.palette.primary.main, 
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "200px",
            transform: `translate(-50%, -50%) rotate(${state==="entered"?"720deg": "0deg"})`,
            transition: "transform 0.5s ease-out"
      })
    return (
        <Transition 
            in={appConfig.pageTransition}
            timeout={appConfig.transitionDuration/2}
            unmountOnExit
        >{(state) =>{

            return (<div style={{...defaultStyle(state)}}>
                <div style={{...lines("top", state)}}></div>
                <div style={{...lines("bottom", state)}}></div>
                    <svg style={{...logoDiv(state)}} xmlns="http://www.w3.org/2000/svg" width="50mm" height="50mm" viewBox="0 0 50 50">
                        <g id="Layer_x0020_1">
                        <metadata/>
                        <path d="M9.27489 42.2878c-1.16937,0 -2.33871,-0.161276 -3.50808,-0.483865 -1.17743,-0.322589 -2.28226,-0.806453 -3.32259,-1.45161l1.70162 -2.95163c0.806453,0.499994 1.66936,0.90323 2.58872,1.19356 0.919359,0.290311 1.81452,0.435476 2.67743,0.435476 1.78227,0 3.34678,-0.427412 4.70162,-1.27419 1.35485,-0.854842 2.16131,-2.0726 2.41131,-3.66131 0.0644993,-0.346783 0.0967582,-0.774195 0.0967582,-1.27421 0,-0.508059 0,-0.935489 0,-1.28225l0 -25.113 3.73389 0 0 25.0727c0,0.645159 -0.0161294,1.27419 -0.0483883,1.88711 -0.0322589,0.6129 -0.0967766,1.13709 -0.193553,1.58065 -0.217729,1.13711 -0.637094,2.14516 -1.24999,3.04033 -0.6129,0.887101 -1.39518,1.65323 -2.34678,2.29841 -0.951618,0.645159 -2.04034,1.13709 -3.25003,1.47581 -1.21774,0.338718 -2.5484,0.508059 -3.99194,0.508059zm15.8791 -3.68548l21.7581 0 0 3.14517 -21.734 0 -0.0241942 -3.14517zm0.0241942 -16.5565l20.863 0 0 3.1613 -20.863 0 0 -3.1613zm0 -15.621l21.734 0 0 3.14517 -21.734 0 0 -3.14517z"/>
                        </g>
                    </svg>

            </div>);
        }}
        </Transition>
    );
}

function mapStateToProps(state){
    return {
        appConfig: state.appConfig
    }
}
export default withStyles({}, {withTheme: true})(connect(mapStateToProps)(TransitionOverlay));