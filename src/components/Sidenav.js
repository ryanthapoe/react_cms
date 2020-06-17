import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../styles';


function Sidenav(props) {
  const classes = useStyles();

  return (
      <List
        component="nav"
        className={classes.sideNavList}
      >
        {
          props.menus.map((menu) => {
            return (
              <Link to={menu.slug} key={menu.id}>
                <ListItem button>
                    <ListItemText primary={menu.text} />
                </ListItem>
              </Link>
            )
          })
        }
      </List>
  );
}

export default Sidenav;
