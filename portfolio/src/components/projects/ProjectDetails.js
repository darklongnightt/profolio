import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const ProjectDetails = props => {
  const id = props.match.params.id;
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (project) {
    return (
      <div className="container section">
        <div className="card z-depth-0 project-details">
          <div className="card-content">
            <span className="card-title">{project.title + " - " + id}</span>
            <p>{project.content}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text ">
            <div>Posted by {project.firstName + " " + project.lastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
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
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects && projects[id];

  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [{ collection: "projects" }];
  })
)(ProjectDetails);
