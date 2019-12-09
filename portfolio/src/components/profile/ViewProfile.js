import React from "react";
import PhotoUpload from "./PhotoUpload";

const ViewProfile = props => {
  const { profile } = props;

  return (
    <div className="card z-depth-0">
      <div className="card-content">
        <div className="row">
          <div className="col s12 m4 valign-wrapper">
            <PhotoUpload profile={profile} />
          </div>

          <div className="col s12 m8">
            <h5 className="bold">
              <i class="fa title-icon fa-user" aria-hidden="true"></i>
              Name
            </h5>
            <div>
              {profile.firstName} {profile.lastName}
            </div>

            <h5 className="bold">
              <i class="fa title-icon fa-industry" aria-hidden="true"></i>
              Industry
            </h5>
            <div>{profile.industry ? profile.industry : "Empty Field"}</div>

            <h5 className="bold">
              <i class="fa title-icon fa-envelope" aria-hidden="true"></i>
              Contact
            </h5>
            <div>{profile.email}</div>

            <h5 className="bold">
              <i class="fa title-icon fa-linkedin" aria-hidden="true"></i>
              LinkedIn
            </h5>
            <div>{profile.socialUrl ? profile.socialUrl : "Empty Field"}</div>

            <h5 className="bold">
              <i class="fa title-icon fa-book" aria-hidden="true"></i>
              Professional Summary
            </h5>
            <div>{profile.summary ? profile.summary : "Empty Field"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
