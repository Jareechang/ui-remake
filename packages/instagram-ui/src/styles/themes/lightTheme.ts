import { createMuiTheme } from '@material-ui/core/styles';
import { common, red, grey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  customColors: {
    border: {
      default: '#dbdbdb'
    }
  },
  palette: {
    primary: {
      main: common.white,
    },
    secondary: {
      main: '#262626',
      light: grey[50]
    },
    error: {
      main: red.A400,
    },
    background: {
      default: common.white,
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)'
    }
  },
  typography: {
    body1: {
      fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
      margin: 0,
      lineHeight: 1.6,
      fontSize: '18px'
    }
  }
});

export default theme;
