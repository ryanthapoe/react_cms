import React from 'react';

// Import Material Component
import { AppBar, Toolbar } from '@material-ui/core';

// CSS
import useStyles from '../../styles';

const TopNav = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.subNav}>
      <Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default TopNav;