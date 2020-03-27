import React, { useEffect, useState } from "react";
import Project from './project';
import { connect } from 'react-redux';
import ProjectSectionTags from './tags/projectSectionTags';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchProjects, creators as projectActions } from '../../projectsDuck/projectsDuck';
import { types as projectTypes } from '../../projectsDuck/projectsDuck';

const mapStateToProps = (store) =>{
    return{
        projects: store.projects.projects,
        filterTags: store.projects.filterTags,
        fetching: store.appConfig.fetching
    }
}

const mapDispatchToProps = {
    fetchProjects: fetchProjects,
    addProjectsToStore: projectActions.addProjectsToStore,
    filterProjects: projectActions.filterProjects
}


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
        overflow: "auto"
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
    const classes = styles();
    const setProjects = () =>{
        props.fetchProjects().then((data)=>{
            if(data.type ===projectTypes.FETCH_PROJECTS_OK){
                props.addProjectsToStore(data.payload); 
            }
        });
    }
    useEffect(()=>{
        setProjects();
        setFetching(props.fetching);
    },[])

    const getAllTags =()=>{
        var tags = []; 
        props.projects.map((project)=>{
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
        if(props.projects.length !== 0){
            tags = getAllTags();
            var projectsToRender = props.projects.map((project, i)=>{
                if(props.filterTags.length === 0){
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
                    if(props.filterTags.indexOf(tag)!==-1){
                        counter++;
                    }
                });
                if(counter === props.filterTags.length){
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
        <div className={classes.root} >
            <Typography className={classes.h1} variant="h2">My recent work<span>.</span></Typography>
            <div>
            <ProjectSectionTags filterTags = {props.filterTags} filterProjects={props.filterProjects} tags = {tags} />
            </div>
            <FlipMove className={classes.projects} duration={500} easing="ease-out">
            {renderDiv}
            </FlipMove>
        </div>
    );
}

Projects.propTypes={
    className: PropTypes.string,
    projects: PropTypes.array.isRequired,
    addProjectsToStore: PropTypes.func.isRequired,
    fetchProjects: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);