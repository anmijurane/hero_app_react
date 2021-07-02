import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import useSetTitle from '../../hooks/useSetTitle';
import { types } from '../../Types/types';
import { AiOutlineUser } from 'react-icons/ai';
import { FcHighPriority } from 'react-icons/fc';
import { RiLockPasswordLine } from 'react-icons/ri';

export function LoginScreen({ history }) {

  const [hasError, setHasError] = useState('');
  const [animate, setAnimate] = useState('');
  const { dispatch } = useContext(AuthContext);
  
  useSetTitle('Login');
  const lastLocation = localStorage.getItem('lastLocation');
  const handleLogin = (e) => {
    e.preventDefault();
    const [username, password] = e.target;
    if(password.value == 'passhero00') {
      dispatch({
        type: types.login,
        payload: { name : username.value }
      })
      setHasError(false);
      history.replace(lastLocation);
    } else {
      setHasError(true);
      setAnimate('animate__animated animate__shakeX');
      setTimeout(() => {
        setAnimate('');
      }, 1000);
    }
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
            <input className={`input ${hasError ? 'is-danger' : ''}`} type='text' placeholder='Text input' />
            <span className='icon is-small is-left'>
              <AiOutlineUser />
            </span>
            {hasError && (
              <span className={`icon is-small is-right ${animate}`}>
                <FcHighPriority />
              </span>
            )}
          </div>
          {hasError && (
          <p
            className={`help ${hasError ? 'is-danger' : ''} ${animate}`}
          >
            This username is valid
          </p>
          )}
        </div>
        <div className='field'>
          <label className='label'>Password</label>
          <div className='control has-icons-left has-icons-right'>
            <input className={`input ${hasError ? 'is-danger' : ''}`} type='password' placeholder='Password input' />
            <span className='icon is-small is-left'>
              <RiLockPasswordLine />
            </span>
            {hasError && (
              <span className={`icon is-small is-right ${animate}`}>
                <FcHighPriority />
              </span>
            )}
          </div>
          {hasError && (
            <p
              className={`help ${hasError ? 'is-danger' : ''} ${animate}`}
            >
              This email is invalid
            </p>
          )}
        </div>
        
        <div className='field is-grouped'>
          <div className='control'>
            <button type='submit' className='button is-link'>
              Iniciar Sesion
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
