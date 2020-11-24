import React from 'react';
import Button from '@material-ui/core/Button';
import * as styles from './Header.styles';

interface HeaderProps {
  /*
   * Custom text
   *
   * **/
  text: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const text = props.text || 'I’m a header';
  return (
    <>
      <div>{text}</div>
        <Button
        className={styles.button}
        variant="contained"
        color="primary">
        I’m a button
        </Button>
    </>
  );
};
