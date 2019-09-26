import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Cities from './Cities';
import Main from './Main';

const Routes = () => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Route path='/cities' component={Cities} />
    <Route path='/' component={Main} />
  </Switch>
);

export default Routes;
