import React, { Component } from 'react';
import { Match } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal } from "react-bootstrap";

const LargeProject = ({
    tags, 
    title,
    id,
    url, 
    show,
    toggleModalShow
})=>{
    return (
        <Modal show={show} onHide={toggleModalShow}>
            <Modal.Header> </Modal.Header>
                <Modal.Body>
                    <div className="largeProject"> 
                        <div className="LPHeader">{title}</div>
                        <div className="LPContent">
                            <div className="LPMain"></div>
                            <div className="LPLink">
                                <Button bsClass="btn-success btn-block"> Go to original project </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>)
}

function mapStateToProps(store){
    return {
        projects: store.projects
    }
}
export default connect (mapStateToProps)(LargeProject); 
