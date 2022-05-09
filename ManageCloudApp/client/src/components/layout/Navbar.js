import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions/auth";

function Navbar({ title, icon, auth, logout }) {
  const onLogout = () => {
    logout();
  };
  const authLink = (
    <React.Fragment>
      <li>Hello {auth.user && auth.user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fa fa-sign-out"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </React.Fragment>
  );

  const guestLink = (
    <React.Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>{auth.isAuthenticated ? authLink : guestLink}</ul>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};
Navbar.defaultProps = {
  title: "Cloud Contact",
  icon: "fa fa-id-card"
};
const mapStatesToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStatesToProps, { logout })(Navbar);
