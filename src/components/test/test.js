import React, { Component } from 'react';
import { style } from 'typestyle';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

const testClass = style({
    marginTop: "150px",
    width: "100%",
    height: "100vh",
    backgroundColor: "red"
});

const subClass = style({
    width: "100vw",
    height: "100vh",
    backgroundColor: "green"
});


const subComponent1 = (props)=>{
    return(<div className={subClass}>subcomponent1</div>);
}

const subComponent2 = (props)=>{
    return(<div className={subClass}>subcomponent2</div>);
}
class Test extends Component {

    render(){
        console.log(this.props.location);
        return(
        <div className={testClass}>
            <div> 
                <Link to="/test/sublink1">Sublink1</Link>
                <Link to="/test/sublink1">Sublink2</Link>
            </div>
            <Router location={this.props.location}>

                <div>
                <Route exact path="/test/sublink1" component={subComponent1}/>
                <Route exact path="/test/sublink2" component={subComponent2}/>
                </div>
            </Router>
        </div>
        );
    }
}

export default Test;