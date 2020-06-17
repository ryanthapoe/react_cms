import React from 'react';
import {useLocation} from 'react-router-dom';

// Import Material Component
import {AppBar, Toolbar, Button, InputBase } from '@material-ui/core';
import {AddIcon} from '@material-ui/icons/Add';

// CSS
import useStyles from '../../styles';

const TopNav = (props) => {
  const classes = useStyles();

  const location = useLocation();
  let menu = {};

  if(location.pathname === '/' || !location.pathname){
    menu.children = [];
  } else {
    const temp = props.menus.filter(menuTemp => {
      if(menuTemp.link == location.pathname){
        return menuTemp;
      } else {
        return {
          children : []
        }
      }
    });
    menu = temp[0];
  }

  return (
    <AppBar position="fixed" className={classes.subNav}>
      <Toolbar>
        { 
        menu.children.length > 0 ? menu.children.map((child) => {
            return (
              <Button color="inherit" key={child.id}>{child.text}</Button>
            )
          }) : null
        }
      </Toolbar>
    </AppBar>
  )
}

export default TopNav;