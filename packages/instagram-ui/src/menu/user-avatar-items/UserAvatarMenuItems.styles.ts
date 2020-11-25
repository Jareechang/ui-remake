import { css } from '@emotion/css';

export const Menu = (theme: any) => css`
  padding: 1em 0;
`;

export const Body = (theme: any) => css`
  display: flex;
  align-items: start;
  font-size: 14px;
  color: ${theme.palette.secondary.main};
  padding: ${theme.spacing(0.5, 0)};
`;

export const IconBox = (theme: any) => css`
  padding: ${theme.spacing(2, 0)};
`