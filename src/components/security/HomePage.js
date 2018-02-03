import React from "react";
import {Link} from "react-router";

class HomePage extends  React.Component {
  render() {
    return (
      <div className="jumbotron">
        <p>Login with your Spotify account.</p>
        <a href="login" className="btn btn-primary btn-lg">Login </a>
      </div>

    );
  }
}

export default HomePage;
