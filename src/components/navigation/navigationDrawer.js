import React from 'react';
import { Drawer, MenuItem, RaisedButton, MuiThemeProvider  } from 'material-ui';

const NavigationDrawer = ({show, handleClick}) =>{
    return(
    <MuiThemeProvider>
        <Drawer open={show}>
                <MenuItem style={{display: "flex", flexDirection: "column"}}> Home </MenuItem>
                <MenuItem onClick={handleClick.bind(null, "/Skills")}>Skills</MenuItem>
                <MenuItem onClick={handleClick.bind(null, "/Projects")}>Projects</MenuItem>
                <MenuItem onClick={handleClick.bind(null, "/Contact")}>Contact</MenuItem>
        </Drawer>
    </MuiThemeProvider>
    );
}

export default NavigationDrawer;