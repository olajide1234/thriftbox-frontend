import React from 'react';
import PropTypes from 'prop-types';
import { reducer } from './reducers/reducer';
import { CURRENT_USER } from './actions/actionTypes';

export const Store = React.createContext();

const initialState = {
  episodes: [],
  user: {}
};


export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  if (user && token) {
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
