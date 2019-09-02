import { SWITCH_USER } from "./actionTypes";


export const loginUser = async (dispatch, payload) => {
  const response = await fetch('http://localhost:5000/users/signin', {
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
    dispatch({
      type: 'LOGIN',
      payload: data.data.user
    });
    return data
  }
};

export const switchUser = async (dispatch, auth) => dispatch({
  type: SWITCH_USER,
  payload: {
    level: auth
  }
});
