import React from 'react';



export default class extends React.Component {

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
            padding: "0",
            position: "relative"
        },
        background: {
            width: "100%",
            height: "10px",
            position: "absolute",
            zIndex: 0,
            borderRadius: "3px" 
        },
        bar:{
            left: "0",
            width: "100%", 
            height: "8px",
            position: "absolute",
            zIndex: "1",
            borderRadius: "3px",
            transformOrigin: "left",
            transition: `transform ${this.state.duration}ms ease-in`
        },
        label: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "3px",
            ...this.props.labelStyle
        }
    }

    componentDidMount = ()=>{
        setTimeout(()=>{
            this.setState({
                value: this.props.value,
                label: this.props.label,
                backgroundColor: this.props.backgroundColor || "blue",
                barColor: this.props.barColor || "green"
            });
        }, 0);
    }
    render(){
        return(
            <div style={{...this.styles.root}}>
                <div style={{...this.styles.label}}>
                    <div> {this.state.label}</div>
                    <div> {`${this.state.value}%`} </div>
                </div>
                
                <div>
                    <div style={{
                        ...this.styles.background, 
                        backgroundColor: this.state.backgroundColor
                    }}></div>
                    <div style={{
                        ...this.styles.bar, 
                        transform: `scalex(${this.state.value/100})`,
                        backgroundColor: this.state.barColor,
                        border: `1px solid ${this.state.backgroundColor}`,
                        }} ></div>
                </div>
            </div>
        );
    }

}