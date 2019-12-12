import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import SignedInSidenav from "./SignedInSidenav";
import SignedoutSidenav from "./SignedoutSidenav";
import M from "materialize-css";

const Navbar = props => {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});

  const { auth, profile, notifications } = props;
  const links = auth.uid ? (
    <SignedInLinks
      profile={profile}
      auth={auth}
      notifications={notifications}
    />
  ) : (
    <SignedOutLinks />
  );

  const sideBar = auth.uid ? (
    <SignedInSidenav profile={profile} auth={auth} />
  ) : (
    <SignedoutSidenav />
  );

  return (
    <nav className="nav-wrapper grey darken-3 nav-property">
      <div className="container">
        <Link
          to="/"
          className="brand-logo brand-text blue-text text-lighten-3 bold"
        >
          .profolio
        </Link>
        <div className="hide-on-med-and-down">{links}</div>
      </div>

      {sideBar}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      { collection: "notifications", limit: 6, orderBy: ["time", "desc"] }
    ];
  })
)(Navbar);
