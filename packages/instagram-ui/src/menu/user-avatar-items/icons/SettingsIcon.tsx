import React from 'react';
import { cx } from '@emotion/css';

import MuiSettingsIcon from '@material-ui/icons/Settings';
import { useTheme } from '@material-ui/core/styles';

import * as styles from './Icon.styles';

interface SettingsIcon {
}

const SettingsIcon: React.FC<SettingsIcon> = (props) => {
  const theme = useTheme();
  return (
    <MuiSettingsIcon
      color="secondary"
      className={cx(styles.CommonIcon(theme))}
    />
  );
}

export default SettingsIcon;
