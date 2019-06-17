
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';

import { render } from 'react-dom';
import './assets/css/azia';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

render(<App />, document.getElementById('app'));

