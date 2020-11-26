import React from 'react';
import { cx } from '@emotion/css';

import PersonOutline from '@material-ui/icons/PersonOutline';
import { useTheme } from '@material-ui/core/styles';

import * as styles from './Icon.styles';

interface ProfileIcon {
}

const ProfileIcon: React.FC<ProfileIcon> = (props) => {
  const theme = useTheme();
  return (
    <PersonOutline
      color="secondary"
      className={cx(styles.CommonIcon(theme))}
    />
  );
}

export default ProfileIcon;
