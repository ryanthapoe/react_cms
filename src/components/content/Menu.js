import React, {useState} from 'react';
import { FormControl, TextField, IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel, Select, MenuItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

import useStyles from '../../styles';


const Menu = (props) => {
  const classes = useStyles();
  const {menus} = props;

  const [formState, setFormState] = useState('add');
  
  const childrenHandler = (children) => {
    const child = children.map((ch) => {
      return ch.text;
    })

    return child.toString();
  }

  return (
    <div>
      <FormControl>
      <TextField name="user" id="standard-basic" label="Tambah Menu"   InputProps={{
              endAdornment: 
              (<InputAdornment position="end">
                <IconButton aria-label="add" size='small'>
                  <AddIcon fontSize="default"/>
                </IconButton>
              </InputAdornment>)
            }}/>
      </FormControl>
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nama Menu</TableCell>
              <TableCell align="center">Slug</TableCell>
              <TableCell align="center">Level</TableCell>
              <TableCell align="center">Children</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              menus.map((menu) => {
                if(formState === `edit-${menu.id}`){
                  return null;
                } else {
                  return (
                    <TableRow key={menu.id}>
                      <TableCell align="center">
                        {menu.text}
                      </TableCell>
                      <TableCell align="center">
                        {menu.slug}
                      </TableCell>
                      <TableCell align="center">
                        {menu.parent === 0 ? 'parent' : 'children'}
                      </TableCell>
                      <TableCell align="center">
                        {
                          menu.children.length > 0 ?
                            (
                              childrenHandler(menu.children)
                            ) 
                            :
                            (
                              null
                            )
                        }
                      </TableCell>
                    </TableRow>
                  )
                }
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Menu;