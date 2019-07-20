import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage/index';
import UserDash from '../views/UserDash';
import SavingsDash from '../views/SavingsDash';
import LoansDash from '../views/LoansDash';
import PromoDash from '../views/PromoDash';
import AdminDash from '../views/AdminDash';
import AdminSavings from '../views/AdminSavings';
import AdminLoans from '../views/AdminLoans';
import AdminPromo from '../views/AdminPromo';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/dashboard" exact component={UserDash} />
    <Route path="/savings" exact component={SavingsDash} />
    <Route path="/loans" exact component={LoansDash} />
    <Route path="/promo" exact component={PromoDash} />
    <Route path="/admindashboard" exact component={AdminDash} />
    <Route path="/adminsavings" exact component={AdminSavings} />
    <Route path="/adminloans" exact component={AdminLoans} />
    <Route path="/adminpromo" exact component={AdminPromo} />
  </Switch>
);

export default Routes;
