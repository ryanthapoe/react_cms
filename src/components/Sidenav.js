import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ListSubheader, List, ListItem, ListItemText, IconButton} from '@material-ui/core/';
import {AddBox as AddBoxIcon} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '20%',
    backgroundColor: theme.palette.background.paper,
  },
  addMenuButton: {
    float:'right',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Sidenav(props) {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <span>Tambah Menu</span>
          <IconButton aria-label="add" className={classes.addMenuButton}>
            <AddBoxIcon fontSize="medium" />
          </IconButton>
        </ListSubheader>
      }
      className={classes.root}
    >
      {
        props.menus.map((menu) => {
          return (
            <ListItem button>
              <ListItemText primary={menu.text} />
            </ListItem>
          )
        })
      }
    </List>
  );
}
