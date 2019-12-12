import React from "react";
import Placeholder from "../../img/profile_placeholder.png";
import Background from "../../img/background.jpg";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";

const SignedInSidenav = props => {
  const { profile, auth } = props;
  return (
    <React.Fragment>
      <a href="#" data-target="signedOut" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>

      <ul id="signedOut" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={Background} />
            </div>
            <NavLink to="/register" className="waves-effect">
              <img
                className="circle"
                src={Placeholder}
              />

              <span className="white-text name">
                Welcome,
              </span>

              <span className="white-text email">
                New User
              </span>
            </NavLink>
          </div>
        </li>

        <li>
          <NavLink to="/register" className="waves-effect">
          <i className="material-icons">person_add</i>
            Register
          </NavLink>
        </li>

        <div className="divider"></div>

        <li>
          <NavLink to="/signin" className="waves-effect">
          <i className="material-icons">input</i>
            Sign In
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInSidenav);
