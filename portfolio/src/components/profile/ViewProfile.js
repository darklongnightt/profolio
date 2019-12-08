import React from "react";

const ViewProfile = props => {
  const { profile } = props;

  return (
    <div className="card z-depth-0">
      <div className="card-content">
        <h4 className="bold">Profile Details</h4>

        <div className="row">
          <div className="col s6 m6">
            <h5 className="bold">Name</h5>
            <div>
              {profile.firstName} {profile.lastName}
            </div>

            <h5 className="bold">Contact</h5>
            <div>{profile.email}</div>
          </div>
          <div className="col s6 m6">
            <div className="profile-image">Image Placeholder</div>
            <h5 className="bold">Industry</h5>
            <div>{profile.jobType ? profile.jobType : "Empty Field"}</div>
          </div>
        </div>

        <h5 className="bold">Professional Summary</h5>
        <div>{profile.summary ? profile.summary : "Empty Field"}</div>

        <h5 className="bold">LinkedIn</h5>
        <div>{profile.socialUrl ? profile.socialUrl : "Empty Field"}</div>
      </div>
    </div>
  );
};

export default ViewProfile;
