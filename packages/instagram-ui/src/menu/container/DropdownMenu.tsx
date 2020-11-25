import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

import * as styles from './DropdownMenu.styles';

interface DropdownMenuProps {
}

export const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const theme = useTheme();
  return (
    <Box className={styles.Box} boxShadow={1}>
      <MenuList className={styles.MenuList(theme)}>
        <MenuItem
          className={styles.Menu(theme)}>
          <Typography
            className={styles.Body(theme)}
            variant="body1">
            Profile
          </Typography>
        </MenuItem>
        <MenuItem
          className={styles.Menu(theme)}>
          <Typography
            className={styles.Body(theme)}
            variant="body1">
            My Account
          </Typography>
        </MenuItem>
        <MenuItem
          className={styles.Menu(theme)}>
          <Typography
            className={styles.Body(theme)}
            variant="body1">
            Logout
          </Typography>
        </MenuItem>
      </MenuList>
    </Box>
  );
}
