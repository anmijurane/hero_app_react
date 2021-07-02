import React, { useCallback, useContext, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../Types/types';

export default function Navbar() {

  const { state, dispatch } = useContext( AuthContext );
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();

  const handleActive = () => {
    setIsActive( !isActive );
  }

  const handleLogOut = () => {
    dispatch({ type: types.logout })
    history.replace('/login');
  }

  return (
    <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href=''>
          <img src='http://cdn.anmijurane.space/logo/anmijurane-pos.png' alt='logo-anmijurane' />
        </a>

        <a 
          role='button'
          className={`navbar-burger ${isActive && 'is-active'}`}
          aria-label='menu'
          aria-expanded='false' 
          data-target='navbarBasicExample'
          onClick={handleActive}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className={`navbar-menu animate__animated ${isActive && 'animate__fadeIn is-active' }`}>
        <div className='navbar-start'>
          <NavLink exact to='/' activeClassName='is-active' className='navbar-item'>
            Home
          </NavLink>
          <NavLink exact to='/dc' activeClassName='is-active' className='navbar-item'>
            DC Comics
          </NavLink>
          <NavLink exact to='/marvel' activeClassName='is-active' className='navbar-item'>
            Marvel Comics
          </NavLink>
          <NavLink exact to='/search' activeClassName='is-active' className='navbar-item'>
            Search
          </NavLink>
        </div>

        <div className='navbar-end'>
          <span className="navbar-item has-text-primary">{ state.name }</span>
          <div className='navbar-item'>
            <div className='buttons'>
              <Link to='/' className='button is-link'>
                <strong>Profile</strong>
              </Link>
              <button
                className='button is-danger'
                onClick={handleLogOut}
              >
                LogOut
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}
