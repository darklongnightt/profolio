import React from "react";
import Placeholder from "../../img/profile_placeholder.png";

const ProfileSection = props => {
  const { profile } = props;

  if (profile) {
    return (
      <React.Fragment>
      <div className="hide-on-small-only">
        <div className="col m3">
          <img
            className="circle wrap"
            width="200px"
            height="200px"
            src={profile.photoUrl ? profile.photoUrl : Placeholder}
            alt="Profile"
          ></img>
        </div>

        <div className="col m9">
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
        </div>

        <div className="col m9">
          <p className="grey-text text-darken-1">
            <i>{profile.summary}</i>
          </p>
        </div>
      </div>

      <div className="hide-on-med-and-up center">
        <div className="col s12">
          <img
            className="circle center"
            width="200px"
            height="200px"
            src={profile.photoUrl ? profile.photoUrl : Placeholder}
            alt="Profile"
          ></img>
        </div>

        <div className="col s12">
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
        </div>

        <div className="col s12">
          <p className="grey-text text-darken-1">
            <i>{profile.summary}</i>
          </p>
        </div>
      </div>

      </React.Fragment>
    );
  } else {
    return <div> </div>;
  }
};

export default ProfileSection;
