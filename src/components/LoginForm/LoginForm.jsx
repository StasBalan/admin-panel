import React from 'react';

import { fieldList } from './LoginFormConfig';
import Form from '../../containers/Form';

import './LoginFormStyle.css';

const LoginForm = () => (
  <div className='login'>
    <Form fields={fieldList}/>
  </div>
);

export default LoginForm;
