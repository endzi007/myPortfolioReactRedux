import React from 'react';
import { style } from 'typestyle';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet({
    borderBottom: "1px solid gray",
    width: "100%"
});


const TextField = () =>{
    return([
        <input className={css(styles)} type="text" />
    ]);
}


export default TextField; 