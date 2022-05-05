import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsSearchExpanded } from "../../../../redux/search/search.selectors";
import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { signOutStart } from "../../../../redux/user/user.actions";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import Logo from "../../../../static/assets/logo.png";

import SideNavContainer from "../../../sidenav/sidenav.component";
import NavLinks from "./nav/nav.component";

const NavBar = ({ isSearchExpanded, currentUser, signOutStart }) => {
  const history = useHistory();

  return (
    <Navbar
      className={`${
        isSearchExpanded ? "navbar-search-sm navbar-custom" : "navbar-custom"
      }`}
      variant="dark"
    >
      <Container>
        <SideNavContainer isSearchExpanded={isSearchExpanded} />
        <Navbar.Brand>
          <img
            className={`${isSearchExpanded ? "display-none logo" : "logo"}`}
            src={Logo}
            alt="logo"
            onClick={() => history.push("/")}
          />
        </Navbar.Brand>
        <NavLinks
          currentUser={currentUser}
          signOutStart={signOutStart}
          isSearchExpanded={isSearchExpanded}
        />
      </Container>
    </Navbar>
  );
};

const mapStateToProps = createStructuredSelector({
  isSearchExpanded: selectIsSearchExpanded,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
