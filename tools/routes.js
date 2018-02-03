import Spotify from 'spotify-web-api-node';
import express from 'express';
import path from 'path';

const router = new express.Router();

// configure the express server
const CLIENT_ID = process.env.client_id;
const CLIENT_SECRET = process.env.client_secret;
const REDIRECT_URI = process.env.redirect_uri || 'http://localhost:3000/callback';
const STATE_KEY = 'spotify_auth_state';

const scopes = ['user-read-private', 'user-read-email', 'user-read-playback-state'];

const spotifyApi = new Spotify({
  clientId: '6a5d6680939d47d597bede80526d8859',
  clientSecret: '6091bb59aaaa4fcc9b054a6d76bd15ed',
  redirectUri: 'http://localhost:3000/callback'
});

/** Generates a random string containing numbers and letters of N characters */
const generateRandomString = N => (Math.random().toString(36) + Array(N).join('0')).slice(2, N + 2);


router.get('/login', (_, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});


router.get('/callback', (req, res) => {

  const {code, state} = req.query;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
  // first do state validation
  if (state === null || state !== storedState) {
    res.redirect('/error/state mismatch');
    // if the state is valid, get the authorization code and pass it on to the client
  } else {
    res.clearCookie(STATE_KEY);
    // Retrieve an access token and a refresh token
    spotifyApi.authorizationCodeGrant(code).then(data => {
      const {expires_in, access_token, refresh_token} = data.body;

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      // use the access token to access the Spotify Web API
      spotifyApi.getMe().then(({body}) => {
        console.log(body);
      });

      // we can also pass the token to the browser to make requests from there
      res.redirect(`/search/${access_token}/${refresh_token}`);
    }).catch(err => {
      res.redirect('/error/invalid token');
    });
  }
});


export default router;
