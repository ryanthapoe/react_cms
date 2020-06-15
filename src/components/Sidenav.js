import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListSubheader, List, ListItem, ListItemText, IconButton, TextField, InputAdornment } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../styles';


function Sidenav(props) {
  const classes = useStyles();

  // State
  const [menuText, setMenuText] = useState('');

  const handleOnChange = (e) => {
    setMenuText(e.target.value);
  }

  const addMenuHandler = () => {
    const index = props.menus[props.menus.length-1].id + 1;

    const link = `/${menuText.replace(/\s/g, "-").toLowerCase()}`;
    
    const newMenu = {
      id : index,
      text : menuText,
      link,
      children: []
    }

    props.addMenu(newMenu);
    setMenuText('');
  }

  return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" className={classes.sideNavSubHeader}>
            <TextField id="standard-basic" label="Tambah Menu" onChange={handleOnChange} value={menuText} InputProps={{
              endAdornment: 
              (<InputAdornment position="end">
                <IconButton aria-label="add" onClick={addMenuHandler} size='small'>
                  <AddIcon fontSize="default"/>
                </IconButton>
              </InputAdornment>)
            }}/>
          </ListSubheader>
        }
        className={classes.sideNavList}
      >
        {
          props.menus.map((menu) => {
            return (
              <Link to={menu.link} key={menu.id}>
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
