import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage/index';
import UserDash from '../views/UserDash';
import SavingsDash from '../views/SavingsDash';
import LoansDash from '../views/LoansDash';
import PromoDash from '../views/PromoDash';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/dashboard" exact component={UserDash} />
    <Route path="/savings" exact component={SavingsDash} />
    <Route path="/loans" exact component={LoansDash} />
    <Route path="/promo" exact component={PromoDash} />
  </Switch>
);

export default Routes;
