import { css } from '@emotion/css';

export const Box = css`
  max-width: 250px;
  border-radius: 5px;
`;

export const MenuList = (theme:any) => css`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  text-align: left;
  background-color: ${theme.palette.primary.main};
`;

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
