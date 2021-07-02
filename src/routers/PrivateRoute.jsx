import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({
  isAuthenticate,
  component: Component,
  ...rest 
}) {

  localStorage.setItem(
    'lastLocation',
    `${location?.pathname}${location?.search}`
  );

  return (
    <Route
      { ...rest }
      render={
        (props) => (
          (isAuthenticate)
            ? (<Component { ...props } />)
            : (<Redirect to='/login' />)
        )
      }
    />
  )
}
