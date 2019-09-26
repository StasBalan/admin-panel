import React from 'react';

import { Typography } from '@material-ui/core';

import './TextFieldStyle.css';

const TextField = ({ label, placeholder, type, onChange }) => (
  <>
    {
      label &&
      <Typography>
        <span className='label'>{label}</span>
      </Typography> 
    }
    <input
      className='input'
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  </>
);

export default TextField;
