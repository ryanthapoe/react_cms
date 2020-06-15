import React, {useState} from 'react';
import { FormControl, TextField, IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import useStyles from '../../styles';

const User = (props) => {
  const classes = useStyles();
  const {users} = props;

  const [newUser, setNewUser] = useState('');

  const onChangeHandler = (e) => {
    setNewUser(e.target.value);
  }

  const addUserHandler = (e) => {
    e.preventDefault();
    const index = users[users.length-1].id + 1;

    const User = {
      id: index,
      name: newUser,
      role: 1
    }

    props.addUser(User)
    
    setNewUser('');
  }

  return (
    <div>
      <FormControl>
      <TextField id="standard-basic" label="Tambah User" value={newUser} onChange={onChangeHandler} InputProps={{
              endAdornment: 
              (<InputAdornment position="end">
                <IconButton aria-label="add" size='small' onClick={addUserHandler}>
                  <AddIcon fontSize="default"/>
                </IconButton>
              </InputAdornment>)
            }}/>
      </FormControl>
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nama</TableCell>
              <TableCell align="center">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.role === 0 ? "Admin" : "Staff"}</TableCell>
              </TableRow>
            )
          })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default User;