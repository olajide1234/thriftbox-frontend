
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import Routes from './routes/index';
import { StoreProvider } from './data/store';

import './assets/css/azia.css';


const App = () => (
  <Router>
    <Routes />
  </Router>
);

render(
  <StoreProvider>
    <App />
  </StoreProvider>, document.getElementById('app')
);
