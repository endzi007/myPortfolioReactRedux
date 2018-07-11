import React from "react";
import _ from 'lodash';
import { StyleSheet, css } from 'aphrodite/no-important';

var styles = StyleSheet.create({
    default: {
        color: "white",
        position: "absolute",
        padding: "4px",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#3c444b",
        transition: "all 500ms",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",                
    },
    button: {
        flexGrow: "1",
        borderRadius: "5px",
        alignSelf: "flex-end",
    },
    li:{
        padding: "3px 10px",
        border: "1px solid gray",
        borderRadius: "2px",
        margin: "4px",
        },
    ul: {
        display: "flex",
        flexWrap: "wrap",
        textDecoration: "none",
        justifyContent: "center",
        listStyleType: "none",
        padding: 0, 
    },
});

const HoverProject = ({
    opacity,
    tags,
    title,
    id,
    url,
    toggleModalShow,
}) => {
    var tagsLi = _.map(tags, (tag, i)=>{
        return <li className={css(styles.li)}key={`${tag}_${i}`}>{tag}</li>
    });
    return(
        <div className={css(styles.default)} style={{
            opacity: opacity
        }}>
            <h3>{title}</h3>
            <ul className={css(styles.ul)}>
                {tagsLi}
            </ul>
            <div className={`btn btn-success btn-block`} onClick={toggleModalShow}>View project</div>
        </div>
    );
}

export default HoverProject;