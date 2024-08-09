import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='header'>
        <nav className='navbar navbar-dark bg-dark'>
        <a classname="navbar-brand" href="###" >Lawyer-Client Management System</a>

        <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <NavLink to="/signup" className="nav-link" style={{marginRight:'50px'}}>Register</NavLink>
                    </li>

                    </ul>
            
        </nav>
      </header>
    </div>
  )
}

export default Header
