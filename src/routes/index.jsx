import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage/index';
import UserDash from '../views/UserDash';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/dashboard" exact component={UserDash} />
  </Switch>
);

export default Routes;
