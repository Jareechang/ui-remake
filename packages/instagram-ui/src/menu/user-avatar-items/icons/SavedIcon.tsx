import React from 'react';
import { cx } from '@emotion/css';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useTheme } from '@material-ui/core/styles';

import * as styles from './Icon.styles';

interface SavedIcon {
}

const SavedIcon: React.FC<SavedIcon> = (props) => {
  const theme = useTheme();
  return (
    <BookmarkBorderIcon
      className={cx(styles.CommonIcon(theme))}
    />
  );
}

export default SavedIcon;
