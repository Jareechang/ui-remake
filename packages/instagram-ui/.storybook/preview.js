import React from 'react';
import Button from '@material-ui/core/Button';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import lightTheme from '../src/styles/themes/lightTheme';
import darkTheme from '../src/styles/themes/darkTheme';

import * as themes from '../src/styles/themes';

export const decorators = [
  (Story) => {
    const [isDarkTheme, toggleTheme] = React.useState(false);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Story />
            <div style={{ marginTop: '2em' }}>
              <Button
                variant="primary"
                onClick={_ => toggleTheme(!isDarkTheme)}>Toggle Theme</Button>
            </div>
          </ThemeProvider>
        </StylesProvider>
      </>
    )
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
