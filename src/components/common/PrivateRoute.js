import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
      <Route
        {...rest}
        render={props =>
          auth.isAuth === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    )
  };

export default PrivateRoute;