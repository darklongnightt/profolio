import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  const { profile } = props;

  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create_project">
            <i className="fa fa-product-hunt nav-icon" aria-hidden="true"></i>
            New Project
          </NavLink>
        </li>

        <li>
          <a href="# " onClick={props.signOut}>
            <i className="fa fa-sign-out nav-icon" aria-hidden="true"></i>
            Sign Out
          </a>
        </li>

        <li>
          <NavLink to="/" className="btn btn-floating blue lighten-2">
            {profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
