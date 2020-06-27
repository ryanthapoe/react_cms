import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Component
import TopNav from './content/TopNav';
import NotFound from './content/NotFound';
import User from './content/User';
import Menu from './content/Menu';

// CSS
import useStyles from '../styles';

const Content = (props) => {
  const classes = useStyles();
  return (
    <div>
      <TopNav menus={props.menus} logout={props.logout}/>
      <section className={classes.content}>
        <Switch>
            <Route exact path="/user" component={() => <User users={props.user} addUser={props.addUser} editUser={props.editUser} deleteUser={props.deleteUser}/>}/>
            <Route 
              exact path="/menu" 
              component={
                  () => <Menu 
                          menus={props.menus} 
                          addMenu={props.addMenu}
                          editMenu={props.editMenu}
                          deleteMenu={props.deleteMenu}
                        />
                  } 
              />
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <Route component={NotFound} />
          </Switch>
      </section>

    </div>
  )
}

export default Content;