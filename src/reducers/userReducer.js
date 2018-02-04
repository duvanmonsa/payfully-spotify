/*eslint-disable no-case-declarations*/
/*eslint-env es6*/
import * as types from "../actions/actionsTypes";
import initialState from "./initialState";


export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.SPOTIFY_TOKENS:

      const {accessToken, refreshToken} = action;
      return Object.assign({}, state, {accessToken, refreshToken});

    // set our loading property when the loading begins
    case types.SPOTIFY_ME_BEGIN:
      return Object.assign({}, state, {loading: true});

    // when we get the data merge it in
    case types.SPOTIFY_ME_SUCCESS:
      return Object.assign({}, state, action.data, {loading: false});

    // currently no failure state :(
    case types.SPOTIFY_ME_FAILURE:
      return state;

    default:
      return state;
  }
}
