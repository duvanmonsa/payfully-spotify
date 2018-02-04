import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import {PageHeader} from "react-bootstrap";

const SearchForm = ({term, onSearch, onChange, searching, errors}) => {
  return (

    <form className="form-search">

      <PageHeader>
        Search on Spotify
      </PageHeader>
      <TextInput
        name="term"
        label=""
        placeholder="Keyword"
        value={term}
        onChange={onChange}
        error={errors.title}/>

      <input
        type="submit"
        disabled={searching}
        value={searching ? 'Searching...' : 'Search'}
        className="btn btn-primary"
        onClick={onSearch}/>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searching: PropTypes.bool,
  errors: PropTypes.object,
  term: PropTypes.string.isRequired
};

export default SearchForm;
