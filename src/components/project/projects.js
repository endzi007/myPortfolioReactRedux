import React, { useEffect, useState } from "react";
import Project from './project';
import { connect } from 'react-redux';
import ProjectSectionTags from './tags/projectSectionTags';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import { Typography, withStyles } from "@material-ui/core";
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


const styles = theme =>({
    h1: {
        color: theme.palette.primary.main.contrastText,
        margin: "0 auto",
        alignSelf: "center",
        justifySelf: "center"
    },
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "50px"
    },
    projects: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridGap: "20px",
        justifyItems: "start",
        "& :nth-child(1)": {
            gridColumn: "1 / 3"
        }
    }, 
    circularProgress: {
        position: "absolute",
        left: "50%",
        top: "50%",
    }
});

const Projects = (props)=> {
    const [ fetching, setFetching ] = useState(true);
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
        const { classes } = props;
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
            <Typography className={classes.h1} variant="h2">My recent work.</Typography>
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


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Projects));