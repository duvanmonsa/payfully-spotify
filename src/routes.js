import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import HomePage from "./components/security/HomePage";
import SearchPage from "./components/search/SearchPage";
import CurrentTrackPage from "./components/track/CurrentTrackPage";
import UserPage from "./components/security/UserPage";
import ErrorPage from "./components/security/ErrorPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="search" component={SearchPage}/>
    <Route path="search/:accessToken/:refreshToken" component={SearchPage}/>
    <Route path="track" component={CurrentTrackPage}/>
    <Route path="/user/:accessToken/:refreshToken" component={UserPage} />
    <Route path="/error/:errorMsg" component={ErrorPage} />
  </Route>
);
