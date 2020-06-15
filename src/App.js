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
      text: 'Kartu',
      link: '/kartu',
      children: [
        {
          id: 4,
          text: 'Anak Kartu',
          link: '/anak-kartu',
        }, 
        {
          id: 5,
          text: 'Anak Kartu2',
          link: '/anak-kartu2'
        }
      ],
    },
    {
      id : 2,
      text: 'Perso',
      link: '/perso',
      children: [
        {
          id: 6,
          text: 'Anak Perso',
          link: '/anak-perso'
        }, 
        {
          id: 7,
          text: 'Anak Perso2',
          link: '/anak-perso2'
        }
      ],
    },
    {
      id : 3,
      text: 'Previledge',
      link: '/previledge',
      children: [],
    },
    {
      id : 8,
      text: 'User',
      link: '/user',
      children: [],
    }
  ])

  const addMenusHandler = (menu) => {
    setMenus([...menus, menu]);
  }
  
  const addUsersHandler = (user) => {
    setUsers([...users, user]);
  }

  // Styles
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <Sidenav menus={menus} addMenu={addMenusHandler}/>
        <Route path='/' component={() => <Content menus={menus} user={users} addUser={addUsersHandler}/>} />
      </div>
    </div>
  )
}

export default App;
