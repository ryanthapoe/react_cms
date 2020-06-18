import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Collapse } from '@material-ui/core/';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import useStyles from '../styles';


function Sidenav(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const setChildMenu = (menu) => {
    // JIKA MENU TIDAK MEMPUNYAI ANAK
    if(!menu.children.length){
      return (
        <Link to={menu.slug} key={menu.id}>
          <ListItem button>
              <ListItemText primary={menu.text} />
          </ListItem>
        </Link>
      )
    // JIKA MENU PUNYA ANAK
    } else {
      return (
        <>
          <ListItem button onClick={handleClick} key={menu.id} >
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={menu.text} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menu.children.map((m) => {
                return setChildMenu(m);
              })}
            </List>
          </Collapse>
        </>
      )
    }
  }

  const menuLen = props.menus.length;

  

  return (
      <List
        component="nav"
        className={classes.sideNavList}
      >
        {
          props.menus.map((menu, i) => {
            return setChildMenu(menu);
          })
        }
      </List>
  );
}

export default Sidenav;
