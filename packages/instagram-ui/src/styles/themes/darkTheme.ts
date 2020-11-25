import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#fffff',
    },
    default: {
      main: '#fafafa'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    defaultBorderColor: '#dbdbdb'
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
