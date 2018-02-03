import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";
import LoadingDots from "./LoadingDots";

const Header = ({loading, logged}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active" >Home </IndexLink>
      {" | "}
      {logged && <Link to="/search" activeClassName="active" >Search </Link>}
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Header;
