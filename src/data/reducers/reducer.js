import { LOGIN, CURRENT_USER } from "../actions/actionTypes";


export function reducer(state, action) {
  switch (action.type) {
    case LOGIN:

      return { ...state, episodes: action.payload };

    case CURRENT_USER:

      return { ...state, user: action.payload.currentUser };

    default:

      return state;
  }
}
