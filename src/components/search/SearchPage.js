import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as searchActions from "../../actions/searchAction";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";
import {getMyInfo, setTokens} from "../../actions/userAction";

class SearchPage extends React.Component {

  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const {params} = this.props;
      const {accessToken, refreshToken} = params;
    if(accessToken && refreshToken) {
      this.props.actions.setTokens({accessToken, refreshToken});
    }
    else if(!this.props.logged) this.redirect();
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      searches: Object.assign({}, this.props.searches),
      errors: {},
      searching: false,
      term: ''
    };
    this.updateSearchState = this.updateSearchState.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
  }

  render() {
    return (
      <div>
        <SearchForm
          onChange={this.updateSearchState}
          onSearch={this.searchTerm}
          errors={this.state.errors}
          search={this.state.search}
          searching={this.state.searching}
          term={this.state.term}
        />
        <SearchList searches={this.props.searches}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.searches);
    this.setState({searches: nextProps.searches});
    this.setState({searching: false});
  }

  updateSearchState(event) {
    return this.setState({term: event.target.value});
  }

  searchTerm(event) {
    event.preventDefault();
    if(this.state.term) {
      this.setState({searching: true});
      this.props.actions.searchTerm(this.state.term);
    }
  }
  redirect() {
    this.context.router.push("/");
  }
}

SearchPage.propTypes = {
  // searches: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

};

SearchPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {

  return {
    searches: state.searches,
    logged:  state.user.accessToken != null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
