import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import M from "materialize-css";
import Notifications from "./Notifications";
import ManageEmployments from "../employments/ManageEmployments";
import ManageProjects from "../projects/ManageProjects";
import ManageEducations from "../educations/ManageEducations";
import ManageCustoms from "../custom/ManageCustoms";
import PublishSettings from "./PublishSettings";

class Dashboard extends Component {
  state = {
    modals: ""
  };

  componentDidMount() {
    M.AutoInit();
    var modals = document.querySelectorAll(".modal");
    var modalInstances = M.Modal.init(modals, {});
    this.setState({ modals: modalInstances });
  }

  handleCloseModal = () => {
    this.state.modals.map(modal => {
      return modal.close();
    });
  };

  render() {
    const { auth, notifications, profile } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (profile.isLoaded) {
      return (
        <div className="dashboard">
          <div className="row">
            <div className="col offset-m1 m5 s12">
              <ManageEducations onCloseModal={this.handleCloseModal} />
              <ManageEmployments onCloseModal={this.handleCloseModal} />
              <ManageProjects onCloseModal={this.handleCloseModal} />
              <ManageCustoms onCloseModal={this.handleCloseModal} />
            </div>

            <div className="col offset-m1 m3 s12">
              <PublishSettings profile={profile} />
            </div>
          </div>
        </div>
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
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "projects" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "projects"
      },
      { collection: "notifications", limit: 6, orderBy: ["time", "desc"] }
    ];
  })
)(Dashboard);
