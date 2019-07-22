import { SWITCH_USER } from "./actionTypes";


export const loginUser = async (dispatch) => {
  const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
  const dataJSON = await data.json();
  return dispatch({
    type: 'LOGIN',
    payload: dataJSON._embedded.episodes
  });
};

export const switchUser = async (dispatch, auth) => dispatch({
  type: SWITCH_USER,
  payload: {
    level: auth
  }
});
