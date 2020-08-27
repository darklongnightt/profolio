import React from "react";
import Placeholder from "../../img/profile_placeholder.png";
import M from "materialize-css";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { profile, auth } = props;
  const profileUrl = window.location.origin + "/publishings/" + auth.uid;

  const shortenSummary = (summary, max) => {
    if (summary.length > max) {
      return summary.substring(0, max) + "...";
    } else {
      return summary;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    M.toast({ html: "Copied to clipboard!" });
  };

  if (profile) {
    return (
      <div className="dashboard-profile">
        <Link to="/manage_profile" className="black-text">
          <img
            className="circle wrap summary-img"
            width="100px"
            height="100px"
            src={profile.photoUrl ? profile.photoUrl : Placeholder}
            alt="Profile"
          ></img>

          <h5>{profile.firstName + " " + profile.lastName}</h5>

          <p>
            <i className="fa title-icon fa-envelope" aria-hidden="true"></i>
            {profile.email}
          </p>

          {profile.industry && (
            <div>
              <i className="fa title-icon fa-industry" aria-hidden="true"></i>
              {profile.industry}
            </div>
          )}

          {profile.summary && (
            <p className="grey-text text-darken-1">
              <i>" {shortenSummary(profile.summary, 110)} "</i>
            </p>
          )}
        </Link>

        <div className="row">
          <div className="col m10 s10">
            <input value={profileUrl} disabled></input>
          </div>
          <div className="col m2 s2 input-btn">
            <button
              className="btn btn-small waves-effect waves-light blue lighten-2"
              onClick={handleCopy}
            >
              <i className="material-icons">content_copy</i>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div> </div>;
  }
};

export default Profile;
