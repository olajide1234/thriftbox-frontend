

export const loginUser = async (dispatch) => {
  const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
  const dataJSON = await data.json();
  return dispatch({
    type: 'LOGIN',
    payload: dataJSON._embedded.episodes
  });
};
