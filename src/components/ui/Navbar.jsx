import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive( !isActive );
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

      <div id='navbarBasicExample' className={`navbar-menu ${isActive && 'is-active'}`}>
        <div className='navbar-start'>
          <NavLink to='/dc' activeClassName='is-active' className='navbar-item'>
            DC
          </NavLink>

          <NavLink to='/marvel' activeClassName='is-active' className='navbar-item'>
            Marvel
          </NavLink>

        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <Link to='/' className='button is-link'>
                <strong>Profile</strong>
              </Link>
              <Link to='/Login' className='button is-danger'>
                LogOut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
