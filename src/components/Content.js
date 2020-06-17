import React from 'react';
import {useLocation, Route, Switch } from 'react-router-dom';
import useStyles from '../styles';
import {AppBar, Toolbar, Button} from '@material-ui/core/';
import Kartu from './content/kartu';
import Perso from './content/perso';
import Previledge from './content/previledge';
import NotFound from './content/NotFound';
import User from './content/User';

const Content = (props) => {
  const classes = useStyles();
  const location = useLocation();
  let menu = {};

  if(location.pathname !== '/' || !location.pathname){
    const temp = props.menus.filter(menuTemp => {
      if(menuTemp.link == location.pathname){
        return menuTemp;
      }
    });
    
    menu = temp[0];
  }

  return (
    <div>
      <AppBar position="fixed" className={classes.subNav}>
        <Toolbar>
          { 
          menu.children ? menu.children.map((child) => {
              return (
                <Button color="inherit" key={child.id}>{child.text}</Button>
              )
            }) : null
          }
        </Toolbar>
      </AppBar>

      <section className={classes.content}>
        <Switch>
            <Route exact path="/perso" component={Perso}/>
            <Route exact path="/kartu" component={Kartu}/>
            <Route exact path="/previledge" component={Previledge}/>
            <Route exact path="/user" component={() => <User users={props.user} addUser={props.addUser} editUser={props.editUser} deleteUser={props.deleteUser}/>}/>
            <Route component={NotFound} />
          </Switch>
      </section>

    </div>
  )
}

export default Content;