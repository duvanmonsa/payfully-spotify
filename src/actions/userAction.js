import * as types from  "./actionsTypes";
import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();
import {beginAjaxCall} from "./ajaxStatusAction";

/* get the user's info from the /me api */
export function getMyInfo() {
  return dispatch => {

    dispatch(beginAjaxCall());
    dispatch({ type: types.SPOTIFY_ME_BEGIN});
    spotifyApi.getMe().then(data => {
      dispatch({ type: types.SPOTIFY_ME_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: types.SPOTIFY_ME_FAILURE, error: e });
    });
  };
}
