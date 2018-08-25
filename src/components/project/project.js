import React, { Component } from "react";
import HoverProject from './hoverProject';
import LargeProject from './largeProject';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const styles = (theme)=> {
  return {
    card: {
      height: "100%"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    chip: {
      margin: theme.spacing.unit/2,
      height: "25px",
      backgroundColor: theme.palette.primary.dark
    }
  };
}

class Project extends React.Component {
    constructor(){
        super();
        this.state = {
            opacity: 0,
            showModal: false
        }
    }


    render(){
        const { classes } = this.props;
        const tags = this.props.tags.map((tag,i)=><Chip className={classes.chip} key={`${tag}_${i}`} label={tag}/>);
        const githubButton = this.props.github === "" ? null :<Button size="small" color="primary" href={this.props.github}>Github</Button>; 
        const projectButton  = this.props.link === "" ? null :<Button size="small" color="primary" href={this.props.link}> Project site </Button>;
        return(
            <div>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={this.props.image}
                title={this.props.title}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2" color="primary">
                  {this.props.title}
                </Typography>
                <Typography component="p">
                  {this.props.content}
                </Typography>
                <div>
                  {tags}
                </div>
              </CardContent>
              <CardActions>
                {githubButton}
                {projectButton}
              </CardActions>
            </Card>
          </div>
        );
    }
}

Project.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  github: PropTypes.string,
  link: PropTypes.string.isRequired
}

export default withStyles(styles)(Project);