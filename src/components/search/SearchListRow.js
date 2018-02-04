import React, {PropTypes} from "react";


const SearchListRow = ({search}) => {
  // debugger;
  return (
    <tr>
      <td>{search.artists[0].name} </td>
      <td>{search.name} </td>
      <td>{search.album.name} </td>
    </tr>
  );

};

SearchListRow.propTypes = {
  search: PropTypes.object.isRequired
};


export default SearchListRow;
