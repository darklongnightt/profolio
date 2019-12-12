import React from "react";

const ProfileSection = props => {
  const { profile } = props;

  if (profile) {
    return (
      <div>
        {profile.photoUrl && (
          <img
            className="circle wrap"
            width="200px"
            height="200px"
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
    );
  } else {
    return <div> </div>;
  }
};

export default ProfileSection;
