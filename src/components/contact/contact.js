import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import cyan from '@material-ui/core/colors/cyan';
import { style } from 'typestyle';

const defaultStyle = style({
  width: "40vw",
  margin: " 0 auto",
  display: "flex",
  flexDirection: "column",
  opacity: 0.8,
  $nest: {
    "h1": {
      alignSelf: "center"
    }
  }
});


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const styles = theme => ({
  root: {
    width: '90%',
    color: theme.palette.secondary
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  MuiStepIcon:{
    root:{
      color: cyan
    },
    active:{
      color: cyan
    }
  }
});

function getSteps() {
  return ['Enter your name', 'Enter email', 'Enter subject', 'Enter your message'];
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    name: "",
    email: "",
    message: "",
    subject: "",
    error: true
  };

  handleNext = () => {
    this.setState(state => ({
      error: true,
      activeStep: state.activeStep + 1,
    }));

  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
      error: false
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      name: "",
      email: "",
      message: "",
      subject: "",
      error: true
    });
  };
  handleChange = (type, e) =>{
    let value = e.target.value;
    this.setState({
      [type] : value
    }, ()=>{
      if(value.length === 0){
        this.setState({
          error: true
        });
      }
     switch (type){
       case "name":
          let err = value.length >16 || value.length === 0? true: false;
            this.setState({
              error: err
            })
          break;
       case "email":
            let test; 
            if(value.length === 0){
              test = false;
            } else {
              test = this.validateEmail(value);
            }
            this.setState({
                error: !test
            });
            break;

        default:
          this.setState({error: false});
          break;
     }
    });
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  getStepContent(step) {
    switch (step) {
      case 0:
        return (<TextField
        autoComplete="off"
        fullWidth
        id="formFieldName"
        label="name"
        name="name"
        className={this.props.classes.textField}
        value={this.state.name}
        error={this.state.error}
        onChange={this.handleChange.bind(this, "name")} 
        type="text" />)
      case 1:
      return (<TextField
        autoComplete="off"
        fullWidth
        id="formFieldEmail"
        name="email"
        label="email"
        className={this.props.classes.textField}
        value={this.state.email}
        error={this.state.error}
        onChange={this.handleChange.bind(this, "email")} 
        type="text" />)
      case 2:
        return (<TextField
          autoComplete="off"
          fullWidth
          id="subject"
          name="subject"
          label="Subject"
          className={this.props.classes.textField}
          value={this.state.subject}
          error={this.state.error}
          onChange={this.handleChange.bind(this, "subject")} 
          type="text" /> )
      case 3:
        return (<TextField
          fullWidth
          id="message"
          label="message"
          name="message"
          multiline={true}
          rows="2"
          rowMax="4"
          value={this.state.message}
          onChange={this.handleChange.bind(this, "message")}
          className={this.props.classes.textField}/>)
      default:
        return 'Send your message: ';
    }
  }
  
  handleButton = (step) => {
    return false;
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.handleReset())
      .catch(error => alert(error));
    e.preventDefault();
  }
  
  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={defaultStyle}>
      <h1>Contact me</h1>
      
      <form onSubmit ={this.handleSubmit}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {this.getStepContent(index)}
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        disabled={this.state.error}
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Thanks for contacting me - send message</Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Send
            </Button>
           </Paper>
        )}
      </form>
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
