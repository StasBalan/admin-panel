import React from  'react';

import { Link } from 'react-router-dom'

import './NavbarStyle.css';

const Navbar = () => (
  <nav className='menu'>
    <ul className='menu-items'>
      <li><Link className='menu-item' to='/'>Main</Link></li>
      <li><Link className='menu-item' to='/cities'>Cities</Link></li>
      <li><Link className='menu-item' to='/login'>Login</Link></li>
    </ul>
  </nav>
);

export default Navbar;
