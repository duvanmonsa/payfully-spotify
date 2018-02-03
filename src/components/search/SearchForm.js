import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const SearchForm = ({term, onSearch, onChange, searching, errors}) => {
  return (
    <form>
      <h1>Search on Spotify</h1>
      <TextInput
        name="term"
        label="Term"
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
  errors: PropTypes.object
};

export default SearchForm;
