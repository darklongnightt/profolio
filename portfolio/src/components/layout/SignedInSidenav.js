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
      <a href="#!" data-target="signedIn" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>

      <ul id="signedIn" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={Background} alt="" />
            </div>
            <NavLink to="/manage_profile" className="waves-effect">
              <img
                alt=""
                className="circle"
                src={profile.photoUrl ? profile.photoUrl : Placeholder}
              />

              <span className="white-text name">
                {profile.firstName + " " + profile.lastName}
              </span>
              <span className="white-text email">{profile.email}</span>
            </NavLink>
          </div>
        </li>

        <li>
          <NavLink to="/dashboard" className="waves-effect">
            <i className="material-icons">dashboard</i>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/manage_profile" className="waves-effect">
            <i className="material-icons">person</i>
            Manage Profile
          </NavLink>
        </li>

        <li>
          <NavLink to={`/publishings/${auth.uid}`} className="waves-effect">
            <i className="material-icons">cloud</i>
            Published Portfolio
          </NavLink>
        </li>

        <div className="divider"></div>

        <li>
          <a href="#!" onClick={props.signOut} className="waves-effect">
            <i className="material-icons">exit_to_app</i>
            Sign Out
          </a>
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
