import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component}) => {
  return (
    <Route render={props => (
      localStorage.getItem('user')
      ? React.createElement(component, props)
      : <Redirect
          to={{
            pathname: '/login',
            state: {from: props.location}
          }}
        />
    )}/>
  )
}

export default PrivateRoute;
