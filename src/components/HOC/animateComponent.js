import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent){
    class Animated extends Component {
        render(){
            return(
                 <WrappedComponent {...this.props} />
            );
        }
    }

    function mapStateToProps(state){
        return {
            pageTransition: state.pageTransition
        }
    }
    return connect(mapStateToProps)(Animated);
}