import React from 'react';
import { NavLink } from 'react-router-dom';
import '../navigation/navigation.css'
import './footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <nav className='footer-navigation navigation'>
            <div className='navigation-logo'>
                Ganiev <span className='navigation-logo__point'></span>
            </div>
            <ul className='nav-list'>
            <NavLink to ='/'>
                <li className='footer-nav-item nav-item'>
                    Projects
                </li>
            </NavLink>
            <NavLink to ='/api/blog'>
                <li className='footer-nav-item nav-item'>
                Blog
                </li>
            </NavLink>
            <NavLink to ='/api/about'>
                <li className='footer-nav-item nav-item'>
                    About
                </li>
            </NavLink>
            </ul>
        </nav>
    </footer>
  )

}

export default Footer;