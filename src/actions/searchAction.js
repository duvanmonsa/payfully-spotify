import * as types from  "./actionsTypes";
import {beginAjaxCall} from "./ajaxStatusAction";
import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

/** set the app's access and refresh tokens */
export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: types.SPOTIFY_TOKENS, accessToken, refreshToken };
}

export  function searchTerm(term) {
  return function (dispatch,getState) {

    dispatch(beginAjaxCall());
    // dispatch({ type: types.SEARCH_TERM_SUCCESS, searches: {id: 145, artist: 'asda', search: 'asd', album: 'asdasda'} });
    //query the songs
    spotifyApi.searchTracks(term, {limit: 10}).then(data => {
      dispatch({ type: types.SEARCH_TERM_SUCCESS, searches: data.tracks.items, total: data.tracks.total });
    }).catch(e => {
      dispatch({ type: types.SPOTIFY_ME_FAILURE, error: e });
    });

  };
}
