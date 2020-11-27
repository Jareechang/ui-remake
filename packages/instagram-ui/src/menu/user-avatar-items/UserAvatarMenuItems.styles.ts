import { css } from '@emotion/css';
import { space } from 'styled-system';

export const MenuItem = (props: any) => css`
  justify-content: start;
  padding: ${props.theme.spacing(1, 0.5)};
  ${space(props)}
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
