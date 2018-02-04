import React, {Component,PropTypes} from 'react';

/**
 * Our error page
 * Displays the error
 */
 class ErrorPage extends Component {
  render() {
    // injected via react-router
    const {errorMsg} = this.props.params;
    return (
      <div className="error">
        <h2>An Error Occured</h2>
        <p>{errorMsg}</p>
      </div>
    );
  }
}

ErrorPage.propTypes = {
  params: PropTypes.object.isRequired

};

export default ErrorPage;
