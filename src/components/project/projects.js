import React, { useEffect, useState } from "react";
import Project from './project';
import { useSelector, useDispatch } from 'react-redux';
import ProjectSectionTags from './tags/projectSectionTags';
import FlipMove from 'react-flip-move';
import { Typography, makeStyles } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchProjects, creators as projectActions } from '../../projectsDuck/projectsDuck';
import { types as projectTypes } from '../../projectsDuck/projectsDuck';
import Simplebar from 'simplebar';
import 'simplebar/dist/simplebar.css';

const styles = makeStyles(theme =>({
    h1: {
        color: theme.palette.primary.main.contrastText,
        margin: "0 auto",
        alignSelf: "center",
        justifySelf: "center",
        [theme.breakpoints.down("sm")]:{
            fontSize: "1.5rem"
        },
        "& span":{
            color: theme.palette.primary.main
        }
    },
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        fontSize: "0.5rem",
        marginTop: "4vh",
        //overflowY: "scroll",
    },
    projects: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(calc(250px + 1vw), 1fr))",
        gridGap: "20px",
        alignItems: "start",
        padding: "2vh 5vw"
    }, 
    circularProgress: {
        position: "absolute",
        left: "50%",
        top: "50%",
    }
}));

const Projects = (props)=> {
    const [ fetching, setFetching ] = useState(true);
    const { projects, filterTags } = useSelector(store=>store.projects);
    const storeFetching = useSelector(store=>store.appConfig.fetching);
    const dispatch = useDispatch();
    const classes = styles();
    const setProjects = () =>{
        dispatch(fetchProjects()).then((data)=>{
            if(data.type ===projectTypes.FETCH_PROJECTS_OK){
                dispatch(projectActions.addProjectsToStore(data.payload)); 
            }
        });
    }
    useEffect(()=>{
        setProjects();
        setFetching(storeFetching);
    },[])

    const getAllTags =()=>{
        var tags = []; 
        projects.map((project)=>{
            for(var i in project.tags){
                const tag = project.tags[i];
                if(tags.indexOf(tag) === -1){
                    tags.push(tag);
                }
            }
        });
        return tags;
    }

    var tags=[];
    if(projects.length !== 0){
        tags = getAllTags();
        var projectsToRender = projects.map((project, i)=>{
            if(filterTags.length === 0){
                return <Project key={"project"+i} 
                title={project.title}
                content= {project.content}
                image= {project.image}
                link={project.link}
                github={project.github}
                tags={project.tags}
                />;
    }

        var counter = 0;
        project.tags.map((tag)=>{
            if(filterTags.indexOf(tag)!==-1){
                counter++;
            }
        });
        if(counter === filterTags.length){
            return <Project itemHeight={200} key={"project"+i} 
            title={project.title}
            content= {project.content}
            image= {project.image}
            link={project.link}
            github={project.github}
            tags={project.tags}
        />
        }
    });
        }
        
    const renderDiv = fetching === true ? <CircularProgress className={classes.circularProgress} /> :  projectsToRender;
    return(
        <div className={classes.root + " scrollbar-redesign"} >
            <Typography className={classes.h1} variant="h2">My recent work<span>.</span></Typography>
            <div>
            <ProjectSectionTags filterTags = {filterTags} filterProjects={tag => dispatch(projectActions.filterProjects(tag))} tags = {tags} />
            </div>
            <FlipMove className={classes.projects} duration={500} easing="ease-out">
            {renderDiv}
            </FlipMove>
        </div>
    );
}


export default Projects;