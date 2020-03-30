import React, { useEffect, useRef } from 'react';
import { makeStyles} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TimelineMax, Power4, } from "gsap";



const styles = makeStyles((theme)=>({
    defaultStyle: (props)=> ({
        width: "100%", 
        height: "100%",
        position: "absolute",
        top: 0, 
        zIndex: 1000,
        pointerEvents: "none",
        opacity: 1
    }),
    lines: {
        position: "absolute",
        width: "100%",
        height: "10px",
        backgroundColor: theme.palette.primary.main,
        zIndex: 2,
        "&:nth-child(1)":{
            top: 0,
            left: 0,
            transformOrigin: "left",
        },
        "&:nth-child(2)":{
            bottom: 0,
            left: 0,
            transformOrigin: "right",
        }
    },
    logoDiv: {
        fill: theme.palette.primary.main, 
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "200px",
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.2s linear",
        opacity: 0
    },
    innerDiv:{
        backgroundColor: theme.palette.background.default,
        width: "100%",
        height: "100%",
        margin: "0 auto"
    }
}));


const TransitionOverlay = ()=>{
    const appConfig = useSelector((state)=>{
        return state.appConfig
    })
    const tl1 = useRef(new TimelineMax({paused: true, ease: Power4.out}));
    const wrapperRef = useRef(null);
    const topLine = useRef(null);
    const bottomLine = useRef(null);
    const innerDivRef = useRef(null);
    const svgRef = useRef(null);
    const classes = styles({ show: appConfig.pageTransition });
      useEffect(()=>{

        tl1.current.from(topLine.current, {transform: "scaleX(0)", duration: appConfig.transitionDuration/8});
        tl1.current.from(bottomLine.current, {transform: "scaleX(0)", duration: appConfig.transitionDuration/8});
        tl1.current.fromTo(innerDivRef.current, {translateX: "-100vw"}, { translateX: 0, duration: appConfig.transitionDuration/4})
        tl1.current.fromTo(svgRef.current, {rotateZ: 0, opacity: 0,}, {rotateZ: 2880, opacity: 1, duration: appConfig.transitionDuration/2 }, `-=${appConfig.transitionDuration/2}` )
    },[]);
     useEffect(()=>{
         if(appConfig.pageTransition){
            tl1.current.play();
         } else {
            tl1.current.reverse(0);
         }
      },[appConfig.pageTransition]);


        return (<div ref={wrapperRef} className={classes.defaultStyle}>
            <div className={classes.lines} ref={topLine}></div>
            <div className={classes.lines} ref={bottomLine}></div>
            <div className={classes.innerDiv} ref={innerDivRef}>
                <svg ref = {svgRef} className={`${classes.logoDiv} pulse`} width="50mm" height="50mm" viewBox="0 0 50 50">
                    <g id="Layer_x0020_1">
                    <metadata/>
                    <path d="M9.27489 42.2878c-1.16937,0 -2.33871,-0.161276 -3.50808,-0.483865 -1.17743,-0.322589 -2.28226,-0.806453 -3.32259,-1.45161l1.70162 -2.95163c0.806453,0.499994 1.66936,0.90323 2.58872,1.19356 0.919359,0.290311 1.81452,0.435476 2.67743,0.435476 1.78227,0 3.34678,-0.427412 4.70162,-1.27419 1.35485,-0.854842 2.16131,-2.0726 2.41131,-3.66131 0.0644993,-0.346783 0.0967582,-0.774195 0.0967582,-1.27421 0,-0.508059 0,-0.935489 0,-1.28225l0 -25.113 3.73389 0 0 25.0727c0,0.645159 -0.0161294,1.27419 -0.0483883,1.88711 -0.0322589,0.6129 -0.0967766,1.13709 -0.193553,1.58065 -0.217729,1.13711 -0.637094,2.14516 -1.24999,3.04033 -0.6129,0.887101 -1.39518,1.65323 -2.34678,2.29841 -0.951618,0.645159 -2.04034,1.13709 -3.25003,1.47581 -1.21774,0.338718 -2.5484,0.508059 -3.99194,0.508059zm15.8791 -3.68548l21.7581 0 0 3.14517 -21.734 0 -0.0241942 -3.14517zm0.0241942 -16.5565l20.863 0 0 3.1613 -20.863 0 0 -3.1613zm0 -15.621l21.734 0 0 3.14517 -21.734 0 0 -3.14517z"/>
                    </g>
                </svg>
            </div>

        </div>);

}

export default TransitionOverlay;