import React, {PropTypes} from "react";
import  Header  from  "./common/Header";
import {connect} from "react-redux";

class App extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <Header
            loading={this.props.loading}
            logged={this.props.logged}
          />
          {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    logged:  state.user.accessToken != null
  }
}

export default connect(mapStateToProps)(App);