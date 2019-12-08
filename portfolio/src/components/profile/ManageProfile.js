import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";
import ProfileSummary from "./ProfileSummary";

class ManageProfile extends Component {
  render() {
    const { profile, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (!profile.isEmpty) {
      return (
        <React.Fragment>
          <ProfileSummary profile={profile} />
          <ViewProfile profile={profile}></ViewProfile>
          <EditProfile profile={profile}></EditProfile>
        </React.Fragment>
      );
    } else {
      return (
        <div className="container center">
          <div className="preloader-wrapper big active preloader-margin">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(ManageProfile);
