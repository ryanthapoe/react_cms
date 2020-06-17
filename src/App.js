import React, { useState } from "react";
import { Route } from "react-router-dom";

// Components
import Sidenav from "./components/Sidenav";
import Content from "./components/Content";

// Styles
import useStyles from "./styles";

function App() {
  // State
  const [users, setUsers] = useState([
    {
    id: 1,
    name: 'Ryantha',
    role: 0,
    },
    {
      id: 2,
      name: 'Ipran',
      role: 1,
    }
]);

  const [menus, setMenus] = useState([
    {
      id : 1,
      text: 'User',
      slug: '/user',
      parent: 0,
      children: [
        {
          id : 3,
          text: 'Delete',
          slug: '/del',
          parent: 0,
          children: [],
        },
        {
          id : 4,
          text: 'Add',
          slug: '/add',
          parent: 0,
          children: [],
        }
      ],
    },
    {
      id : 2,
      text: 'Menu',
      slug: '/menu',
      parent: 0,
      children: [],
    }
  ])

  const addMenusHandler = (menu) => {
    setMenus([...menus, menu]);
  }
  
  const addUsersHandler = (user) => {
    setUsers([...users, user]);
  }

  const editUserHandler = (editedUser) => {
    const newUser = users.filter((user) => {
      return user.id !== editedUser.id
    })
    setUsers([...newUser, editedUser]);
  }

  const deleteUserHandler = (id) => {
    setUsers(users.filter((user) => {
      return user.id !== id
    }))
  }

  // Styles
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <Sidenav menus={menus}/>
        <Route path='/' component={() => <Content menus={menus} user={users} addUser={addUsersHandler} editUser={editUserHandler} deleteUser={deleteUserHandler}/>} />
      </div>
    </div>
  )
}

export default App;
