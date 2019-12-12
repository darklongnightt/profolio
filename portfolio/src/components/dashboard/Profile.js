import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  const { profile } = props;

  if (profile) {
    return (
      <Link to="/manage_profile">
        <div className="dashboard-profile black-text">
          {profile.photoUrl && (
            <img
              className="circle wrap"
              width="150px"
              height="150px"
              src={profile.photoUrl}
            ></img>
          )}

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

          <p className="grey-text text-darken-1">
            <i>{profile.summary}</i>
          </p>
        </div>
      </Link>
    );
  } else {
    return <div> </div>;
  }
};

export default Profile;
