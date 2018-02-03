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
    this.setState({searches: Object.assign({}, nextProps.searches),searching: false});
  }

  updateSearchState(event) {
    return this.setState({term: event.target.value});
  }

  searchTerm(event) {
    event.preventDefault();
    this.setState({searching: true});
    this.props.actions.searchTerm(this.state.term);
  }
}

SearchPage.propTypes = {
  searches: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps) {

  return {
    searches: state.searches
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
