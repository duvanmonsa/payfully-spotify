import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {Jumbotron,Button} from "react-bootstrap";

class HomePage extends React.Component {
  render() {
    return (
      <div>
      {this.props.logged ? (
          <Jumbotron>
            <h1>Welcome!</h1>
            <p>
              Here you can search easily on Spotify.
            </p>
            <p>
              <Link to="/search"><Button bsStyle="primary">Get Started </Button></Link>
            </p>
          </Jumbotron>
        ):(
      <div className="form-signin">
        <img className="mb-4" src={require('../../images/logo.jpg')} alt="" width="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <a href="login" className="btn btn-primary btn-lg login-button">Sign in </a>
      </div>)}
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    logged:  state.user.accessToken != null
  }
}

export default connect(mapStateToProps)(HomePage);
