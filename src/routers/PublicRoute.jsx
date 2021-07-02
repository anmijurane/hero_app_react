import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PublicRoute({ isAuthenticate, component: Component, ...rest }) {
  return (
    <Route
      { ...rest }
      render={ ( props ) => (
        (isAuthenticate)
          ? ( <Redirect to='/' /> )
          : ( <Component {...props} /> )
      )}
    />
  )
}
