import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as searchActions from "../../actions/searchAction";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

class SearchPage extends React.Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      searches: Object.assign({}, this.props.searches),
      errors: {},
      searching: false,
      term: '',
      clicked: false
    };
    this.updateSearchState = this.updateSearchState.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
  }

  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const {params} = this.props;
    const {accessToken, refreshToken} = params;
    if(accessToken && refreshToken) {
      this.props.actions.setTokens({accessToken, refreshToken});
    }
    else if(!this.props.logged) this.redirect();
  }



  searchTerm(event) {
    event.preventDefault();
    if(this.state.term) {
      this.setState({searching: true,clicked: true});
      this.props.actions.searchTerm(this.state.term);
    }
  }

  redirect() {
    this.context.router.push("/");
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
        <SearchList searches={this.props.searches} clicked={this.state.clicked}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({searches: nextProps.searches});
    this.setState({searching: false});
  }

  updateSearchState(event) {
    return this.setState({term: event.target.value});
  }


}

SearchPage.propTypes = {
  searches: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  logged: PropTypes.bool.isRequired

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
