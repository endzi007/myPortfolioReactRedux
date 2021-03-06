import React from "react";
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      chip: {
        "& $svg":{
            color: theme.palette.primary.light
        },
        fontSize: "0.5rem",
        padding: "2px",
        margin: "3px"
      },
      active: {
          backgroundColor: `${theme.palette.primary.dark}!important`},

}));


const ProjectSectionTags = (props)=> {

        const classes = styles();
        var tags = props.tags.map((tag, i)=>{
            if(props.filterTags.indexOf(tag)!==-1){
                return <Chip component="p" key={tag} label={tag} onDelete={()=>{props.filterProjects(tag)}} className={`${classes.chip} ${classes.active}`} />               
            }
            return <Chip deleteIcon={<Add />} className={classes.chip} label={tag} onDelete={()=>{props.filterProjects(tag)}} key={tag+"_"+i} />
        });
        return(
            <div style={{padding: "12px", display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap"}}>
                {tags}
            </div>
        );

}


export default ProjectSectionTags;