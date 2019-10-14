import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: RouteComponent, authed, ...rest }) {
  console.log(authed);
  return (    
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <RouteComponent {...props} /> 
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  );
}
export default PrivateRoute;
