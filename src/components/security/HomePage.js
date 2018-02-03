import React from "react";
import {Link} from "react-router";

class HomePage extends  React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Login with your Spotify account.</h1>
        <a href="login" className="btn btn-primary btn-lg">Login </a>
      </div>

    );
  }
}

export default HomePage;
