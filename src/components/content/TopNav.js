import React from 'react';
import {useHistory} from 'react-router-dom';

// Import Material Component
import { AppBar, Toolbar, Button } from '@material-ui/core';

const TopNav = (props) => {

  const history = useHistory();

  const logoutHandler = () => {
    props.logout();
    history.push('/login')
  }
  return (
    <AppBar position="fixed" style={{
      width: '80%',
      maxHeight: '17vh'
    }}>
      <Toolbar>
        <section style={{
          width:'90%'
        }}>

        </section>
        <section style ={{
          textAlign: 'center',
          width: '10%',
        }}>
          <Button variant="contained" size="small" color="secondary" onClick={logoutHandler}>
            Log Out
          </Button>
        </section>
        
      </Toolbar>
    </AppBar>
  )
}

export default TopNav;