import React, { useEffect, useState } from "react";
import Project from './project';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import ProjectSectionTags from './tags/projectSectionTags';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import { Typography, withStyles } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

const mapStateToProps = (store) =>{
    return{
        projects: store.projects,
        filterTags: store.filterTags,
        fetching: store.fetching
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actions, dispatch)
}


const styles = theme =>({
    h1: {
        color: theme.palette.primary.main,
        margin: "0 auto",
        alignSelf: "center",
        justifySelf: "center"
    },
    root: {
        width: "100vw",
        margin: "5vh auto 5vh auto",
        display: "flex",
        flexDirection: "column"
    },
    projects: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gridGap: "20px",
        justifyItems: "center",
        alignItems: "start"
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
            if(data.type ==="FETCH_PROJECTS_OK"){
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
            <Typography className={classes.h1} variant="display1">My Work</Typography>
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