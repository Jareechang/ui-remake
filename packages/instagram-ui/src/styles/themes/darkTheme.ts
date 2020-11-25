import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
      main: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    }
  },
  typography: {
    body1: {
      fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
      padding: '1em 0',
      margin: 0,
      lineHeight: 1.6,
      fontSize: '18px'
    }
  }
});

export default darkTheme;
