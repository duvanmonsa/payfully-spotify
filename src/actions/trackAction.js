import * as types from  "./actionsTypes";
import {beginAjaxCall} from "./ajaxStatusAction";
import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

export  function loadCurrentTrack() {
  return function (dispatch,getState) {

    dispatch(beginAjaxCall());
    spotifyApi.getMyCurrentPlayingTrack().then(data => {
      dispatch({ type: types.LOAD_CURRENT_SUCCESS, track: data});
    }).catch(e => {
      dispatch({ type: types.SPOTIFY_ME_FAILURE, error: e });
    });

  };
}
