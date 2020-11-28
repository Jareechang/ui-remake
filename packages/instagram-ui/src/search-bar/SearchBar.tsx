import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useTheme } from '@material-ui/core/styles';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';


import * as styles from './SearchBar.styles';

interface SearchBarProps {
  onClick(action: any): any;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const theme = useTheme();
  return (
    <div className={styles.searchSection(theme)}>
        <SearchIcon className={styles.searchIcon} />
        <InputBase
          className={styles.searchInput(theme)}
          placeholder="search"
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className={styles.searchIconButton(theme)}
                onClick={props.onClick}>
                <ClearIcon className={styles.searchCloseIcon(theme)} />
              </IconButton>
            </InputAdornment>
        } />
    </div>
  );
}

export default SearchBar;
