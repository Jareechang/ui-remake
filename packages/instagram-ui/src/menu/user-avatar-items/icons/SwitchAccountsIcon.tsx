import React from 'react';
import { cx } from '@emotion/css';

import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import { useTheme } from '@material-ui/core/styles';

import * as styles from './Icon.styles';

interface SwitchAccountsIcon {
}

const SwitchAccountsIcon: React.FC<SwitchAccountsIcon> = (props) => {
  const theme = useTheme();
  return (
    <AutorenewOutlinedIcon
      className={cx(styles.CommonIcon(theme))}
    />
  );
}

export default SwitchAccountsIcon;
