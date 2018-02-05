import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as trackActions from "../../actions/trackAction";
import {Grid, Col, Row, Panel, PageHeader} from "react-bootstrap";

class CurrentTrackPage extends React.Component {

  componentDidMount() {
    if(!this.props.logged) this.redirect();
    this.props.actions.loadCurrentTrack();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({track: nextProps.track});
  }
  redirect() {
    this.context.router.push("/");
  }
  render() {

    let time = new Date(this.props.track.duration_ms);
    let minutes = time.getMinutes() + ':' + time.getSeconds();
    if (this.props.track != false) {

      return (
        <div>
          <PageHeader>
            Current Track
          </PageHeader>
          <Grid>
            <Row className="show-grid">

              <Col md={5} >
                <img src={this.props.track.album.images[0].url} alt="track image" width="340" className="img-thumbnail"/>
              </Col>
              <Col md={5}>
                <Panel>
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">Album</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>{this.props.track.album.name}</Panel.Body>
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">Artist</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>{this.props.track.artists[0].name}</Panel.Body>
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">Name</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>{this.props.track.name}</Panel.Body>
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">Duration</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>{minutes}</Panel.Body>
                </Panel>
              </Col>
            </Row>
          </Grid>
        </div>

      );

    }

    return (
      <div>
        <PageHeader>
          You are not listening to music.
        </PageHeader>
      </div>
    );

  }





}


CurrentTrackPage.propTypes = {
  actions: PropTypes.object.isRequired,
  logged: PropTypes.bool.isRequired,
  track: PropTypes.object.isRequired

};

CurrentTrackPage.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {

  return {
    track: state.track,
    logged:  state.user.accessToken != null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(trackActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrackPage);
