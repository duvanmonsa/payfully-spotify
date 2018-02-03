import React, {PropTypes} from "react";



const SearchListRow =  ({search}) => {

  return (
    <tr>
      <td>{search.artist} </td>
      <td>{search.track} </td>
      <td>{search.album} </td>
    </tr>
  );

};

SearchListRow.propTypes = {
  search: PropTypes.object.isRequired
};



export default SearchListRow;
