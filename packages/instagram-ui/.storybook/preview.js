import React from "react";
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </StylesProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
