import * as React from 'react';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    customColors: {
      border: {
        default: React.CSSProperties['color']
      }
    }
  }
  interface ThemeOptions {
    customColors: {
      border: {
        default: React.CSSProperties['color']
      }
    }
  }
}

