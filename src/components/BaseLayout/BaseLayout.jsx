import React from 'react';

import Header from '../Header';

const BaseLayout = ({ children }) => (
  <div>
    <Header />
    <div className='wrapper'>
      { children }
    </div> 
  </div>
);

export default BaseLayout;
