import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage/index';
import UserDash from '../views/UserDash';
import SavingsDash from '../views/SavingsDash';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/dashboard" exact component={UserDash} />
    <Route path="/savings" exact component={SavingsDash} />
  </Switch>
);

export default Routes;
