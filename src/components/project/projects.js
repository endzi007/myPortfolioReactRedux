import React, { Component } from "react";
import Project from './project';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import ProjectSectionTags from './tags/projectSectionTags';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import { Typography, withStyles } from "@material-ui/core";

const mapStateToProps = (store) =>{
    return{
        projects: store.projects,
        filterTags: store.filterTags
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
        paddingTop: "60px",  
        display: "flex",
        flexDirection: "column"
    },
    projects: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gridGap: "20px",
        justifyItems: "center",
        alignItems: "start"
    }
});

class Projects extends Component {

    async setProjects (){
        let data = await this.props.fetchProjects();
        if(data.type === "FETCH_PROJECTS_OK"){
            this.props.addProjectsToStore(data.payload);
        }
    }
    componentDidMount(){
        this.setProjects();
    }
    getAllTags(){
        var tags = []; 
        this.props.projects.map((project)=>{
            for(var i in project.tags){
                const tag = project.tags[i];
                if(tags.indexOf(tag) === -1){
                    tags.push(tag);
                }
            }
        });
        return tags;
    }
    render(){
        const { classes } = this.props;
        var tags=[];
        if(this.props.projects.length !== 0){
            tags = this.getAllTags();
            var projectsToRender = this.props.projects.map((project, i)=>{
                if(this.props.filterTags.length === 0){
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
                    if(this.props.filterTags.indexOf(tag)!==-1){
                        counter++;
                    }
                });
                if(counter === this.props.filterTags.length){
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
        
        return(
            <div className={`pageSection ${classes.root}`} >
                <Typography className={classes.h1} variant="display1">My Work</Typography>
                <div>
                <ProjectSectionTags filterTags = {this.props.filterTags} filterProjects={this.props.filterProjects} tags = {tags} />
                </div>
                <FlipMove className={classes.projects} duration={500} easing="ease-out">
                    {projectsToRender}
                </FlipMove>
            </div>
        );
    }
}

Projects.propTypes={
    className: PropTypes.string,
    projects: PropTypes.array.isRequired,
    addProjectsToStore: PropTypes.func.isRequired,
    fetchProjects: PropTypes.func.isRequired
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Projects));