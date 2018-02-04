
## Payfully Spotify Test

With this app you can search spotify tracks and see the current track you are listening on spotify.
to be able to do it you need to sing in with an Spotyfy account

## Folder Structure

Current project folder structure:

```
payfully-spotify/
  README.md
  node_modules/
  package.json
  .babelrc
  webpack.config.dev.js
  tools/
  src/
    actions/
    components/
      common/
      search/
      security/
      track/
      App.js
    reducers/
    store/
    styles/
    images/
    index.html
    index.js
    index.test.js
    routes.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode and launch  window in the browser.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the normal mode.<br>

### `npm test:watch`

Launches the test runner in the interactive watch mode.<br>

### `npm run lint`

You can see any lint error in the code.<br>

### `npm run build`


## Install Locally

```
  git clone https://github.com/duvanmonsa/payfully-spotify.git
  cd payfully-spotify
  npm install
  npm start

```
## Application Flow

### `1. login`
- First step is to sign in with you Spotify account.
  [https://localhost:3000/login]
![alt text](https://github.com/duvanmonsa/payfully-spotify/blob/master/login.png "Login")
### `2. search music`
- Second step is search for a keyword to find a list of tracks.
   [https://localhost:3000/search]
![alt text](https://github.com/duvanmonsa/payfully-spotify/blob/master/search.png "Search")
### `3. see current track`
- Third step will display the current track that are currently listing on Spotify.
   [https://localhost:3000/track]
![alt text](https://github.com/duvanmonsa/payfully-spotify/blob/master/track.png "Track")

## License
Released under the MIT License. Check LICENSE for more info.
