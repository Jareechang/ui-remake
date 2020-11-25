import { css } from '@emotion/css';

export const searchSection = theme => css`
  display: flex;
  height: ${theme.spacing(2)}px;
  border: 1px solid ${theme.palette.defaultBorderColor};
  padding: ${theme.spacing(0.75, 0.75)};
  margin: ${theme.spacing(0, 4)};
  background: ${theme.palette.default.main};
  path {
    fill : ${theme.palette.defaultBorderColor}
  }
`;

export const searchIcon = css`
  align-self: center;
  font-size: 1.1em;
`;

export const searchInput = theme => css`
  padding: ${theme.spacing(1, 1, 1, 1)};
  transition: ${theme.transitions.create('width')};
  font-size: 14px;
  width: '100%';
  ${theme.breakpoints.up('md')} {
    width: 20ch;
  }
`;

export const searchCloseIcon = theme => css`
  &:hover {
    background: none;
  }
  font-size: 0.85em;
  path {
    fill: #FFFF;
  }
`;

export const searchIconButton = theme => css`
  background: #c7c7c7;
  &:hover {
    background: #c7c7c7;
  }
  font-size: 0.85em;
  padding: ${theme.spacing(0.25)}px;
`;
