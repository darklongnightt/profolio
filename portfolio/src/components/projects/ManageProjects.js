import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import M from "materialize-css";
import ManageProject from "./ManageProject";
import CreateProject from "./CreateProject";
import { deleteProject } from "../../store/actions/projectActions";
import { editProject } from "../../store/actions/projectActions";
import { createProject } from "../../store/actions/projectActions";

class ManageProjects extends Component {
  state = {
    modal: "",
    collapsible: ""
  };

  componentDidMount() {
    //Init and store all materialize elements
    var collaps = document.querySelectorAll(".collapsible");
    var collapsInstance = M.Collapsible.init(collaps, {});

    var modal = document.querySelector(".modal");
    var modalInstance = M.Modal.init(modal, {});
    this.setState({
      modal: modalInstance,
      collapsible: collapsInstance
    });
  }

  handleDelete = projectId => {
    this.props.deleteProject(projectId);
  };

  handleEdit = project => {
    this.props.editProject(project);
    this.state.modal.close();
  };

  handleCreate = project => {
    this.props.createProject(project);
    this.state.modal.close();
  };

  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="section container">
        <ul className="collapsible z-depth-0">
          {projects &&
            projects.map(project => {
              return (
                <li key={project.id}>
                  <div className="collapsible-header">
                    {project.title}
                    <i className="material-icons right">arrow_drop_down</i>
                  </div>

                  <div className="collapsible-body">
                    <ManageProject
                      onDelete={this.handleDelete}
                      onEdit={this.handleEdit}
                      project={project}
                    />
                  </div>
                </li>
              );
            })}
        </ul>

        <div className="center">
          <a
            className="btn-floating btn-large waves-effect waves-light red lighten-2 z-depth-0 modal-trigger"
            href="#newProject"
          >
            <i className="material-icons">add</i>
          </a>
        </div>

        <div id="newProject" className="modal modal-container">
          <div className="modal-content">
            <CreateProject onCreate={this.handleCreate} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: projectId => dispatch(deleteProject(projectId)),
    editProject: project => dispatch(editProject(project)),
    createProject: project => dispatch(createProject(project))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return [
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "projects" }],
        orderBy: ["createdAt", "desc"],
        storeAs: "projects"
      }
    ];
  })
)(ManageProjects);
