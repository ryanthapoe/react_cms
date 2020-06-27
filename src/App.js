import React, { useState } from "react";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';

import Layout from './components/Layout';
import Login from './components/auth/Login';

function App() {
  // State
  const [users, setUsers] = useState([
    {
    id: 1,
    name: 'Ryantha',
    role: 0,
    password: 'admin',
    },
    {
      id: 2,
      name: '55555',
      role: 1,
      password: '55555'
    }
]);

  const [menus, setMenus] = useState([
    {
      id : 1,
      text: 'Management User',
      slug: '',
      parent: 0,
    },
    {
      id : 2,
      text: 'User',
      slug: '/user',
      parent: 1,
    },
    {
      id : 3,
      text: 'Menu',
      slug: '/menu',
      parent: 0,
    },
  ])

  const [auth, setAuth] = useState({
    isAuth : false
  })

  const addMenuHandler = (menu) => {
    setMenus([...menus, menu]);
  }

  const editMenuHandler = (editedMenu) => {
    const newMenu = menus.filter((menu) => {
      return editedMenu.id !== menu.id
    })
    setMenus([...newMenu, editedMenu])
  }
  
  const deleteMenuHandler = (deletedMenu) => {
    setMenus(menus.filter((menu) => {
      return menu.id !== deletedMenu.id
    }))
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

  const checkCredentials = (user) => {
    let newUser = users.filter((u) => u.name === user.username && u.password === user.password);
    if(newUser.length > 0){
      newUser = newUser[0];
      return addCredentials(newUser);
    } else {
      return {
        status : false
      };
    }
  }

  const addCredentials = (user) => {
    setAuth({
      isAuth: true,
      ...user
    });
    return {
      status : true
    };
  };

  const resetCredentials = () => {
    setAuth({
      isAuth: false
    })
  }

  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path='/login' component={() => <Login login={checkCredentials}/>} />
          <PrivateRoute
            auth = {auth}
            component={() => 
            <Layout 
              menus = {menus}
              addMenuHandler = {addMenuHandler}
              editMenuHandler = {editMenuHandler}
              deleteMenuHandler = {deleteMenuHandler}
              users = {users}
              addUsersHandler = {addUsersHandler}
              editUserHandler = {editUserHandler}
              deleteUserHandler = {deleteUserHandler}
              logout = {resetCredentials}
            />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
