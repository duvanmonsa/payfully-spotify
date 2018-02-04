import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";
import LoadingDots from "./LoadingDots";
import {Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap";

const Header = ({loading, logged}) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/"><img src={require("../../images/logo.jpg")} width="20"/>
          </IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        {logged ? (
          <Nav>
            <li role="presentation">
              <Link to="/">Home </Link>
            </li>
            <li role="presentation" >
              <Link to="/search">Search </Link>
            </li>
            <li role="presentation">
              <Link to="/track">Current Track </Link>
            </li>
            <li role="presentation" className="">
              <a href="#"> {loading && <LoadingDots interval={100} dots={20}/>} </a>
            </li>

          </Nav>
        ) : (<div></div>)}
        <Nav pullRight>
          {logged ? (
              <NavItem href="/">
                Logout
              </NavItem>
            ) :
            (
              <NavItem href="/">
                Login
              </NavItem>
            )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired
};

export default Header;
