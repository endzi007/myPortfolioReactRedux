import React from 'react';
import { withStyles } from '@material-ui/core';
class ProgressBar extends React.Component {

       state={
            value: 1,
            barColor: "",
            backgroundColor: "",
            duration: 500,
            height: 10,
            label: "",
        }

    styles = {
        root: {
            width: "100%",
            position: "relative",
            height: "25px",
            marginTop: "8px",
            overflow: "hidden",
            ...this.props.root
        },
        background: {
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 0,
            borderRadius: "3px",
            backgroundColor: this.props.theme.palette.background.paper,
            ...this.props.background 
        },
        bar:{
            left: "0",
            width: "100%", 
            height: "98%",
            backgroundColor: this.props.theme.palette.primary.main,
            position: "absolute",
            zIndex: "1",
            transformOrigin: "left",
            transition: `transform ${this.state.duration}ms ease-in`,
            ...this.props.bar
        },
        label: {
            position: "absolute",
            top: "50%",
            paddingLeft: "10px",
            zIndex: 3,
            transform: "translateY(-50%)",
            display: "block",
            width: "150px",
            backgroundColor: this.props.theme.palette.primary.dark,
            padding: "6px 3px 3px 6px",
            ...this.props.label
        },
        value: {
            position: "absolute",
            top: "50%",
            right: "10px",
            zIndex: 3,
            transform: "translateY(-50%)",
            color: this.props.theme.palette.primary.light,
            ...this.props.value
        }
    }

    componentDidMount = ()=>{
        setTimeout(()=>{
            this.setState({
                value: this.props.value,
                label: this.props.label,
            });
        }, 0);
    }
    render(){
        return(
            <div style={{...this.styles.root}}>
                <div style={{...this.styles.label}}>{this.state.label}</div>
                <div style={{...this.styles.value}}> {`${this.state.value}%`} </div>
                <div>
                    <div style={{...this.styles.background}}></div>
                    <div style={{...this.styles.bar, 
                        transform: `scalex(${this.state.value/100})`,
                        }} ></div>
                </div>
            </div>
        );
    }

}

export default withStyles({}, {withTheme: true})(ProgressBar)