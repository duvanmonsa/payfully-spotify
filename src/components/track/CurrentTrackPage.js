import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as trackActions from "../../actions/trackAction";
import  {loadCurrentTrack} from "../../actions/trackAction";

class CurrentTrackPage extends React.Component {

  componentDidMount() {
    this.props.actions.loadCurrentTrack();
  }

  render() {
    let time = new Date(this.props.track.duration_ms);
    let minutes = time.getMinutes()+':'+time.getSeconds();
    if(this.props.track != false)
    {
      return (
        <div>
          <h1>Current Track</h1>

          <img src={this.props.track.album.images[0].url} alt="track image" width="300" class="img-thumbnail"/>
          <h2>Album:</h2>{this.props.track.album.name}<br/>
          <h2>Artist:</h2>{this.props.track.artists[0].name}<br/>
          <h2>Name:</h2>{this.props.track.name}<br/>
          <h2>Duration:</h2>{minutes}<br/>

        </div>
      );

    }

    return(
      <div>
        <h1>You are not listen to music.</h1>
      </div>
    );

  }

  componentWillReceiveProps(nextProps) {
    this.setState({track: nextProps.track});
  }

}


CurrentTrackPage.propTypes = {
  actions: PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps) {

  return {
    track: state.track
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(trackActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrackPage);
