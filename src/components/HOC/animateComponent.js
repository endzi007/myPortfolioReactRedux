import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent){
    class Animated extends Component {
        render(){
            return(
                <div className="pageSection">
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }
    function mapStateToProps(state){
        return {
            appConfig: state.appConfig
        }
    }
    return connect(mapStateToProps)(Animated);
}