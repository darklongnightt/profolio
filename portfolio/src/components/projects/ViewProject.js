import React from "react";
import moment from "moment";

const ViewProject = props => {
  const { project, onDelete, onSetMode } = props;
  return (
    <React.Fragment>
      <a
        href="#!"
        className="right grey-text text-darken-2 action-icon"
        onClick={() => onDelete(project.id)}
      >
        <i className="material-icons">delete</i>
      </a>
      <a
        href="#!"
        className="right blue-text action-icon"
        onClick={() => onSetMode("EDIT")}
      >
        <i className="material-icons">edit</i>
      </a>

      <div className="large-text">{project.title}</div>

      <br />
      <div className="divider"></div>

      <div>
        <i className="fa fa-list-ul action-icon" aria-hidden="true"></i>
        {project.content}
      </div>

      <br />
      <div className="grey-text brand-text">
        <div>
          {project.modifiedAt &&
            "Modified " + moment(project.modifiedAt.toDate()).calendar()}
        </div>
        <div>Created {moment(project.createdAt.toDate()).calendar()}</div>
      </div>
    </React.Fragment>
  );
};

export default ViewProject;
