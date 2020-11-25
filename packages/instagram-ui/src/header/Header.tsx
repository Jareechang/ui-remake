import React from 'react';
import { cx } from '@emotion/css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useTheme } from '@material-ui/core/styles';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { SearchBar } from '../search-bar';
import * as styles from './Header.styles';

interface HeaderProps {
  /*
   * Custom text
   *
   * **/
  text: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const [setShowCloseIcon, showCloseIcon] = React.useState(true);
  const text : string = props.text || 'I’m a header';
  const theme : string = useTheme();
  return (
    <>
      <AppBar position="static" className={styles.Appbar(theme)}>
        <Toolbar className={styles.Toolbar}>
          <div className={styles.Main}>
            <Typography variant="h6">
              Instagram
            </Typography>
          </div>
          <SearchBar
            onClick={_ => setShowCloseIcon(!showCloseIcon)}
          />
          <IconButton
            className={styles.IconRightButtons(theme)}>
            <HomeIcon
              className={cx(styles.CommonIcon(theme))}
            />
          </IconButton>
          <IconButton
            className={styles.IconRightButtons(theme)}>
            <SendIcon
              className={cx(styles.CommonIcon(theme))} />
          </IconButton>
          <IconButton
            className={styles.IconRightButtons(theme)}>
            <ExploreIcon
              className={cx(styles.CommonIcon(theme))} />
          </IconButton>
          <IconButton
            className={styles.IconRightButtons(theme)}>
            <FavoriteIcon
              className={cx(styles.CommonIcon(theme))} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
