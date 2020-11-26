import { css } from '@emotion/css';

export const button = css`
  padding: 1em 2em;
`;

export const Appbar = theme => css`
  box-shadow: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${theme.customColors.border.default};
`;

export const Main = css`
  display: flex;
  justify-content: start;
  flex: auto;
`;

export const Toolbar = css`
  max-width: 845px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const CommonIcon = theme => css`
  margin: ${theme.spacing(0, 1)};
  font-size: 1.4em;
`

export const IconRightButtons = theme => css`
  background: none;
  color: ${theme.customColors.border.default};
  &:hover {
    background: none;
    color: ${theme.palette.secondary.main};
  }
  font-size: 1.2em;
  padding: ${theme.spacing(1, 0)};

`
