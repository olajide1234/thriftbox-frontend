const dotenv = require('dotenv');
dotenv.config();
const BACKEND = process.env;

import { SWITCH_USER } from "./actionTypes";


export const loginUser = async (dispatch, payload) => {
  const response = await fetch(`${BACKEND}/users/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(payload),
  })
  let data = await response.json();

  if (data.success === false) {
    return data
  }

  if (data.success === true) {
    localStorage.setItem('token', data.data.token)
    localStorage.setItem('user', JSON.stringify(data.data.user))
    return data
  }
};

export const userDetails = async (dispatch, payload) => {
  const response = await fetch(`${BACKEND}/users/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(payload),
  })
  let data = await response.json();
  return data
};

export const switchUser = async (dispatch, auth) => dispatch({
  type: SWITCH_USER,
  payload: {
    level: auth
  }
});
