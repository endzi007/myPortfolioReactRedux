import React from 'react';
import { withStyles } from '@material-ui/core/';


const defaultStyle = (delay) => {
    return {
        animation: `animationIn 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        animationDelay: `${delay}ms`
    }
}

const styles = theme =>({
    root: {
        fill: theme.palette.primary.main,
        width: 40, 
        height: 40,
        justifySelf: "center",
        alignSelf: "center"
    }
})

const SvgImage = ({name, show, classes})=>{

   
    switch (name){
        case "home":
            return(
                <svg className={classes.root} style={defaultStyle(100)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            );
        case "skills": 
            return(
                <svg className={classes.root} style={defaultStyle(200)}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
            );
        case "projects": 
            return(
                <svg className={classes.root} style={defaultStyle(300)}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
            );
        case "contact":
            return(
                <svg className={classes.root} style={defaultStyle(400)}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            );
        default: 
            return;
    }
}

export default withStyles(styles)(SvgImage);