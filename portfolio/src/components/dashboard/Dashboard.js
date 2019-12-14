import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import M from "materialize-css";
import ManageEmployments from "../employments/ManageEmployments";
import ManageProjects from "../projects/ManageProjects";
import ManageEducations from "../educations/ManageEducations";
import ManageCustoms from "../custom/ManageCustoms";
import PublishSettings from "./PublishSettings";
import Profile from "./Profile";

class Dashboard extends Component {
  state = {
    modals: ""
  };

  componentDidMount() {
    // Init materialize and modal components
    M.AutoInit();
    var modals = document.querySelectorAll(".modal");
    var modalInstances = M.Modal.init(modals, {});
    this.setState({ modals: modalInstances });

    const { action } = this.props.match.params;
    // Toast messages for user action feedback
    switch (action) {
      case "registered":
        M.toast({ html: "Successfully registered!" });
        break;

      case "signed_in":
        M.toast({ html: "Successfully signed in!" });
        break;

      default:
    }
  }

  handleCloseModal = () => {
    this.state.modals.map(modal => {
      return modal.close();
    });
  };

  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard">
        <div className="row">
          <div className="col offset-m1 m5 s12">
            <ManageEducations onCloseModal={this.handleCloseModal} />
            <ManageEmployments onCloseModal={this.handleCloseModal} />
            <ManageProjects onCloseModal={this.handleCloseModal} />
            <ManageCustoms onCloseModal={this.handleCloseModal} />
          </div>

          <div className="col dashboard-right m4 s12">
            {profile.isLoaded && <Profile profile={profile} />}
            {profile.isLoaded && <PublishSettings profile={profile} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Dashboard);
