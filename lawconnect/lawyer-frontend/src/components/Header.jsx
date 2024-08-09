import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <header className='header'>
        <nav className='navbar navbar-light bg-dark'>
          <ul className='navbar-nav ml-auto d-flex flex-row'>
            
        <a classname="navbar-brand" href="Home" style={{marginLeft:'30px'}}>Home</a>
        
        <a classname="navbar-brand" href="Home" style={{marginLeft:'30px'}}>About</a>
        </ul>

        <ul className='navbar-nav ml-auto d-flex flex-row'>
                        <li className='nav-item'>
                        <NavLink to="/signupLawyer" className="nav-link-dark" style={{marginRight:'20px'}}>Lawyer-SignUp</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/signupClient" className="nav-link-dark" style={{marginRight:'20px'}}>Client-SignUp</NavLink>
                    </li>
                    </ul>
            
        </nav>
      </header>
    </div>
  )
}

export default Header
