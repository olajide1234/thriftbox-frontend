import React from 'react';
import PropTypes from 'prop-types';
import { reducer } from './reducers/reducer';
import { CURRENT_USER, SWITCH_USER } from './actions/actionTypes';

export const Store = React.createContext();

const initialState = {
  user: {},
  view: { level: 'non-admin' }
};


export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  if (
    (window.location.pathname === "/admindashboard" ||
    window.location.pathname === "/adminsavings" ||
    window.location.pathname === "/adminloans" ||
    window.location.pathname === "/adminpromo" ||
    window.location.pathname === "/adminaccounting" ||
    window.location.pathname === "/adminmembers")
    && state.view.level !== 'admin'
  ) {
    dispatch({
      type: SWITCH_USER,
      payload: {
        level: 'admin'
      }
    });
  }

  if (user && token && !(JSON.stringify(state.user) === user)) {
    dispatch({
      type: CURRENT_USER,
      payload: {
        currentUser: JSON.parse(user)
      }
    });
  }

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
