import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create_project">New Project</NavLink>
        </li>

        <li>
          <a href="# " onClick={props.signOut}>Sign Out</a>
        </li>

        <li>
          <NavLink to="/" className="btn btn-floating blue lighten-2">
            XK
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
