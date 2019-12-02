import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            aperiam laboriosam corporis dignissimos excepturi.
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by "User"</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
