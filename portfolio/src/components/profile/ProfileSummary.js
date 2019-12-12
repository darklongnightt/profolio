import React, { Component } from "react";
import EditProfile from "./EditProfile";
import M from "materialize-css";

class ProfileSummary extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  handleCloseModal = () => {
    var elems = document.querySelector(".modal");
    var instance = M.Modal.init(elems, {});
    instance.close();
  };

  render() {
    const { profile, onEdit } = this.props;
    console.log(profile);

    // Get number of fields in profile not initialized to get progress
    const total = 8;
    var length = 0;
    Object.keys(profile).forEach(key => {
      if (profile[key] !== "" && profile[key] !== true && profile[key] !== false) {
        length++;
      }
    });
    var progress = (length / total) * 100;

    return (
      <div className="card z-depth-0 profile-summary grey darken-1 white-text center">
        <a
          className="btn-floating halfway-fab btn-large waves-effect waves-light blue modal-trigger"
          href="#editProfile"
        >
          <i className="material-icons">edit</i>
        </a>

        <div className="card-content">
          <h5 className="bold">
            Profile Progress:{" "}
            <span className="flow-text red-text bold brand-text">
              {progress}%
            </span>
          </h5>

          {progress === 100 && (
            <h5 className="green-text brand-text text-lighten-2 center">
              Hurray! Your profile is good to go!
            </h5>
          )}

          <ul>
            <li>
              {!profile.photoUrl && (
                <div>
                  <i
                    className="fa fa-plus-circle nav-icon"
                    aria-hidden="true"
                  ></i>
                  Add Profile Photo
                </div>
              )}
            </li>
            <li>
              {!profile.industry && (
                <a className="modal-trigger white-text" href="#editProfile">
                  <i
                    className="fa fa-plus-circle nav-icon"
                    aria-hidden="true"
                  ></i>
                  Add Industry
                </a>
              )}
            </li>
            <li>
              {!profile.socialUrl && (
                <a className="modal-trigger white-text" href="#editProfile">
                  <i
                    className="fa fa-plus-circle nav-icon"
                    aria-hidden="true"
                  ></i>
                  Add Social Link
                </a>
              )}
            </li>
            <li>
              {!profile.summary && (
                <a className="modal-trigger white-text" href="#editProfile">
                  <i
                    className="fa fa-plus-circle nav-icon"
                    aria-hidden="true"
                  ></i>
                  Add Summary
                </a>
              )}
            </li>
          </ul>
        </div>

        <div id="editProfile" className="modal modal-container black-text">
          <div className="modal-content">
            <EditProfile
              profile={profile}
              onEdit={onEdit}
              onCloseModal={this.handleCloseModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileSummary;
