import React from "react";

const ProfileSummary = props => {
  const { profile } = props;
  return (
    <div className="card">
      <div className="card-content">
        <h6 className="bold">Profile Summary</h6>
        <div className="">{!profile.photoUrl && "Add Profile Image"}</div>
        <div className="">{!profile.industry && "Add Industry"}</div>
        <div className="">{!profile.socialUrl && "Add LinkedIn"}</div>
        <div className="">{!profile.summary && "Add Summary"}</div>
      </div>
    </div>
  );
};

export default ProfileSummary;
