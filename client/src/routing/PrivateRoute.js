import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect
            to={{
              pathname: '/login',
              state: isAuthenticated === null ? 'login' : 'logout'
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
