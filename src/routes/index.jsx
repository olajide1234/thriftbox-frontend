import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage/index';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
  </Switch>
);

export default Routes;
