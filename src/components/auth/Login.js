import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import useStyle from '../../styles';

const Login = ({login}) => {

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const classes = useStyle();

  const history = useHistory();

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
  }

  const loginHandler = () => {
    const newCredential = form;
    if(login(newCredential)){
      history.push('/dashboard')
    } 
  }

  return (
    <Card className={classes.loginForm}>
      <CardContent>
      <div>
      <TextField name="username" label="Username" value={form.username} onChange={onChangeHandler} variant="outlined" style={{
        marginBottom:'1rem',
        width:'100%'
      }}/> 
      <TextField name="password" label="Password" type="password" value={form.password} onChange={onChangeHandler} variant="outlined" style={{
        marginBottom:'1rem',
        width:'100%'
      }}/>
      </div>
      </CardContent>
      <CardActions>
        <Button onClick={() => loginHandler()}>Login</Button>
      </CardActions>
    </Card>
  )
}

export default Login;