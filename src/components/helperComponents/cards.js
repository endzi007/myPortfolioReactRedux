import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import Skills from '../skills/skills';
import Contact from '../contact/contact';
import Projects from '../project/projects'; 
import HomeText from '../home/homeText';
import { useSelector } from 'react-redux';
import { gsap, TimelineMax } from 'gsap';


const styles = makeStyles(theme => ({
    root: (props)=>({
        width: "100%",
        display: "flex",
        position: "relative",
        opacity: props.show? "1": "0",
        transform: "perspective(100vw) rotateY(-45deg) scale(0.5)",
        pointerEvents: "none"
    }),
    child: (props)=>({
        position: "absolute",
        top: 0,
        width:"100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        opacity: 0
    })
}));

let tl1 = new TimelineMax({ paused: true });

let tl2 = new TimelineMax({
    paused: true, 
});


export default ({ show })=>{
    const currentHover = useSelector(state=>state.appConfig.currentHover);
    const classes = styles({ show: show});
    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const rootRef = useRef(null);
    const playAnimation = useRef(true);
    const pages = { 
        "/Contact": contactRef,
        "/Skills": skillsRef,
        "/Projects": projectRef,
        "/": homeRef
    };
    const [ showPage, setShowPage ] = useState(currentHover);

    if(playAnimation.current){

        tl2.from(rootRef.current, { transform: "perspective(0vw) rotate(0) scale(1)", duration: 1});
        if(!show){
            tl2.reverse();
        }
        tl2.play();
        
    }
    useEffect(()=>{
        playAnimation.current = false;
        if(tl1.isActive()){
            tl1.totalProgress(1).kill()
        }
        tl1.fromTo(pages[showPage].current, {y: "0", opacity: 1}, {y: "-300px", opacity: 0, duration: 0.25});
        tl1.fromTo(pages[currentHover].current, {y: "-300px", opacity: 0}, {y: "0", opacity: 1, delay: 0.25});
        tl1.play();
        setShowPage(currentHover);
        return ()=>{
            
        }
    },[currentHover]);

    useEffect(()=>{
        playAnimation.current = !playAnimation.current;
    },[show]);
    return <div ref={rootRef} className={classes.root}>
        <div ref={homeRef} className={classes.child} ><HomeText /></div>
        <div ref={projectRef} className={classes.child}><Projects /></div>
        <div ref={skillsRef} className={classes.child}><Skills /></div>
        <div ref={contactRef} className={classes.child}><Contact /></div>
    </div>
}