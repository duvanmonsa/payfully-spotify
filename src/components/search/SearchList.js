import React, {PropTypes} from "react";
import SearchListRow from "./SearchListRow";


const SearchList = ({searches}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Artist</th>
        <th>Track</th>
        <th>Album</th>
      </tr>
      </thead>
      <tbody>
      {searches.map(search =>
        <SearchListRow key={search.id} search={search}/>
      )}
      </tbody>
    </table>
  );

};

SearchList.propTypes = {

  searches: PropTypes.array.isRequired
};

export default SearchList;
