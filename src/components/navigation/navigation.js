import React from "react";
import { connect, useSelector } from 'react-redux';
import { withRouter, useLocation } from 'react-router-dom';
import { creators as actions } from '../../appConfig/appConfigDuck'
import { Typography, makeStyles } from '@material-ui/core/';
import { useRef } from "react";


const styles = makeStyles (theme =>{
    return {
    root: (props)=>({
        width: "50%",
        height: "100%",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        height: "100%",
        background: theme.palette.background.default,
        justifyContent: "space-between",
        transition: "all 0.7s cubic-bezier(0,.84,0,1.0)",
        transform: !props.showDrawer? `translateX(-${100}%)` : "translateX(0px)",
        position: "absolute",
        zIndex: 2
    }),
    navItemStyle: (props)=>({
        fontFamily: "'Anton', sans-serif",
        fontSize: "3vw",
        position: "relative",
        display: "grid",
        justifyContent:"start",
        marginLeft: "0.8vw",
        color: props.showSpan? theme.palette.primary.main : theme.palette.primary.main.contrastText,
        "& span":{
            display: "block",
            backgroundColor: theme.palette.background.default,
            height: "1em",
            width: "100%",
            marginTop: "-1.2em",
            marginLeft:"-0.8vw",
            transform: props.showSpan?"scaleX(1.2) scaleY(0.5)":"scaleX(0) scaleY(0.5)",
            transition: "all 0.5s cubic-bezier(1,0,0,1)",
            transformOrigin: "left",
            clipPath: "polygon(1% 0%, 6% 7%, 0% 10%, 6% 12%, 0% 13%, 6% 15%, 0% 17%, 46% 19%, 0% 22%, 8% 24%, 0% 25%, 98% 37%, 1% 36%, 4% 41%, 1% 43%, 6% 44%, 0% 46%, 6% 53%, 0% 56%, 14% 65%, 0% 66%, 6% 70%, 1% 74%, 7% 78%, 1% 79%, 7% 85%, 0% 85%, 16% 90%, 0% 100%, 30% 95%, 42% 96%, 51% 95%, 67% 96%, 74% 100%, 87% 95%, 100% 100%, 86% 86%, 100% 83%, 88% 80%, 100% 75%, 90% 75%, 100% 69%, 77% 66%, 99% 62%, 82% 57%, 99% 57%, 78% 46%, 100% 49%, 79% 39%, 100% 39%, 91% 30%, 100% 28%, 93% 23%, 100% 16%, 87% 12%, 99% 10%, 89% 8%, 99% 5%, 95% 4%, 100% 1%, 71% 3%, 56% 0%, 45% 5%, 35% 1%, 18% 4%);"
        },
        "&:hover>span":{
            transform: "scaleX(1.2) scaleY(0.5)"
        },
        "&:hover":{
            cursor: "pointer",
            opacity: "0.8"
        }
    }),
    info: {
        marginLeft: "1.2em",
        paddingBottom: "1.2em"

    }
    }
});

const NavItem = ({onMouseEnterHandler, handleClick, name, url})=>{
    const location = useLocation();
    let styleProps = {
        showSpan: false
    }
    if(location.pathname === url){
        styleProps.showSpan = true;
    } else {
        styleProps.showSpan = false;
    }
    let classes = styles({...styleProps})
    return (
    <Typography  variant="body1" onMouseEnter={()=>{onMouseEnterHandler(url)}} className={classes.navItemStyle} onClick={()=>{handleClick(url)}}> 
     {name} <span></span>
    </Typography>
    )
}

const Navigation = (props)=> {
    const myRef = useRef(null);
    const location = useLocation();
    const appInfos = useSelector((state)=>{
        return state.appInfoAndLinks;
    })
    const handleClick = (path) => {
        if (props.history.location.pathname === path){
            return;
        }
        props.startPageTransition(true);
        setTimeout(()=>{
            props.showDrawerAndCards(false);
            props.history.push(path);
            props.startPageTransition(false);
        }, props.appConfig.transitionDuration);
    }
     const handleShowDrawer = ()=>{
        props.currentHover(location.pathname);
        props.showDrawerAndCards(!props.appConfig.showDrawerAndCards);
    }

    const onMouseEnterHandler = (path)=>{
        setTimeout(()=>{
            props.currentHover(path);
        },0);
    }
        const  classes  = styles({showDrawer: props.appConfig.showDrawerAndCards});
        return(
            <div className={classes.root}>
                <div></div>
                <div>
                    <NavItem onMouseEnterHandler={onMouseEnterHandler} handleClick={handleClick} url="/" name="Home" />
                    <NavItem onMouseEnterHandler={onMouseEnterHandler} handleClick={handleClick} url="/Skills" name="Skills" />
                    <NavItem onMouseEnterHandler={onMouseEnterHandler} handleClick={handleClick} url="/Projects" name="Projects" />
                    <NavItem onMouseEnterHandler={onMouseEnterHandler} handleClick={handleClick} url="/Contact" name="Contact" />
                </div>
                <div className={classes.info}>
                <Typography variant="h7">{appInfos.contact.email}</Typography>
                </div>
            </div>
        );
}

function mapStateToProps (state){
    return {
        appConfig: state.appConfig
    }

}

const mapDispatchToProps = {
    startPageTransition: actions.startPageTransition,
    showDrawerAndCards: actions.showDrawerAndCards,
    currentHover: actions.currentHover
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));