import React, {
  ReactNode
} from 'react';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

import * as styles from './DropdownMenu.styles';

import {
  UserAvatarMenuItems,
  IconTypes
} from '../user-avatar-items';

interface MenuItemConfig {
  text: string;
  iconType: IconTypes;
}

interface DropdownMenuProps {
  items: Array<MenuItemConfig> | Array<any>;
}

const defaultProps: DropdownMenuProps = {
  items: [],
}

export const DropdownMenu: React.FC<DropdownMenuProps> = (
  props = defaultProps
) => {
  const theme = useTheme();

  const items : Array<MenuItemConfig> = props.items || [];

  const renderItems = React.useCallback(() : Array<ReactNode> => {
    return items.map(
      item => (
        <UserAvatarMenuItems
          key={item.text}
          text={item.text}
          iconType={item.iconType}
        />
      )
    );
  }, [props.items]);

  return (
    <Box className={styles.Box} boxShadow={1}>
      <MenuList className={styles.MenuList(theme)}>
        {renderItems()}
      </MenuList>
    </Box>
  );
}
