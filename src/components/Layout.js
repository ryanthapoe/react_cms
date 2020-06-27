import React from 'react';

import { Route } from "react-router-dom";

// Components
import Sidenav from "./Sidenav";
import Content from "./Content";

// Styles
import useStyles from "../styles";

const Layout = ({menus, addMenuHandler, editMenuHandler, deleteMenuHandler, users, addUsersHandler, editUserHandler, deleteUserHandler, logout}) => {
  
  // Styles
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Sidenav menus={menus}/>
        <Route path='/' component={
          () => 
            <Content 
              menus={menus} 
              addMenu={addMenuHandler}
              editMenu={editMenuHandler}
              deleteMenu={deleteMenuHandler}

              user={users} 
              addUser={addUsersHandler} 
              editUser={editUserHandler} 
              deleteUser={deleteUserHandler}

              logout={logout}
            />} 
        />
      </div>
  )
}

export default Layout;