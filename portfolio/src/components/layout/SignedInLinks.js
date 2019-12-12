import React from "react";
import M from "materialize-css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import Notifications from "../dashboard/Notifications";

const SignedInLinks = props => {
  const { profile, auth, notifications } = props;
  var elems = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(elems, {});

  return (
    <div>
      <ul className="right">
        <li>
          <a className="dropdown-trigger" href="#!" data-target="notifications">
            <i className="fa fa-bell nav-icon" aria-hidden="true"></i>
            Notifications
          </a>
        </li>

        <ul id="notifications" className="dropdown-content">
          <Notifications notifications={notifications} auth={auth} />
        </ul>

        <li>
          <NavLink to={`/publishings/${auth.uid}`}>
            <i className="fa fa-globe nav-icon" aria-hidden="true"></i>
            Published Profile
          </NavLink>
        </li>

        <li>
          <a href="#!" onClick={props.signOut}>
            <i className="fa fa-sign-out nav-icon" aria-hidden="true"></i>
            Sign Out
          </a>
        </li>

        <li>
          <NavLink
            to="/manage_profile"
            className="btn btn-floating blue lighten-2"
          >
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
