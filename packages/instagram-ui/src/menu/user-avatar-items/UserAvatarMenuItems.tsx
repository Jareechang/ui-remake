import React from 'react';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

import {
  SavedIcon,
  ProfileIcon,
  SettingsIcon,
  SwitchAccountsIcon
} from './icons';

import * as styles from './UserAvatarMenuItems.styles';

type IconTypes = 'profile'
  | 'saved'
  | 'settings'
  | 'switch-accounts';

interface UserAvatarMenuItemsProps {
  /*
   * create a subset of icon types as these need to be styled in a certain way
   * for this component
   *
   * **/
  iconType: IconTypes;
  /*
   *
   * Menu item display text
   *
   * **/
  text: string;
}

export const UserAvatarMenuItems: React.FC<UserAvatarMenuItemsProps> = (props) => {
  const theme = useTheme();
  const {
    iconType = '',
    text = ''
  } = props;

  //
  const renderIcon = React.useCallback(() => {
    let iconComponent = null;
    switch (iconType) {
      case 'profile':
        iconComponent = <ProfileIcon />;
        break;
      case 'saved':
        iconComponent = <SavedIcon />;
        break;
      case 'settings':
        iconComponent = <SettingsIcon />;
        break;
      case 'switch-accounts':
        iconComponent = <SwitchAccountsIcon />;
        break;
      default:
        // noop
        break;
    }
    return iconComponent;
  }, [iconType])

  return (
      <MenuItem
        className={styles.Menu(theme)}>
        {renderIcon()}
        <Typography
          className={styles.Body(theme)}
          variant="body1">
          {text}
        </Typography>
      </MenuItem>
  );
}
