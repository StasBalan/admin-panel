import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Navbar from '../Navbar';

import './HeaderStyle.css';

const Header = () => (
  <div className='header'>
    <div className='wrapper'>
      <Navbar />
      <div className='header-logout'>
        Pochik Boy
        <ExitToAppIcon className='icon' />
      </div>
    </div>
  </div>
);

export default Header;
