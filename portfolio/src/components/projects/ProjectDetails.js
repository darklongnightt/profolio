import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = props => {
  const id = props.match.params.id;
  const { project } = props;

  if (project) {
    console.log(project);
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title + " - " + id}</span>
            <p>{project.content}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.firstName + " " + project.lastName}</div>
            <div>Date</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    project: state.firestore.data.projects && state.firestore.data.projects[id]
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [{ collection: "projects", doc: props.match.params.id }];
  })
)(ProjectDetails);
