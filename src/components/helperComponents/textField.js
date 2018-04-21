import React from 'react';
import { style } from 'typestyle';

const defaultStyle = style({
    borderBottom: "1px solid gray",
    width: "100%"
});


const TextField = () =>{
    return([
        <input className={defaultStyle} type="text" />
    ]);
}


export default TextField; 