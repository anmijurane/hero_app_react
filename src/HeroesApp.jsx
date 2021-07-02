import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import authReducer from './auth/authReducer'
import AppRouter from './routers/AppRouter'

const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false };

export function HeroesApp() {

  const [state, dispatch] = useReducer(authReducer, {}, init);

  useEffect(()=>{
    localStorage.setItem('user', JSON.stringify( state ));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
