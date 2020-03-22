import { createMuiTheme } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

const theme = (props)=>createMuiTheme({
  palette: {
    type: props.paletteType,
    primary: {
        main: props.paletteType === "dark"? props.primaryColor: "#ff5851"
    },
    secondary: {
        main: props.paletteType === "dark"? "#18ffff": "#ff5851"
    },
    grey: {
        main: "#18ffff"
    },
    headers: {
        main: "#fff",
    },
    background: {
        default: props.paletteType === "dark"? "#181718": "#f8f8f8"
    }
  },
  overrides:{
      MuiSvgIcon:{
          root:{
              backgroundColor: cyan
          },
      },
      MuiStepIcon:{
          root:{
            color: cyan,
            active:{
                color: cyan
            }
          },
          active: {
            color: cyan, 
            fill: cyan
          },
          completed: {
              color: cyan,
              fill: cyan
          }
      }
  },
  typography: {
      fontFamily: "Montserrat, Georgia, Times, Times New Roman, serif",
      h1:{
        fontFamily: "Anton, Times, sans-serif"
      },
      h2:{
        fontFamily: "Anton, Times, sans-serif"
      },
      h3:{
        fontFamily: "Anton, Times, sans-serif"
      },
      h4:{
        fontFamily: "Anton, Times, sans-serif"
      },
      h5:{
        fontFamily: "Anton, Times, sans-serif"
      },
      h6:{
        fontFamily: "Anton, Times, sans-serif"
      },
      h7:{
        fontFamily: "Anton, Times, sans-serif"
      }
  },
  dimensions:{
      desktop: {
          margins: {
            top: "70px",
            left: "70px",
            right: "70px",
            bottom: "50px"
          }
      },
      mobile: {
        margins: {
          top: "70px",
          left: "5px",
          right: "5px",
          bottom: "5px"
        }
    }
  }

});

export default theme;