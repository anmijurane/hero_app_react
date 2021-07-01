import React from 'react'
import { Link } from 'react-router-dom'

export function LoginScreen({ history }) {

  useSetTitle('Login');

  const handleLogin = (e) => {
    e.preventDefault();
    history.replace('/home');
  }
  
  return (
    <>
      <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'></div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <Link to='/' className='button is-link'>
                <strong>Register</strong>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <form className='section' onSubmit={handleLogin}>

        <div className='field'>
          <label className='label'>Username or Email</label>
          <div className='control has-icons-left has-icons-right'>
            <input className='input is-success' type='text' placeholder='Text input' value='bulma' />
            <span className='icon is-small is-left'>
              <i className='fas fa-user'></i>
            </span>
            <span className='icon is-small is-right'>
              <i className='fas fa-check'></i>
            </span>
          </div>
          <p className='help is-success'>This username is valid</p>
        </div>
        <div className='field'>
          <label className='label'>Password</label>
          <div className='control has-icons-left has-icons-right'>
            <input className='input is-danger' type='password' placeholder='Password input' value='hello@' />
            <span className='icon is-small is-left'>
              <i className='fas fa-envelope'></i>
            </span>
            <span className='icon is-small is-right'>
              <i className='fas fa-exclamation-triangle'></i>
            </span>
          </div>
          <p className='help is-danger'>This email is invalid</p>
        </div>
        
        <div className='field is-grouped'>
          <div className='control'>
            <button className='button is-link'>
              Iniciar Sesion
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
