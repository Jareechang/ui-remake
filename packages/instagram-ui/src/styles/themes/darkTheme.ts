import { createMuiTheme } from '@material-ui/core/styles';
import { common, red } from '@material-ui/core/colors';

// Create a theme instance.
const darkTheme = createMuiTheme({
  customColors: {
    border: {
      default: '#dbdbdb'
    }
  },
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      main: common.white,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: common.white,
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
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

export default darkTheme;
