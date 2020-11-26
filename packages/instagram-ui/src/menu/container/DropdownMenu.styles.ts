import { css } from '@emotion/css';

export const Box = css`
  max-width: 250px;
  border-radius: 5px;
`;

export const MenuList = (theme:any) => css`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  background-color: ${theme.palette.primary.main};
  padding: 0;
`;
