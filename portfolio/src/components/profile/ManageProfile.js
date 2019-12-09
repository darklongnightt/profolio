import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ViewProfile from "./ViewProfile";
import ProfileSummary from "./ProfileSummary";
import { editProfile } from "../../store/actions/profileActions";

class ManageProfile extends Component {
  handleEdit = profile => {
    this.props.editProfile(profile);
  };

  render() {
    const { profile, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (!profile.isEmpty) {
      return (
        <div className="section container">
          <div className="card z-depth-0 auth-form">
            <ProfileSummary profile={profile} onEdit={this.handleEdit} />
            <ViewProfile profile={profile} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="section container center">
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

const mapDispatchToProps = dispatch => {
  return {
    editProfile: profile => dispatch(editProfile(profile))
  };
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfile);
