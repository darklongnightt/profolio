import React from "react";
import moment from "moment";

const ViewMode = props => {
  const { project, onDelete, onSetMode } = props;
  return (
    <React.Fragment>
      <a
        href="# "
        className="right grey-text text-darken-2 action-icon"
        onClick={() => onDelete(project.id)}
      >
        <i className="material-icons">delete</i>
      </a>
      <a
        href="# "
        className="right blue-text action-icon"
        onClick={() => onSetMode("EDIT")}
      >
        <i className="material-icons">edit</i>
      </a>

      {project.content}
      <div className="grey-text">
        <div>
          {project.modifiedAt &&
            "Modified " + moment(project.modifiedAt.toDate()).calendar()}
        </div>
        <div>Created {moment(project.createdAt.toDate()).calendar()}</div>
      </div>
    </React.Fragment>
  );
};

export default ViewMode;
