import React, {useState} from 'react';

import { 
  FormControl, 
  TextField, 
  IconButton, 
  InputAdornment, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  InputLabel, 
  Select, 
  MenuItem 
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

import useStyles from '../../styles';

const User = (props) => {
  const classes = useStyles();
  const {users} = props;

  const [newUser, setNewUser] = useState('');
  const [editedUser, setEditedUser] = useState('');
  const [editedRole, setEditedRole] = useState();
  const [formState, setFormState] = useState('add');

  const onChangeHandler = (e) => {
    if(e.target.name === 'user') {
      setNewUser(e.target.value);
    } else if(e.target.name === 'edit-user') {
      setEditedUser(e.target.value)
    } else if(e.target.name === 'edit-role') {
      setEditedRole(e.target.value)
    }
  }

  // Handler menambah user
  const addUserHandler = (e) => {
    e.preventDefault();
    let index;
    users.length > 0 ? 
    index = users[users.length-1].id + 1 :
    index = 1;

    const User = {
      id: index,
      name: newUser,
      role: 1
    }

    props.addUser(User)
    
    setNewUser('');
  }

  // Handler Mengupdate user
  const editFormHandler = (user) => {
    setFormState(`edit-${user.id}`);
    setEditedUser(user.name);
    setEditedRole(user.role);
  }

  const editUserHandler = (id) => {

    const User = {
      id,
      name: editedUser,
      role: editedRole
    }

    props.editUser(User);

    setFormState('add');
  }

  // Handler menghapus user
  const deleteUserHandler = (id) => {
    props.deleteUser(id);
  }

  return (
    <div>
      <FormControl>
      <TextField name="user" id="standard-basic" label="Tambah User" value={newUser} onChange={onChangeHandler} InputProps={{
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
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {users.map((user) => {
            if(formState === `edit-${user.id}`){
              return (
                <TableRow key={user.id}>
                  <TableCell align="left">
                    <FormControl>
                      <TextField id="standard-basic" label="Edit User" name="edit-user" onChange={onChangeHandler} value={editedUser}/>
                    </FormControl>
                  </TableCell>
          
                  <TableCell align="left">
                    <FormControl required>
                      <InputLabel id="label-role">Role</InputLabel>
                      <Select
                        labelId="label-role"
                        id="select-role"
                        name="edit-role"
                        value={editedRole}
                        onChange={onChangeHandler}
                      >
                        <MenuItem value={0}>Admin</MenuItem>
                        <MenuItem value={1}>Staff</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
          
                  <TableCell align="center">
                    <IconButton aria-label="add" size='small' color='primary' onClick={() => editUserHandler(user.id)}>
                      <CheckIcon fontSize="default"/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            }
            else {
              return (
                <TableRow key={user.id}>
                  <TableCell align="left">{user.name.length < 10 ? user.name : `${user.name.slice(0, 10)} ...`}</TableCell>
                  <TableCell align="left">{user.role === 0 ? "Admin" : "Staff"}</TableCell>
                  <TableCell align="center">
                    <IconButton aria-label="add" size='small' color='primary' onClick={() => editFormHandler(user)}>
                      <EditIcon fontSize="default"/>
                    </IconButton>
                    <IconButton aria-label="add" size='small' color='secondary' onClick={() => deleteUserHandler(user.id)}>
                      <DeleteIcon fontSize="default"/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            }
          })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default User;