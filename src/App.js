import React, { useState } from "react";
import "./App.css";

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button} from '@material-ui/core/';


// Components
import Sidenav from "./components/Sidenav";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'80%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();

  // Global State
  const [globalState, setGlobalState] = useState({
    user : {},
    menus : [{
     text: 'Kartu', 
    }, {
      text: 'Perso',
    }]
  });
  return (
    <div className="App">
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Sidenav menus = {globalState.menus}/>
    </div>
  )
}

export default App;
