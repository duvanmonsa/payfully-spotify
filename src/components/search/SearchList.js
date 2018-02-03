import React, {PropTypes} from "react";
import SearchListRow from "./SearchListRow";

const SearchList = ({searches}) => {
  return (
    <div>
      {searches.length === 0 ? (
        <div>No results</div>
      ) : (
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
      )}
    </div>
  );

};

// SearchList.propTypes = {
//
//   searches: PropTypes.array.isRequired
// };

export default SearchList;
