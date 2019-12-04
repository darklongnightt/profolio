import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  const { project } = props.location.state;
  if (project) {
    console.log(project);
    return (
      <div className="container section">
        <div className="card z-depth-0 project-details">
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

export default ProjectDetails;
