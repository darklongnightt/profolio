import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import ManageEmployments from "../employments/ManageEmployments";
import ManageProjects from "../projects/ManageProjects";
import M from "materialize-css";
import ManageProfile from "../profile/ManageProfile";

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
      modal.close();
    });
  };

  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard">
        <div className="row">
          <div className="col m6 s12">
            <ManageEmployments onCloseModal={this.handleCloseModal} />
            <ManageProjects onCloseModal={this.handleCloseModal} />
          </div>

          <div className="col m6 s12">
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
