import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css'

function Navigation() {
  return (
    <nav className='navigation'>
        <div className='navigation-logo'>
            Ganiev <span className='navigation-logo__point'></span>
        </div>
        <ul className='nav-list'>
        <NavLink to ='/'>
            <li className='nav-item'>
                Projects
            </li>
        </NavLink>
        <NavLink to ='/api/blog'>
            <li className='nav-item'>
             Blog
            </li>
        </NavLink>
        <NavLink to ='/api/about'>
            <li className='nav-item'>
                 About
            </li>
        </NavLink>
        </ul>
    </nav>
  );
}

export default Navigation;
